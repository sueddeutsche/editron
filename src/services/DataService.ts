import copy from "./utils/copy";
import dataReducer from "./reducers/dataReducer";
import diffpatch from "./utils/diffpatch";
import getParentPointer from "./utils/getParentPointer";
import createDiff, { Patch, PatchResult } from "./utils/createDiff";
import getTypeOf from "json-schema-library/lib/getTypeOf";
import gp from "gson-pointer";
import isRootPointer from "./utils/isRootPointer";
import State from "./State";
import { ActionTypes, ActionCreators } from "./reducers/actions";
import { createNanoEvents, Unsubscribe } from "nanoevents";
import { JSONData, JSONPointer } from "../types";
import { isPointer } from "../utils/UISchema";

const DEBUG = false;


export enum EventType {
    /** called before starting data update */
    BEFORE_UPDATE = "beforeUpdate",
    /** called for changes array items order, receiving a list of move, add and delete operations */
    UPDATE_CONTAINER = "updateContainer",
    /** called after data udpate was performed */
    AFTER_UPDATE = "afterUpdate",
    /** called after all updates with a list of patches */
    FINAL_UPDATE = "finalUpdate"
}

export type DataServiceEvent = {
    pointer: string;
    parentPointer: string;
    [p: string]: any;
}


export interface Events {
    /** called before starting data update */
    [EventType.BEFORE_UPDATE]: (pointer: JSONPointer, eventObject: DataServiceEvent) => void;
    /** called for changes array items order, receiving a list of move, add and delete operations */
    [EventType.UPDATE_CONTAINER]: (pointer: JSONPointer, change: Array<Change>) => void;
    /** called after data udpate was performed */
    [EventType.AFTER_UPDATE]: (pointer: JSONPointer, eventObject: DataServiceEvent) => void;
    /** called after all updates with a list of patches */
    [EventType.FINAL_UPDATE]: (patches: Array<DataServiceEvent>) => void;
}

export type Observer = {
    (event: DataServiceEvent): void;
    bubbleEvents?: boolean;
}

type AddChange = {
    type: "add";
    next: JSONPointer;
    data?: any;
}

type DeleteChange = {
    type: "delete";
    old: JSONPointer;
}

type MoveChange = {
    type: "move";
    old: JSONPointer;
    next: JSONPointer;
}

export type Change = AddChange|DeleteChange|MoveChange;

export const isAddChange = (change): change is AddChange => change?.type === "add";
export const isDeleteChange = (change): change is DeleteChange => change?.type === "delete";
export const isMoveChange = (change): change is MoveChange => change?.type === "move";

/** converts a patch to a list of simple changes for add, delete and move operations */
function getArrayChangeList(patchResult: PatchResult, originalData: any): Array<Change> {
    const changeList = [];

    const eventLocation = patchResult.pointer;
    const originalArray = gp.get(originalData, eventLocation).map((_, index) => `${eventLocation}/${index}`);
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
    /** state store-id of service */
    id = "data";
    /** current state */
    state: State;
    /** current observers on json-pointer changes */
    observers: {
        [pointer: string]: Array<Observer>;
    };
    /** event emitter */
    emitter = createNanoEvents<Events>();
    /** internal value to track previous data */
    lastUpdate = {};

    /**
     * Read and modify form data and notify observers
     * @param state - current state/store of application
     * @param data - current application data (form)
     */
    constructor(state: State, data?: JSONData) {
        if (!(state instanceof State)) {
            throw new Error("Given state in DataService must be of instance 'State'");
        }

        this.observers = {};
        this.state = state;
        this.state.register(this.id, dataReducer);
        this.onStateChanged = this.onStateChanged.bind(this);
        this.state.subscribe(this.id, this.onStateChanged);

        if (data !== undefined) {
            this.set("#", data);
            this.resetUndoRedo();
        }
    }

    // improved version - supporting multiple patches
    onStateChanged() {
        const current = this.state.get(this.id);
        const patches = createDiff(this.lastUpdate, current.data.present);
        if (patches.length === 0) {
            return;
        }

        for (let i = 0, l = patches.length; i < l; i += 1) {
            const eventLocation = patches[i].pointer;
            const parentData = this.getDataByReference(eventLocation);
            const parentDataType = getTypeOf(parentData);

            // build simple patch-information and notify about changes in pointer for move-instance support
            // this is a major performance improvement for array-item movements
            if (parentDataType === "array") {
                const changes = getArrayChangeList(patches[i], this.lastUpdate);
                console.log("changed array", changes);
                this.emitter.emit(EventType.UPDATE_CONTAINER, eventLocation, changes);

            } else if (parentDataType === "object") {
                const changes = getObjectChangeList(patches[i]);
                console.log("changed object", changes);
                this.emitter.emit(EventType.UPDATE_CONTAINER, eventLocation, changes);
            }

            this.emit(EventType.AFTER_UPDATE, eventLocation, { type: parentDataType, patch: patches[i].patch });
            this.bubbleObservers(eventLocation, { type: parentDataType, patch: patches[i].patch });
        }

        this.emitter.emit(EventType.FINAL_UPDATE, patches);
        this.lastUpdate = current.data.present;
    }

    /** clear undo/redo stack */
    resetUndoRedo() {
        this.state.get(this.id).data.past.length = 0;
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
        // eslint-disable-next-line no-invalid-this
        return gp.get(this.state.get(this.id).data.present, pointer);
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

        this.emit(EventType.BEFORE_UPDATE, pointer, { action: ActionTypes.DATA_SET, isSynched });
        this.state.dispatch(ActionCreators.setData(pointer, value, currentValue, isSynched));

        if (pointer === "#" && isSynched === false) {
            // do not add root changes to undo
            this.state.get(this.id).data.past.pop();
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
        return this.state.get(this.id).data.past.length;
    }

    /** get valid redo count */
    redoCount(): number {
        return this.state.get(this.id).data.future.length;
    }

    /** undo last change */
    undo() {
        this.emit(EventType.BEFORE_UPDATE, "#", { action: ActionTypes.UNDO });
        this.state.dispatch(ActionCreators.undo());
    }

    /** redo last undo */
    redo() {
        this.emit(EventType.BEFORE_UPDATE, "#", { action: ActionTypes.REDO });
        this.state.dispatch(ActionCreators.redo());
    }

    /** add an event listener to update events */
    on<T extends keyof Events>(eventType: T, callback: Events[T]): Unsubscribe {
        return this.emitter.on(eventType, callback);
    }

    /** remove an event listener from update events */
    off<T extends keyof Events>(eventType: T, callback: Function): void {
        // @ts-ignore
        this.emitter.events[eventType] = this.emitter.events[eventType].filter(func => func !== callback);
    }

    emit<T extends keyof Events>(eventType: T, pointer: JSONPointer, data: JSONData) {
        // @ts-ignore
        this.emitter.emit(eventType, createEventObject(pointer, data));
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
    }

    /** send an event to all json-pointer observers */
    notify(pointer: JSONPointer, event) {
        if (this.observers[pointer] == null || this.observers[pointer].length === 0) {
            return;
        }
        const observers = this.observers[pointer];
        for (let i = 0, l = observers.length; i < l; i += 1) {
            if (observers[i].bubbleEvents === true || event.pointer === pointer) {
                observers[i](event);
            }
        }
    }

    bubbleObservers(pointer: JSONPointer, data: { type: string, patch: Patch }) {
        const eventObject = createEventObject(pointer, data);
        const frags = gp.split(pointer);
        while (frags.length) {
            this.notify(gp.join(frags, true), eventObject);
            frags.length -= 1;
        }
        this.notify("#", eventObject);
    }

    /** Test the pointer for existing data */
    isValid(pointer: JSONPointer): boolean {
        return isRootPointer(pointer) || gp.get(this.getDataByReference(), pointer) !== undefined;
    }

    /** destroy service */
    destroy() {
        this.state.unsubscribe(this.id, this.onStateChanged);
        this.state.unregister(this.id);
    }
}


function createEventObject(pointer: JSONPointer, data: object): DataServiceEvent {
    return {
        ...data,
        pointer,
        parentPointer: getParentPointer(pointer)
    };
}
