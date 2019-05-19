const mitt = require("mitt");
const State = require("../State");
const ActionCreators = require("./actions").ActionCreators;
const uiReducer = require("./uiReducer");


const EVENTS = {
    OVERLAY_EVENT: "overlay",
    CURRENT_POINTER_EVENT: "current",
    CURRENT_PAGE_EVENT: "page"
};


class UIState {

    constructor() {
        this.id = "ui";
        this.state = new State();
        this.emitter = mitt();
        this.state.register(this.id, uiReducer);
        // @todo: subscribe to state-changes and diff current state?
    }

    get(property) {
        return this.state.get(this.id).ui[property];
    }

    getCurrentPointer() {
        return this.get("currentPointer");
    }

    getCurrentPage() {
        return this.get("currentPage");
    }

    setOverlay(content = false) {
        const currentContent = this.get("overlay");
        if (currentContent !== content) {
            this.state.dispatch(ActionCreators.setOverlay(content));
            this.emitter.emit(EVENTS.OVERLAY_EVENT, this.get("overlay"));
        }
    }

    on(...args) { this.emitter.on(...args); }
    off(...args) { this.emitter.off(...args); }

    setCurrentPage(pointer) {
        const currentPage = this.get("currentPage");
        if (currentPage !== pointer) {
            this.state.dispatch(ActionCreators.setCurrentPage(pointer));
            this.emitter.emit(EVENTS.CURRENT_PAGE_EVENT, this.get("currentPage"));
        }
    }

    setCurrentPointer(pointer) {
        const currentPointer = this.get("currentPointer");
        if (currentPointer !== pointer) {
            this.state.dispatch(ActionCreators.setCurrentPointer(pointer));
            this.emitter.emit(EVENTS.CURRENT_POINTER_EVENT, this.get("currentPointer"));
        }
    }
}

const Singleton = new UIState();
Singleton.UIStateContructor = UIState;
Singleton.EVENTS = EVENTS;

module.exports = Singleton;
