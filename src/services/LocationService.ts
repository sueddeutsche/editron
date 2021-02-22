import gp from "gson-pointer";
import { JSONPointer } from "../types";
const DELAY = 25;
import { getState, dispatch, watch as watchState } from "../store/global";
import getScrollParent from "./utils/getScrollParent";


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

export type ScrollStartEvent = {
    type: "location:scroll-start";
    value: JSONPointer;
}

export type ScrollFinishEvent = {
    type: "location:scroll-finish";
    value: JSONPointer;
}

export type Event = FocusEvent|BlurEvent|PageEvent|TargetEvent|ScrollFinishEvent|ScrollStartEvent;

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
    /** a scoll callback event is fired when the desired position is scrolled */
    scrollCallback?: boolean;
}

export const defaultOptions: Options = {
    rootElement: document.body,
    scrollTopOffset: 0,
    pagePattern: "(^#?/[^/]+)"
};


function isWindow(dom): dom is Window {
    return dom === window;
}

function scrollIntoView(targetElement: HTMLElement, scrollTopOffset = 0, callback?: () => void): void {
    const scrollContainer = getScrollParent(targetElement);
    const bound = targetElement.getBoundingClientRect();

    if (isWindow(scrollContainer)) {
        window.scrollTo(0, window.scrollY + (bound.top - scrollTopOffset));
        // const viewportHeight = getViewportHeight();
        // if (bound.top < scrollTopOffset || bound.bottom > viewportHeight) {
        //     window.scrollTo(0, window.scrollY + (bound.top - scrollTopOffset));
        // } else { console.log("skip scrolling - already in viewport", viewportHeight, bound.top); }
        if (callback) callback();
        return;
    }

    // scroll target element to top of scroll container
    const parentBound = scrollContainer.getBoundingClientRect();
    // distance from parent-container -> element, aka scroll distance
    const offsetInParent = bound.y - parentBound.y;
    const scrollDistance = scrollContainer.scrollTop;
    // we want to scroll element to top of parent-bound
    const scrollPosition = scrollDistance + offsetInParent - scrollTopOffset;

    if (callback) {
        const scrollMax = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        const onScroll = () => {
            if (scrollContainer.scrollTop === scrollPosition
                || (scrollPosition > scrollMax && scrollContainer.scrollTop === scrollMax)
            ){
                scrollContainer.removeEventListener('scroll', onScroll);
                callback();
            }
        };
        scrollContainer.addEventListener('scroll', onScroll);
        onScroll();
    }

    scrollContainer.scrollTo(0, scrollPosition);
}


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

        watchState(event => {
            if (event.type === "global" && event.value.modelId === "ui") {
                const { changes } = event.value;
                if (changes.currentPage) {
                    this.notifyWatcher(<PageEvent>{ type: "location:page", value: changes.currentPage });
                }
                if (changes.currentPointer) {
                    this.notifyWatcher(<TargetEvent>{ type: "location:target", value: changes.currentPointer });
                }
            }
        });
    }

    // update page and target pointer
    goto(targetPointer: JSONPointer, rootElement = this.options.rootElement) {
        const matches = targetPointer.match(new RegExp(this.options.pagePattern));
        if (!matches) {
            console.log("abort - not pagePattern match");
            return;
        }

        const nextPage = matches.pop();
        const { currentPage } = getState().ui;
        if (currentPage !== nextPage) {
            dispatch.ui.setCurrentPage(gp.join(nextPage, true));
        }
        dispatch.ui.setCurrentPointer(gp.join(targetPointer, true));
        this.focus(rootElement);
    }

    /** set target pointer */
    setCurrent(pointer: JSONPointer) {
        if (pointer !== this.getCurrent()) {
            dispatch.ui.setCurrentPointer(pointer);
            this.notifyWatcher(<FocusEvent>{ type: "focus", value: pointer });
        }
    }

    getCurrent() {
        return getState().ui.currentPointer;
    }

    /** trigger focus in input element. Will be ignored, if this is no input element */
    focusInputElement(pointer: JSONPointer, rootElement = this.options.rootElement) {
        const targetInput = <HTMLElement>rootElement.querySelector(`[data-id="${pointer}"]`);
        if (targetInput) {
            targetInput.dispatchEvent(new Event("focus"));
            targetInput.focus && targetInput.focus();
        }
    }

    /** focus target pointer */
    focus(rootElement = this.options.rootElement) {
        clearTimeout(this.timeout);
        const pointer = getState().ui.currentPointer;
        const targetElement = <HTMLElement>rootElement.querySelector(`[data-point="${pointer}"]`)    ;

        if (targetElement == null) {
            console.log(`Location:focus - target ${pointer} not found`);
            return;
        }

        this.timeout = setTimeout(() => {
            const { scrollTopOffset } = this.options;

            if (this.options.scrollCallback) {
                this.notifyWatcher(<ScrollStartEvent>{ type: "location:scroll-start", value: pointer });
                scrollIntoView(
                    targetElement,
                    scrollTopOffset,
                    () => this.notifyWatcher(<ScrollFinishEvent>{ type: "location:scroll-finish", value: pointer })
                );
            } else {
                scrollIntoView(targetElement, scrollTopOffset);
            }

            this.focusInputElement(pointer, rootElement);
            this.timeout = null;
        }, DELAY);
    }

    blur(pointer: JSONPointer) {
        if (getState().ui.currentPointer !== pointer) {
            return;
        }
        dispatch.ui.setCurrentPage("");
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

    destroy() {
        clearTimeout(this.timeout);
        this.watcher.length = 0;
    }
}
