import { Delta } from "./utils/getPatchesPerPointer";
import State from "./State";
import { Unsubscribe } from "nanoevents";
import { JSONData, JSONPointer } from "../types";
export declare enum EventType {
    /** called before starting data update */
    BEFORE_UPDATE = "beforeUpdate",
    /** called after data udpate was performed */
    AFTER_UPDATE = "afterUpdate",
    /** called after all updates with a list of patches */
    FINAL_UPDATE = "finalUpdate"
}
export declare type DataServiceEvent = {
    pointer: string;
    parentPointer: string;
    [p: string]: any;
};
export interface Events {
    /** called before starting data update */
    [EventType.BEFORE_UPDATE]: (pointer: JSONPointer, eventObject: DataServiceEvent) => void;
    /** called after data udpate was performed */
    [EventType.AFTER_UPDATE]: (pointer: JSONPointer, eventObject: DataServiceEvent) => void;
    /** called after all updates with a list of patches */
    [EventType.FINAL_UPDATE]: (patches: Array<DataServiceEvent>) => void;
}
export declare type Observer = {
    (event: DataServiceEvent): void;
    bubbleEvents?: boolean;
};
/**
 * Read and modify form data and notify observers
 * @param state - current state/store of application
 * @param data - current application data (form)
 */
export default class DataService {
    #private;
    /** state store-id of service */
    id: string;
    /** current state */
    state: State;
    /** current observers on json-pointer changes */
    observers: {
        [pointer: string]: Array<Observer>;
    };
    /** event emitter */
    emitter: import("nanoevents").Emitter<Events>;
    constructor(state: State, data?: JSONData);
    /** clear undo/redo stack */
    resetUndoRedo(): void;
    /**
     * Get a copy of current data from the requested `pointer`
     * @param [pointer="#"] - data to fetch. Defaults to _root_
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
    /** add an event listener to update events */
    on<T extends keyof Events>(eventType: T, callback: Events[T]): Unsubscribe;
    /** remove an event listener from update events */
    off<T extends keyof Events>(eventType: T, callback: Function): void;
    emit<T extends keyof Events>(eventType: T, pointer: JSONPointer, data: JSONData): void;
    /**
     * observes changes in data at the specified json-pointer
     * @param pointer - json-pointer to watch
     * @param callback - called on a change
     * @param bubbleEvents - set to true to receive notifications changes in children of pointer
     * @returns callback
     */
    observe<T extends Observer>(pointer: JSONPointer, callback: T, bubbleEvents?: boolean): T;
    /** stop an observer from watching changes on pointer */
    removeObserver(pointer: JSONPointer, callback: Observer): void;
    /** send an event to all json-pointer observers */
    notify(pointer: JSONPointer, event: any): void;
    bubbleObservers(pointer: JSONPointer, data: {
        type: string;
        patch: {
            [p: string]: Delta;
        };
    }): void;
    /** Test the pointer for existing data */
    isValid(pointer: JSONPointer): boolean;
    /** destroy service */
    destroy(): void;
}
