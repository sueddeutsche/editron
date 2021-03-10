import { Patch } from "../utils/createDiff";
import Store from "../../store";
import { JSONData, JSONPointer } from "../../types";
import { UpdateDataEvent } from "../../editors/Editor";
import { Change, SimpleChange } from "./change";
/** Called before a single change in value will be notified */
declare type BeforeUpdateEvent = {
    type: "data:update:before";
    value: {
        pointer: JSONPointer;
        action: string;
    };
};
/** Called when a single change in value was notified */
declare type AfterUpdateEvent = {
    type: "data:update:after";
    value: {
        pointer: JSONPointer;
        patch: Patch;
    };
};
/** Additional event called when for single array or object change */
declare type ContainerUpdateEvent = {
    type: "data:update:container";
    value: {
        pointer: JSONPointer;
        changes: Array<Change>;
    };
};
/** Called when all updates have been notified */
declare type UpdateDoneEvent = {
    type: "data:update:done";
    value: Array<SimpleChange>;
};
export declare type Event = BeforeUpdateEvent | ContainerUpdateEvent | AfterUpdateEvent | UpdateDoneEvent;
export declare type Watcher = (event: Event) => void;
export declare type Observer = {
    (event: UpdateDataEvent): void;
    bubbleEvents?: boolean;
};
export default class DataService {
    /** current state */
    store: Store;
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
    constructor(store: Store, data?: JSONData);
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
     * @param [options]
     */
    set(pointer: JSONPointer, value: any, options?: {
        addToHistory?: boolean;
    }): void;
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
