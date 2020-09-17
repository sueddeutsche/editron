import { JSONPointer } from "../types";
/** called for a focused editor */
export declare type FocusEvent = {
    type: "focus";
    value: JSONPointer;
};
/** called for a blurred editor */
export declare type BlurEvent = {
    type: "blur";
    value: JSONPointer;
};
/** called, when a new page is focused (page = first property on root data) */
export declare type PageEvent = {
    type: "location:page";
    value: JSONPointer;
};
/** called, when the current selected json-pointer has changed */
export declare type TargetEvent = {
    type: "location:target";
    value: JSONPointer;
};
export declare type Event = FocusEvent | BlurEvent | PageEvent | TargetEvent;
export declare type Watcher = (event: Event) => void;
export declare type Options = {
    /** default root element, where any json-pointers (editron widgets) are
    searched for. Defaults to `document.body` */
    rootElement?: HTMLElement;
    /** additional offset in px, to scroll into view. In case you want to
    adjust scroll-position on focus (e.g. skip a header). Defaults to 0 */
    scrollTopOffset?: number;
    /** regular expression to identify page-target within a json-pointer */
    pagePattern?: string;
};
export declare const defaultOptions: Options;
export default class LocationService {
    PAGE_EVENT: string;
    TARGET_EVENT: string;
    timeout: ReturnType<typeof setTimeout>;
    options: Options;
    watcher: Array<Watcher>;
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
    constructor(options?: Options);
    goto(targetPointer: JSONPointer, rootElement?: HTMLElement): void;
    /** set target pointer */
    setCurrent(pointer: JSONPointer): void;
    getCurrent(): string;
    /** trigger focus in input element. Will be ignored, if this is no input element */
    focusInputElement(pointer: JSONPointer, rootElement?: HTMLElement): void;
    /** focus target pointer */
    focus(rootElement?: HTMLElement): void;
    blur(pointer: JSONPointer): void;
    watch(watcher: Watcher): LocationService;
    notifyWatcher(event: Event): LocationService;
    removeWatcher(watcher: Watcher): LocationService;
    destroy(): void;
}
