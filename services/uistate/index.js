const mitt = require("mitt");
const State = require("json-data-services/lib/state");
const ActionCreators = require("./actions").ActionCreators;
const uiReducer = require("./uiReducer");


const EVENTS = {
    OVERLAY_EVENT: "overlay",
    CURRENT_POINTER_EVENT: "current",
    CURRENT_PAGE_EVENT: "page"
};


class UIState {

    constructor() {
        this.id = State.createId("ui");
        this.emitter = mitt();
        State.register(this.id, uiReducer);
        // @todo: subscribe to state-changes and diff current state?
    }

    get(property) {
        return State.get(this.id).ui[property];
    }

    getCurrentPointer() {
        return this.get("currentPointer");
    }

    getCurrentPage() {
        return this.get("currentPage");
    }

    setOverlay(content = false) {
        const currentContent = State.get(this.id).overlay;
        if (currentContent !== content) {
            State.dispatch(ActionCreators.setOverlay(content));
            this.emitter.emit(EVENTS.OVERLAY_EVENT, this.get("overlay"));
        }
    }

    on(...args) { this.emitter.on(...args); }
    off(...args) { this.emitter.off(...args); }

    setCurrentPage(pointer) {
        const currentPage = State.get(this.id).currentPage;
        if (currentPage !== pointer) {
            State.dispatch(ActionCreators.setCurrentPage(pointer));
            this.emitter.emit(EVENTS.CURRENT_PAGE_EVENT, this.get("currentPage"));
        }
    }

    setCurrentPointer(pointer) {
        const currentPointer = State.get(this.id).currentPointer;
        if (currentPointer !== pointer) {
            State.dispatch(ActionCreators.setCurrentPointer(pointer));
            this.emitter.emit(EVENTS.CURRENT_POINTER_EVENT, this.get("currentPointer"));
        }
    }
}

const Singleton = new UIState();
Singleton.UIStateContructor = UIState;
Singleton.EVENTS = EVENTS;

module.exports = Singleton;
