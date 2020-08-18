import { createNanoEvents, Unsubscribe } from "nanoevents";
import State from "../State";
import { ActionCreators } from "./actions";
import uiReducer from "./uiReducer";
import { JSONPointer } from "../../types";


export enum EventType {
    OVERLAY = "overlay",
    CURRENT_POINTER = "current",
    CURRENT_PAGE = "page"
}

export interface Events {
    [EventType.OVERLAY]: (overlay: { element: HTMLElement, options? }) => void;
    [EventType.CURRENT_POINTER]: (currentPointer: JSONPointer) => void;
    [EventType.CURRENT_PAGE]: (currentPage: JSONPointer) => void;
}


class UIState {
    id = "ui";
    state: State;
    emitter = createNanoEvents<Events>();
    UIStateContructor;
    EVENTS;

    constructor() {
        this.id = "ui";
        this.state = new State();
        this.state.register(this.id, uiReducer);
        // @todo: subscribe to state-changes and diff current state?
    }

    get(property: string): any {
        return this.state.get(this.id).ui[property];
    }

    getCurrentPointer(): JSONPointer {
        return this.get("currentPointer");
    }

    getCurrentPage() {
        return this.get("currentPage");
    }

    setOverlay(content = false) {
        const currentContent = this.get("overlay");
        if (currentContent !== content) {
            this.state.dispatch(ActionCreators.setOverlay(content));
            this.emitter.emit(EventType.OVERLAY, this.get("overlay"));
        }
    }

    /** add an event listener to update events */
    on<T extends keyof Events>(eventType: T, callback: Events[T]): Unsubscribe {
        return this.emitter.on(eventType, callback);
    }

    /** remove an event listener from update events */
    off<T extends keyof Events>(eventType: T, callback: (pointer: JSONPointer) => void): void {
        if (Array.isArray(this.emitter.events[eventType])) {
            // @ts-ignore
            this.emitter.events[eventType] = this.emitter.events[eventType].filter(func => func !== callback);
        }
    }

    setCurrentPage(pointer) {
        const currentPage = this.get("currentPage");
        if (currentPage !== pointer) {
            this.state.dispatch(ActionCreators.setCurrentPage(pointer));
            this.emitter.emit(EventType.CURRENT_PAGE, this.get("currentPage"));
        }
    }

    setCurrentPointer(pointer) {
        const currentPointer = this.get("currentPointer");
        if (currentPointer !== pointer) {
            this.state.dispatch(ActionCreators.setCurrentPointer(pointer));
            this.emitter.emit(EventType.CURRENT_POINTER, this.get("currentPointer"));
        }
    }
}

const Singleton = new UIState();
Singleton.UIStateContructor = UIState;

export default Singleton;
