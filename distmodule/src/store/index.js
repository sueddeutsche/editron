import { createNanoEvents } from "nanoevents";
import { init } from "@rematch/core";
import data from "../store/models/data";
import errors from "../store/models/errors";
const models = { data, errors };
export default class Store {
    constructor() {
        this.emitter = createNanoEvents();
        this.store = init({ models });
        this.dispatch = this.store.dispatch;
        this.getState = this.store.getState;
        this.store.subscribe(() => this.onChange(this.store.getState()));
    }
    onChange(currentState) {
        if (currentState === this.previousState) {
            return;
        }
        Object
            .keys(currentState)
            .forEach(id => {
            var _a;
            const subState = currentState[id];
            if (((_a = this.previousState) === null || _a === void 0 ? void 0 : _a[id]) !== subState) {
                this.emitter.emit(id, subState);
            }
        });
        this.previousState = currentState;
    }
    get(id) {
        return this.store.getState()[id];
    }
    /** Subscribe to changes */
    subscribe(id, callback) {
        this.emitter.on(id, callback);
    }
    unsubscribe(id, callback) {
        var _a, _b;
        this.emitter.events[id] = (_b = (_a = this.emitter.events[id]) === null || _a === void 0 ? void 0 : _a.filter(func => func !== callback)) !== null && _b !== void 0 ? _b : [];
    }
}
