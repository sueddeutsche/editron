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
export default class LocationService {

    PAGE_EVENT = "page";
    TARGET_EVENT = "target";
    timeout: number;

    constructor() {
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
    focus() {
        clearTimeout(this.timeout);
        const pointer = UIState.getCurrentPointer();
        const id = getId(pointer);
        const targetElement = document.getElementById(id);
        // console.log(`pointer ${pointer} - id ${id}`, targetElement);
        if (targetElement == null) {
            // console.log(`Location:focus - target ${pointer} (id ${id}) not found`);
            return;
        }
        // const targetPosition = targetElement.getBoundingClientRect().top
        this.timeout = setTimeout(() => {
            // try scrolling to header-row in container (low height) to have a more robust scroll target position
            let scrollTarget: HTMLElement = targetElement.querySelector(".editron-container > .editron-container__header");
            scrollTarget = (scrollTarget == null || scrollTarget.offsetParent === null) ? targetElement : scrollTarget;
            scrollTarget.scrollIntoView();

            // @todo only fire focus event?
            targetElement.dispatchEvent(new Event("focus"));
            targetElement.focus && targetElement.focus();

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
