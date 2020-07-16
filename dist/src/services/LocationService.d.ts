import { Unsubscribe } from "nanoevents";
import { JSONPointer } from "../types";
export declare enum EventType {
    /** called for a focused editor */
    FOCUS = "focus",
    /** called for a blurred editor */
    BLUR = "blur",
    /** called, when a new page is focused (page = first property on root data) */
    PAGE = "page",
    /** called, when the current selected json-pointer has changed */
    TARGET = "target"
}
export interface Events {
    /** called for a focused editor */
    [EventType.FOCUS]: (pointer: JSONPointer) => void;
    /** called for a blurred editor */
    [EventType.BLUR]: (pointer: JSONPointer) => void;
    /** called, when a new page is focused (page = first property on root data) */
    [EventType.PAGE]: (pointer: JSONPointer) => void;
    /** called, when the current selected json-pointer has changed */
    [EventType.TARGET]: (pointer: JSONPointer) => void;
}
/**
 * Register to page changes, target-pointer changes or to (re)scroll to the current pointer in view.
 *
 * The LocationService manages global pointer states and scroll position:
 *  - the "current pointer" tracks the currently focused editor and
 *  - the "page pointer" corresponds to the first property of "current pointer", which may be used for main page loading
 *
 * ### Motivation
 *
 * Jumping to specific editors via the navigation requires a targeting system. A page reload may occur for a called
 * anchor, and thus is scrolled into view async. In other cases the current view may be completely rebuilt which
 * resets the scroll position to top. A stored pointer (current) may be used to retrieve the scroll position.
 * named anchors fail when hash routes are present. Thus anchors are processed via javascript.
 */
declare const LocationService: {
    PAGE_EVENT: string;
    TARGET_EVENT: string;
    goto(targetPointer: JSONPointer): void;
    /** set target pointer */
    setCurrent(pointer: JSONPointer): void;
    getCurrent(): string;
    /** focus target pointer */
    focus(): void;
    blur(pointer: JSONPointer): void;
    /** add an event listener to update events */
    on<T extends EventType>(eventType: T, callback: Events[T]): Unsubscribe;
    /** remove an event listener from update events */
    off<T_1 extends EventType>(eventType: T_1, callback: Function): void;
};
export default LocationService;
