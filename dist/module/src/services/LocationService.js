import gp from "gson-pointer";
const DELAY = 25;
import { getState, dispatch, watch as watchState } from "../store/global";
import getScrollParent from "./utils/getScrollParent";
function getViewportHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}
export const defaultOptions = {
    rootElement: document.body,
    scrollTopOffset: 0,
    pagePattern: "(^#?/[^/]+)"
};
function isWindow(dom) {
    return dom === window;
}
function scrollIntoView(targetElement, scrollTopOffset = 0, callback) {
    const scrollContainer = getScrollParent(targetElement);
    const bound = targetElement.getBoundingClientRect();
    if (isWindow(scrollContainer)) {
        window.scrollTo(0, window.scrollY + (bound.top - scrollTopOffset));
        // const viewportHeight = getViewportHeight();
        // if (bound.top < scrollTopOffset || bound.bottom > viewportHeight) {
        //     window.scrollTo(0, window.scrollY + (bound.top - scrollTopOffset));
        // } else { console.log("skip scrolling - already in viewport", viewportHeight, bound.top); }
        if (callback)
            callback();
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
                || (scrollPosition > scrollMax && scrollContainer.scrollTop === scrollMax)) {
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
    constructor(options = {}) {
        this.PAGE_EVENT = "page";
        this.TARGET_EVENT = "target";
        this.watcher = [];
        this.options = { ...defaultOptions, ...options };
        this.setCurrent("");
        watchState(event => {
            if (event.type === "global" && event.value.modelId === "ui") {
                const { changes } = event.value;
                if (changes.currentPage) {
                    this.notifyWatcher({ type: "location:page", value: changes.currentPage });
                }
                if (changes.currentPointer) {
                    this.notifyWatcher({ type: "location:target", value: changes.currentPointer });
                }
            }
        });
    }
    // update page and target pointer
    goto(targetPointer, rootElement = this.options.rootElement) {
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
    setCurrent(pointer) {
        if (pointer !== this.getCurrent()) {
            dispatch.ui.setCurrentPointer(pointer);
            this.notifyWatcher({ type: "focus", value: pointer });
        }
    }
    getCurrent() {
        return getState().ui.currentPointer;
    }
    /** trigger focus in input element. Will be ignored, if this is no input element */
    focusInputElement(pointer, rootElement = this.options.rootElement) {
        const targetInput = rootElement.querySelector(`[data-id="${pointer}"]`);
        if (targetInput) {
            targetInput.dispatchEvent(new Event("focus"));
            targetInput.focus && targetInput.focus();
        }
    }
    /** focus target pointer */
    focus(rootElement = this.options.rootElement) {
        clearTimeout(this.timeout);
        const pointer = getState().ui.currentPointer;
        const targetElement = rootElement.querySelector(`[data-point="${pointer}"]`);
        if (targetElement == null) {
            console.log(`Location:focus - target ${pointer} not found`);
            return;
        }
        this.timeout = setTimeout(() => {
            const { scrollTopOffset } = this.options;
            if (this.options.scrollCallback) {
                this.notifyWatcher({ type: "location:scroll-start", value: pointer });
                scrollIntoView(targetElement, scrollTopOffset, () => this.notifyWatcher({ type: "location:scroll-finish", value: pointer }));
            }
            else {
                scrollIntoView(targetElement, scrollTopOffset);
            }
            this.focusInputElement(pointer, rootElement);
            this.timeout = null;
        }, DELAY);
    }
    blur(pointer) {
        if (getState().ui.currentPointer !== pointer) {
            return;
        }
        dispatch.ui.setCurrentPage("");
        this.notifyWatcher({ type: "blur", value: pointer });
    }
    watch(watcher) {
        if (this.watcher.includes(watcher) === false) {
            this.watcher.push(watcher);
        }
        return this;
    }
    notifyWatcher(event) {
        this.watcher.forEach(w => w(event));
        return this;
    }
    removeWatcher(watcher) {
        this.watcher = this.watcher.filter(w => w !== watcher);
        return this;
    }
    destroy() {
        clearTimeout(this.timeout);
        this.watcher.length = 0;
    }
}
