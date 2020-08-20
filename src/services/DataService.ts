import copy from "./utils/copy";
import diffpatch from "./utils/diffpatch";
import getParentPointer from "./utils/getParentPointer";
import createDiff, { Patch, PatchResult } from "./utils/createDiff";
import getTypeOf from "json-schema-library/lib/getTypeOf";
import gp from "gson-pointer";
import isRootPointer from "./utils/isRootPointer";
import Store from "../store";
import { JSONData, JSONPointer } from "../types";
import { isPointer } from "../utils/UISchema";
import { UpdateDataEvent } from "../editors/Editor";

const DEBUG = false;
const ID = "data";


function pointerMap(data, pointer, result = []) {
    if (data == null) {
        return;

    } else if (Array.isArray(data)) {
        data.forEach((value, index) => {
            pointerMap(value, `${pointer}/${index}`, result);
        });

    } else if (typeof data === "object") {
        Object.keys(data).forEach(property =>
            property !== "_id" && pointerMap(data[property], `${pointer}/${property}`, result)
        );

    }

    if (result.includes(pointer) === false) {
        result.push(pointer);
    }

    return result;
}


export type AddChange = {
    type: "add";
    next: JSONPointer;
    data?: any;
}

export type DeleteChange = {
    type: "delete";
    old: JSONPointer;
}

export type MoveChange = {
    type: "move";
    old: JSONPointer;
    next: JSONPointer;
}

export type ValueChange = {
    type: "value";
    old: JSONPointer;
    next: JSONPointer;
}

export type Change = AddChange|DeleteChange|MoveChange|ValueChange;

export const isAddChange = (change): change is AddChange => change?.type === "add";
export const isDeleteChange = (change): change is DeleteChange => change?.type === "delete";
export const isMoveChange = (change): change is MoveChange => change?.type === "move";

type BeforeUpdateEvent = {
    type: "data:update:before";
    value: { pointer: JSONPointer; action: string; };
}

type AfterUpdateEvent = {
    type: "data:update:after";
    value: { pointer: JSONPointer; patch: Patch };
}

type ContainerUpdateEvent = {
    type: "data:update:container";
    value: { pointer: JSONPointer; changes: Array<Change> };
}

type UpdateDoneEvent = {
    type: "data:update:done";
    value: Array<SimpleChange>;
}

export type SimpleChange = { type: "add"|"delete"|"update", pointer: JSONPointer, from?: JSONPointer, to?: JSONPointer };

export type Event = BeforeUpdateEvent|ContainerUpdateEvent|AfterUpdateEvent|UpdateDoneEvent;

export type Watcher = (event: Event) => void;

export type Observer = {
    (event: UpdateDataEvent): void;
    bubbleEvents?: boolean;
}


function changeSequence(a, b) {
    if (a.type === b.type) {
        // longest pointer first (outer to inner)
        return b.pointer.length - a.pointer.length;
    }
    // delete first
    if (a.type === "delete") {
        return -1;
    } else if (b.type === "delete") {
        return 1;
    }
    // move next
    if (a.type === "move") {
        return -1;
    } else if (b.type === "move") {
        return 1;
    }
    // at last add
    if (a.type === "add") {
        return -1;
    } else if (b.type === "add") {
        return 1;
    }
    throw new Error(`Uncaught comparisson ${a.type}:${b.type}`);
}


/** converts a patch to a list of simple changes for add, delete and move operations */
function getArrayChangeList(patchResult: PatchResult, originalData: any): Array<Change> {
    const changeList = [];

    const eventLocation = patchResult.pointer;
    let originalArray = gp.get(originalData, eventLocation);
    if (Array.isArray(originalArray) === false) {
        return changeList;
    }
    originalArray = originalArray.map((_, index) => `${eventLocation}/${index}`);
    const changedArray = diffpatch.patch(Array.from(originalArray), patchResult.patch);

    // retrieve deleted items
    for (let i = 0, l = originalArray.length; i < l; i += 1) {
        if (changedArray.includes(originalArray[i]) === false) {
            const change: DeleteChange = { type: "delete", old: originalArray[i] };
            changeList.push(change);
        }
    }

    // identify added and movement items
    for (let i = 0, l = changedArray.length; i < l; i += 1) {
        let change: AddChange|MoveChange;
        const ptrOrData = changedArray[i];
        const ptrChanged = ptrOrData !== `${eventLocation}/${i}`;
        if (ptrChanged === false) {
            continue;
        }

        if (isPointer(ptrOrData)) {
            change = <MoveChange>{ type: "move", old: ptrOrData, next: `${eventLocation}/${i}` };
        } else {
            change = <AddChange>{ type: "add", next: `${eventLocation}/${i}`, data: ptrOrData };
        }
        changeList.push(change);
    }

    return changeList;
}

function getObjectChangeList(patchResult: PatchResult): Array<Change> {
    const changeList = [];
    const { pointer } = patchResult;
    const properties = Object.keys(patchResult.patch);
    for (let i = 0, l = properties.length; i < l; i += 1) {
        const property = properties[i];
        const change = patchResult.patch[property];
        if (change.length === 1) {
            changeList.push(<AddChange>{ type: "add", next: `${pointer}/${property}` });
        } else if (change[2] === 0) {
            changeList.push(<DeleteChange>{ type: "delete", old: `${pointer}/${property}` });
        } else if (change[2] === 3) {
            console.log("object property movement", patchResult);
            throw new Error(`Property movement currently unsupported (${JSON.stringify(change)})`);
        }
        // changed value
        // else if (change.length === 2) { console.log("change", `${patch.pointer}/${property}`); }
    }
    return changeList;
}


export default class DataService {
    /** current state */
    store: Store;
    /** current observers on json-pointer changes */
    observers: { [pointer: string]: Array<Observer> } = {};
    /** internal value to track previous data */
    lastUpdate = {};
    /** list of active watchers on update-lifecycle events */
    watcher = [];


    /**
     * Read and modify form data and notify observers
     * @param state - current state/store of application
     * @param data - current application data (form)
     */
    constructor(store: Store, data?: JSONData) {
        if (!(store instanceof Store)) {
            throw new Error("Given state in DataService must be of instance 'State'");
        }

        this.store = store;
        this.onStateChanged = this.onStateChanged.bind(this);
        this.store.subscribe(ID, this.onStateChanged);

        if (data !== undefined) {
            this.set("#", data);
            this.resetUndoRedo();
        }
    }

    // improved version - supporting multiple patches
    onStateChanged() {
        const { present: data } = this.store.get(ID);
        const patches = createDiff(this.lastUpdate, data);
        if (patches.length === 0) {
            return;
        }

        const allChanges = [];

        for (let i = 0, l = patches.length; i < l; i += 1) {
            const eventLocation = patches[i].pointer;
            const parentData = this.getDataByReference(eventLocation);
            const parentDataType = getTypeOf(parentData);

            let changes;

            // build simple patch-information and notify about changes in pointer for move-instance support
            // this is a major performance improvement for array-item movements
            if (parentDataType === "array") {
                changes = getArrayChangeList(patches[i], this.lastUpdate);
                this.notifyWatcher({ type: "data:update:container", value: { pointer: eventLocation, changes }});

            } else if (parentDataType === "object") {
                changes = getObjectChangeList(patches[i]);
                this.notifyWatcher({ type: "data:update:container", value: { pointer: eventLocation, changes }});

            } else {
                const change: ValueChange = { type: "value", old: eventLocation, next: eventLocation };
                changes = [change];
                // this.notifyWatcher({ type: "data:update:container", value: { pointer: eventLocation, changes }});
            }

            const payload = { pointer: eventLocation, patch: patches[i].patch };
            this.notifyWatcher({ type: "data:update:after", value: payload });
            this.bubbleObservers(eventLocation, { type: "data:update", value: payload });
            allChanges.push(...changes);
        }

        const valueStream: Array<SimpleChange> = [];
        allChanges.forEach(change => {

            if (change.type === "value") {
                valueStream.push({ type: "update", pointer: change.old });

            } else if (change.type === "add") {
                pointerMap(gp.get(data, change.next), change.next, [change.next]).forEach(pointer => {
                    valueStream.push({ type: "add", pointer });
                });

            } else if (change.type === "delete") {
                pointerMap(gp.get(this.lastUpdate, change.old), change.old, [change.old]).forEach(pointer => {
                    valueStream.push({ type: "delete", pointer });
                });

            } else if (change.type === "move") {
                pointerMap(gp.get(this.lastUpdate, change.old, [change.old]), change.old).forEach(pointer => {
                    valueStream.push({ type: "delete", pointer, to: pointer.replace(change.old, change.next) });
                });
                pointerMap(gp.get(data, change.next), change.next, [change.next]).forEach(pointer => {
                    valueStream.push({ type: "add", pointer, from: pointer.replace(change.next, change.old) });
                });
            }
        });

        valueStream.sort(changeSequence);
        this.notifyWatcher(<UpdateDoneEvent>{ type: "data:update:done", value: valueStream });
        this.lastUpdate = data;
    }

    /** clear undo/redo stack */
    resetUndoRedo() {
        this.store.dispatch.data.clearHistory();
        this.store.previousState?.errors.pop();
    }

    /**
     * Get a copy of current data from the requested `pointer`
     * @param [pointer] - data to fetch. Defaults to _root_
     * @returns data, associated with `pointer`
     */
    get(pointer: JSONPointer = "#") {
        const value = this.getDataByReference(pointer);
        return copy(value);
    }

    /** returns a reference to data from the requested `pointer` (cheaper)
     * @param [pointer="#"] - data to fetch. Defaults to _root_
     * @returns data, associated with `pointer`
     */
    getDataByReference(pointer: JSONPointer = "#") {
        const state = this.store.store.getState();
        return gp.get(state.data.present, pointer);
    }

    /**
     * Change data at the given `pointer`
     * @param pointer - data location to modify
     * @param value - new value at pointer
     * @param [isSynched]
     */
    set(pointer: JSONPointer, value: any, isSynched = false) {
        if (this.isValid(pointer) === false) {
            throw new Error(`Pointer ${pointer} does not exist in data`);
        }

        const currentValue = this.getDataByReference(pointer);
        if (diffpatch.diff(currentValue, value) == null) {
            DEBUG && console.info("DataService abort update -- value not changed");
            return;
        }

        this.notifyWatcher({ type: "data:update:before", value: { pointer, action: "data" }});
        // this.store.dispatch(ActionCreators.setData(pointer, value, currentValue, isSynched));
        this.store.dispatch.data.set({ pointer, value });

        if (pointer === "#" && isSynched === false) {
            const store = this.store.store;
            store.dispatch.data.removeLastUndo();
            // do not add root changes to undo
            // this.store.get(this.id).data.past.pop();
        }
    }

    /**
     * Delete data at the given `pointer`
     * @param pointer - data location to delete
     */
    delete(pointer: JSONPointer) {
        if (isRootPointer(pointer)) {
            throw new Error("Can not remove root data via delete. Use set(\"#/\", {}) instead.");
        }

        const key = pointer.split("/").pop();
        const parentPointer = getParentPointer(pointer);
        const data = this.get(parentPointer);

        gp.delete(data, key);
        this.set(parentPointer, data);
    }

    /** get valid undo count */
    undoCount(): number {
        return this.store.get(ID).past.length;
    }

    /** get valid redo count */
    redoCount(): number {
        return this.store.get(ID).future.length;
    }

    /** undo last change */
    undo() {
        this.notifyWatcher({ type: "data:update:before", value: { pointer: "#", action: "undo" }});
        this.store.dispatch.data.undo();
        // this.store.dispatch(ActionCreators.undo());
    }

    /** redo last undo */
    redo() {
        this.notifyWatcher({ type: "data:update:before", value: { pointer: "#", action: "redo" }});
        // this.store.dispatch(ActionCreators.redo());
        this.store.dispatch.data.redo();
    }

    notifyWatcher(event: Event) {
        this.watcher.forEach(watcher => watcher(event));
    }

    /** watch DataService lifecycle events */
    watch(callback: Watcher) {
        if (this.watcher.includes(callback) === false) {
            this.watcher.push(callback);
        }
        return callback;
    }

    removeWatcher(callback: Watcher) {
        this.watcher = this.watcher.filter(watcher => watcher !== callback);
    }

    /**
     * observes changes in data at the specified json-pointer
     * @param pointer - json-pointer to watch
     * @param callback - called on a change
     * @param bubbleEvents - set to true to receive notifications changes in children of pointer
     * @returns callback
     */
    observe<T extends Observer>(pointer: JSONPointer, callback: T, bubbleEvents = false): T {
        callback.bubbleEvents = bubbleEvents;
        this.observers[pointer] = this.observers[pointer] || [];
        this.observers[pointer].push(callback);
        return callback;
    }

    /** stop an observer from watching changes on pointer */
    removeObserver(pointer: JSONPointer, callback: Observer) {
        if (this.observers[pointer] && this.observers[pointer].length > 0) {
            this.observers[pointer] = this.observers[pointer].filter(cb => cb !== callback);
        }
        return this;
    }

    /** send an event to all json-pointer observers */
    notify(pointer: JSONPointer, event: UpdateDataEvent) {
        if (this.observers[pointer] == null || this.observers[pointer].length === 0) {
            return;
        }
        const observers = this.observers[pointer];
        for (let i = 0, l = observers.length; i < l; i += 1) {
            if (observers[i].bubbleEvents === true || event.value.pointer === pointer) {
                observers[i](event);
            }
        }
    }

    bubbleObservers(pointer: JSONPointer, event: UpdateDataEvent) {
        const frags = gp.split(pointer);
        while (frags.length) {
            this.notify(gp.join(frags, true), event);
            frags.length -= 1;
        }
        this.notify("#", event);
    }

    /** Test the pointer for existing data */
    isValid(pointer: JSONPointer): boolean {
        return isRootPointer(pointer) || gp.get(this.getDataByReference(), pointer) !== undefined;
    }

    /** destroy service */
    destroy() {
        this.store.unsubscribe(ID, this.onStateChanged);
    }
}

