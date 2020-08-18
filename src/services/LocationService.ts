import gp from "gson-pointer";
import UIState, { EventType as UIEvent } from "./uistate";
import { JSONPointer } from "../types";
const DELAY = 25;

function getViewportHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

/** called for a focused editor */
export type FocusEvent = {
    type: "focus";
    value: JSONPointer;
}

/** called for a blurred editor */
export type BlurEvent = {
    type: "blur";
    value: JSONPointer;
}

/** called, when a new page is focused (page = first property on root data) */
export type PageEvent = {
    type: "location:page";
    value: JSONPointer;
}

/** called, when the current selected json-pointer has changed */
export type TargetEvent = {
    type: "location:target";
    value: JSONPointer;
}

export type Event = FocusEvent|BlurEvent|PageEvent|TargetEvent;

export type Watcher = (event: Event) => void;


export type Options = {
    /** default root element, where any json-pointers (editron widgets) are
    searched for. Defaults to `document.body` */
    rootElement?: HTMLElement;
    /** additional offset in px, to scroll into view. In case you want to
    adjust scroll-position on focus (e.g. skip a header). Defaults to 0 */
    scrollTopOffset?: number;
    /** regular expression to identify page-target within a json-pointer */
    pagePattern?: string;
}

export const defaultOptions: Options = {
    rootElement: document.body,
    scrollTopOffset: 0,
    pagePattern: "(^#?/[^/]+)"
};


export default class LocationService {

    PAGE_EVENT = "page";
    TARGET_EVENT = "target";
    timeout: ReturnType<typeof setTimeout>;
    options: Options;

    watcher: Array<Watcher> = [];


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
        this.setCurrent("");

        UIState.on(UIEvent.CURRENT_PAGE, pointer =>
            this.notifyWatcher(<PageEvent>{ type: "location:page", value: pointer }));

        UIState.on(UIEvent.CURRENT_POINTER, pointer =>
            this.notifyWatcher(<TargetEvent>{ type: "location:target", value: pointer }));
    }

    // update page and target pointer
    goto(targetPointer: JSONPointer, rootElement = this.options.rootElement) {
        const matches = targetPointer.match(new RegExp(this.options.pagePattern));
        if (!matches) {
            return;
        }

        const nextPage = matches.pop();
        const currentPage = UIState.getCurrentPage();
        if (currentPage !== nextPage) {
            UIState.setCurrentPage(gp.join(nextPage, true));
        }
        UIState.setCurrentPointer(gp.join(targetPointer, true));
        this.focus(rootElement);
    }

    /** set target pointer */
    setCurrent(pointer: JSONPointer) {
        if (pointer !== this.getCurrent()) {
            UIState.setCurrentPointer(pointer);
            this.notifyWatcher(<FocusEvent>{ type: "focus", value: pointer });
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
        this.notifyWatcher(<BlurEvent>{ type: "blur", value: pointer });
    }

    watch(watcher: Watcher): LocationService {
        if (this.watcher.includes(watcher) === false) {
            this.watcher.push(watcher);
        }
        return this;
    }

    notifyWatcher(event: Event): LocationService {
        this.watcher.forEach(w => w(event));
        return this;
    }

    removeWatcher(watcher: Watcher): LocationService {
        this.watcher = this.watcher.filter(w => w !== watcher);
        return this;
    }
}
