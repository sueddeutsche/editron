import { Patch, PatchResult } from "./utils/createDiff";
import State from "./State";
import { JSONData, JSONPointer } from "../types";
import { UpdateDataEvent } from "../editors/Editor";
export declare type AddChange = {
    type: "add";
    next: JSONPointer;
    data?: any;
};
export declare type DeleteChange = {
    type: "delete";
    old: JSONPointer;
};
export declare type MoveChange = {
    type: "move";
    old: JSONPointer;
    next: JSONPointer;
};
export declare type Change = AddChange | DeleteChange | MoveChange;
export declare const isAddChange: (change: any) => change is AddChange;
export declare const isDeleteChange: (change: any) => change is DeleteChange;
export declare const isMoveChange: (change: any) => change is MoveChange;
declare type BeforeUpdateEvent = {
    type: "data:update:before";
    value: {
        pointer: JSONPointer;
        action: string;
    };
};
declare type AfterUpdateEvent = {
    type: "data:update:after";
    value: {
        pointer: JSONPointer;
        patch: Patch;
    };
};
declare type ContainerUpdateEvent = {
    type: "data:update:container";
    value: {
        pointer: JSONPointer;
        changes: Array<Change>;
    };
};
declare type UpdateDoneEvent = {
    type: "data:update:done";
    value: Array<PatchResult>;
};
export declare type Event = BeforeUpdateEvent | ContainerUpdateEvent | AfterUpdateEvent | UpdateDoneEvent;
export declare type Watcher = (event: Event) => void;
export declare type Observer = {
    (event: UpdateDataEvent): void;
    bubbleEvents?: boolean;
};
export default class DataService {
    /** state store-id of service */
    id: string;
    /** current state */
    state: State;
    /** current observers on json-pointer changes */
    observers: {
        [pointer: string]: Array<Observer>;
    };
    /** internal value to track previous data */
    lastUpdate: {};
    /** list of active watchers on update-lifecycle events */
    watcher: any[];
    /**
     * Read and modify form data and notify observers
     * @param state - current state/store of application
     * @param data - current application data (form)
     */
    constructor(state: State, data?: JSONData);
    onStateChanged(): void;
    /** clear undo/redo stack */
    resetUndoRedo(): void;
    /**
     * Get a copy of current data from the requested `pointer`
     * @param [pointer] - data to fetch. Defaults to _root_
     * @returns data, associated with `pointer`
     */
    get(pointer?: JSONPointer): any;
    /** returns a reference to data from the requested `pointer` (cheaper)
     * @param [pointer="#"] - data to fetch. Defaults to _root_
     * @returns data, associated with `pointer`
     */
    getDataByReference(pointer?: JSONPointer): any;
    /**
     * Change data at the given `pointer`
     * @param pointer - data location to modify
     * @param value - new value at pointer
     * @param [isSynched]
     */
    set(pointer: JSONPointer, value: any, isSynched?: boolean): void;
    /**
     * Delete data at the given `pointer`
     * @param pointer - data location to delete
     */
    delete(pointer: JSONPointer): void;
    /** get valid undo count */
    undoCount(): number;
    /** get valid redo count */
    redoCount(): number;
    /** undo last change */
    undo(): void;
    /** redo last undo */
    redo(): void;
    notifyWatcher(event: Event): void;
    /** watch DataService lifecycle events */
    watch(callback: Watcher): Watcher;
    removeWatcher(callback: Watcher): void;
    /**
     * observes changes in data at the specified json-pointer
     * @param pointer - json-pointer to watch
     * @param callback - called on a change
     * @param bubbleEvents - set to true to receive notifications changes in children of pointer
     * @returns callback
     */
    observe<T extends Observer>(pointer: JSONPointer, callback: T, bubbleEvents?: boolean): T;
    /** stop an observer from watching changes on pointer */
    removeObserver(pointer: JSONPointer, callback: Observer): this;
    /** send an event to all json-pointer observers */
    notify(pointer: JSONPointer, event: UpdateDataEvent): void;
    bubbleObservers(pointer: JSONPointer, event: UpdateDataEvent): void;
    /** Test the pointer for existing data */
    isValid(pointer: JSONPointer): boolean;
    /** destroy service */
    destroy(): void;
}
export {};
