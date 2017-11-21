/* global document */
const mitt = require("mitt");
const gp = require("gson-pointer");
const UIState = require("./uistate");
const getId = require("../utils/getID");
const DELAY = 25;

const emitter = mitt();


/**
 * Register to page changes, target-pointer changes or to (re)scroll to the current pointer in view.
 *
 * The LocationService manages global pointer states and scroll position:
 *  - the "current pointer" tracks the currently focused editor and
 *  - the "page pointer" corresponds to the first property of "current pointer", which may be used for main page loading
 *
 *  Motivation
 *      Jumping to specific editors via the navigation requires a targeting system. A page reload may occur for a called
 *      anchor, and thus is scrolled into view async. In other cases the current view may be completely rebuilt which
 *      resets the scroll position to top. A stored pointer (current) may be used to retrieve the scroll position.
 *      named anchors fail when hash routes are present. Thus anchors are processed via javascript.
 *
 * @type {Object}
 */
const LocationService = {

    PAGE_EVENT: "page",
    TARGET_EVENT: "target",

    // update page and target pointer
    goto(targetPointer) {
        const path = gp.split(targetPointer);
        // targetPointer = gp.join(targetPointer);
        if (path.length === 0) {
            return;
        }

        const nextPage = path[0];
        const currentPage = UIState.getCurrentPage();
        if (currentPage !== nextPage) {
            UIState.setCurrentPage(nextPage);
        }
        UIState.setCurrentPointer(targetPointer);
        this.focus();
    },

    // set target pointer
    setCurrent(pointer) {
        if (pointer !== this.getCurrent()) {
            UIState.setCurrentPointer(pointer);
            emitter.emit("focus", pointer);
        }
    },

    getCurrent() {
        return UIState.getCurrentPointer();
    },

    // focus target pointer
    focus() {
        clearTimeout(this.timeout);
        const pointer = UIState.getCurrentPointer();
        let targetElement = document.getElementById(pointer);
        if (targetElement == null) {
            targetElement = document.getElementById(getId(pointer));
        }
        if (targetElement == null) {
            return;
        }
        // const targetPosition = targetElement.getBoundingClientRect().top
        this.timeout = setTimeout(() => {
            // console.log("focus element", pointer, targetElement);
            // const newTargetPosition = targetElement.getBoundingClientRect();
            targetElement.focus && targetElement.focus();

            if (targetElement.scrollIntoViewIfNeeded) {
                targetElement.scrollIntoViewIfNeeded();
            } else {
                targetElement.scrollIntoView();
            }

        }, DELAY);
    },

    blur(pointer) {
        // UIState.setCurrentPointer("");
        emitter.emit("blur", pointer);
    },

    on: (...args) => emitter.on(...args),
    off: (...args) => emitter.off(...args)
};

UIState.on(UIState.EVENTS.CURRENT_PAGE_EVENT, (pointer) => emitter.emit(LocationService.PAGE_EVENT, pointer));
UIState.on(UIState.EVENTS.CURRENT_POINTER_EVENT, (pointer) => emitter.emit(LocationService.TARGET_EVENT, pointer));


module.exports = LocationService;
