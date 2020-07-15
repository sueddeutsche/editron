import mitt from "mitt";
import gp from "gson-pointer";
import UIState from "./uistate";
import getId from "../utils/getID";
import { JSONPointer } from "../types";
const DELAY = 25;

const emitter = mitt();


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
const LocationService = {

    PAGE_EVENT: "page",
    TARGET_EVENT: "target",

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
    },

    /** set target pointer */
    setCurrent(pointer: JSONPointer) {
        if (pointer !== this.getCurrent()) {
            UIState.setCurrentPointer(pointer);
            emitter.emit("focus", pointer);
        }
    },

    getCurrent() {
        return UIState.getCurrentPointer();
    },

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
    },

    blur(pointer: JSONPointer) {
        if (UIState.getCurrentPointer() !== pointer) {
            return;
        }
        UIState.setCurrentPointer("");
        emitter.emit("blur", pointer);
    },

    // @ts-ignore
    on: (...args) => emitter.on(...args),
    // @ts-ignore
    off: (...args) => emitter.off(...args)
};

// @ts-ignore
UIState.on(UIState.EVENTS.CURRENT_PAGE_EVENT, pointer => emitter.emit(LocationService.PAGE_EVENT, pointer));
// @ts-ignore
UIState.on(UIState.EVENTS.CURRENT_POINTER_EVENT, pointer => emitter.emit(LocationService.TARGET_EVENT, pointer));


export default LocationService;
