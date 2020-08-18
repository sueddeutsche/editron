import { Unsubscribe } from "nanoevents";
import State from "../State";
import { JSONPointer } from "../../types";
export declare enum EventType {
    OVERLAY = "overlay",
    CURRENT_POINTER = "current",
    CURRENT_PAGE = "page"
}
export interface Events {
    [EventType.OVERLAY]: (overlay: {
        element: HTMLElement;
        options?: any;
    }) => void;
    [EventType.CURRENT_POINTER]: (currentPointer: JSONPointer) => void;
    [EventType.CURRENT_PAGE]: (currentPage: JSONPointer) => void;
}
declare class UIState {
    id: string;
    state: State;
    emitter: import("nanoevents").Emitter<Events>;
    UIStateContructor: any;
    EVENTS: any;
    constructor();
    get(property: string): any;
    getCurrentPointer(): JSONPointer;
    getCurrentPage(): any;
    setOverlay(content?: boolean): void;
    /** add an event listener to update events */
    on<T extends keyof Events>(eventType: T, callback: Events[T]): Unsubscribe;
    /** remove an event listener from update events */
    off<T extends keyof Events>(eventType: T, callback: (pointer: JSONPointer) => void): void;
    setCurrentPage(pointer: any): void;
    setCurrentPointer(pointer: any): void;
}
declare const Singleton: UIState;
export default Singleton;
