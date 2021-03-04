import copy from "../utils/copy";
import diffpatch from "../utils/diffpatch";
import createDiff, { Patch } from "../utils/createDiff";
import { getTypeOf } from "json-schema-library";
import gp from "gson-pointer";
import isRootPointer from "../utils/isRootPointer";
import Store from "../../store";
import { JSONData, JSONPointer } from "../../types";

import { UpdateDataEvent } from "../../editors/Editor";
import { Change, SimpleChange, changesFromPatchResult, changesWithChildPointers } from "./change";


const ID = "data";


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

export type Event = BeforeUpdateEvent|ContainerUpdateEvent|AfterUpdateEvent|UpdateDoneEvent;

export type Watcher = (event: Event) => void;

export type Observer = {
    (event: UpdateDataEvent): void;
    bubbleEvents?: boolean;
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

        // @todo simplify event-arguments: we have patches, changes and simplechanges
        for (let i = 0, l = patches.length; i < l; i += 1) {
            const eventLocation = patches[i].pointer;
            const parentData = this.getDataByReference(eventLocation);
            const parentDataType = getTypeOf(parentData);

            // build simple patch-information and notify about changes in pointer for move-instance support
            // this is a major performance improvement for array-item movements
            const changes = changesFromPatchResult(patches[i], parentDataType, this.lastUpdate);
            if (parentDataType === "array" || parentDataType === "object") {
                this.notifyWatcher({ type: "data:update:container", value: { pointer: eventLocation, changes }});
            }

            // collect all changes fo change-stream
            allChanges.push(...changes);

            const payload = { pointer: eventLocation, patch: patches[i].patch };
            this.notifyWatcher({ type: "data:update:after", value: payload });
            this.bubbleObservers(eventLocation, { type: "data:update", value: payload });
        }

        const changeStream = changesWithChildPointers(allChanges, this.lastUpdate, data);
        this.notifyWatcher(<UpdateDoneEvent>{ type: "data:update:done", value: changeStream });
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
     * @param [options]
     */
    set(pointer: JSONPointer, value: any, options?: { addToHistory?: boolean }) {
        if (this.isValid(pointer) === false) {
            throw new Error(`Pointer ${pointer} does not exist in data`);
        }

        const currentValue = this.getDataByReference(pointer);
        if (diffpatch.diff(currentValue, value) == null) {
            return;
        }

        if (pointer === "#") {
            // do not add root changes to undo (for sync, skip this)
            options = { ...options, addToHistory: false};
        }

        this.notifyWatcher({ type: "data:update:before", value: { pointer, action: "data" }});
        // this.store.dispatch(ActionCreators.setData(pointer, value, currentValue, isSynched));
        this.store.dispatch.data.set({ pointer, value, addToHistory: options?.addToHistory });
    }

    /**
     * Delete data at the given `pointer`
     * @param pointer - data location to delete
     */
    delete(pointer: JSONPointer) {
        if (isRootPointer(pointer)) {
            throw new Error("Can not remove root data via delete. Use set(\"#/\", {}) instead.");
        }

        const frags = gp.split(pointer);
        const key = frags.pop();
        const parentPointer = gp.join(frags);
        const data = this.get(parentPointer);

        gp.remove(data, key);
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

