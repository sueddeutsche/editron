import { createNanoEvents, Unsubscribe } from "nanoevents";
import gp from "gson-pointer";
import UIState, { EventType as UIEvent } from "./uistate";
import getId from "../utils/getID";
import { JSONPointer } from "../types";
const DELAY = 25;


export enum EventType {
    /** called for a focused editor */
    FOCUS = "focus",
    /** called for a blurred editor */
    BLUR = "blur",
    /** called, when a new page is focused (page = first property on root data) */
    PAGE = "page",
    /** called, when the current selected json-pointer has changed */
    TARGET = "target",
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


const emitter = createNanoEvents<Events>();


function getViewportHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}


export type Options = {
    /** default root element, where any json-pointers (editron widgets) are
    searched for. Defaults to `document.body` */
    rootElement?: HTMLElement;
    /** additional offset in px, to scroll into view. In case you want to
    adjust scroll-position on focus (e.g. skip a header). Defaults to 0 */
    scrollTopOffset?: number;
}

export const defaultOptions: Options = {
    rootElement: document.body,
    scrollTopOffset: 0
}


export default class LocationService {

    PAGE_EVENT = "page";
    TARGET_EVENT = "target";
    timeout: ReturnType<typeof setTimeout>;
    options: Options;


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
    constructor(options: Options = {}) {
        this.options = { ...defaultOptions, ...options };

        UIState.on(UIEvent.CURRENT_PAGE, pointer => emitter.emit(EventType.PAGE, pointer));
        UIState.on(UIEvent.CURRENT_POINTER, pointer => emitter.emit(EventType.TARGET, pointer));
    }

    // update page and target pointer
    goto(targetPointer: JSONPointer) {
        const path = gp.split(targetPointer);

        if (path.length === 0 || (path.length === 1 && path[0] === "")) {
            return;
        }

        const nextPage = path[0];
        const currentPage = UIState.getCurrentPage();
        if (currentPage !== nextPage) {
            UIState.setCurrentPage(gp.join(nextPage, true));
        }
        UIState.setCurrentPointer(gp.join(targetPointer, true));
        this.focus();
    }

    /** set target pointer */
    setCurrent(pointer: JSONPointer) {
        if (pointer !== this.getCurrent()) {
            UIState.setCurrentPointer(pointer);
            emitter.emit(EventType.FOCUS, pointer);
        }
    }

    getCurrent() {
        return UIState.getCurrentPointer();
    }

    /** focus target pointer */
    focus(rootElement = this.options.rootElement) {
        clearTimeout(this.timeout);

        const pointer = UIState.getCurrentPointer();
        const targetElement = <HTMLElement>rootElement.querySelector(`[data-point="${pointer}"]`);
        if (targetElement == null) {
            console.log(`Location:focus - target ${pointer} not found`);
            return;
        }

        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            const { scrollTopOffset } = this.options;
            const bound = targetElement.getBoundingClientRect();
            const viewportHeight = getViewportHeight();
            if (bound.top < scrollTopOffset || bound.bottom > viewportHeight) {
                // @note: this works only if editron is within a scrollable page
                window.scrollTo(0, bound.top + scrollTopOffset);
            } else {
                console.log("skip scrolling - already in viewport", viewportHeight, bound.top);
            }

            targetElement.dispatchEvent(new Event("focus"));
            // @todo only fire focus event?
            // targetElement.focus && targetElement.focus();
            this.timeout = null;
        }, DELAY);
    }

    blur(pointer: JSONPointer) {
        if (UIState.getCurrentPointer() !== pointer) {
            return;
        }
        UIState.setCurrentPointer("");
        emitter.emit(EventType.BLUR, pointer);
    }

    /** add an event listener to update events */
    on<T extends keyof Events>(eventType: T, callback: Events[T]): Unsubscribe {
        return emitter.on(eventType, callback);
    }

    /** remove an event listener from update events */
    off<T extends keyof Events>(eventType: T, callback: Function): void {
        if (Array.isArray(emitter.events[eventType])) {
            emitter.events[eventType] = emitter.events[eventType].filter(func => func !== callback);
        }
    }
};
