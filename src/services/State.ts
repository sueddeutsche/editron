import { createStore, combineReducers } from "redux";
import { createNanoEvents } from "nanoevents";
import { init } from "@rematch/core";

const FLAG_CHANGED = "hasChanged";


interface Events {
    [pointer: string]: (subState) => void;
}


export default class State {
    FLAG_CHANGED = FLAG_CHANGED;
    emitter = createNanoEvents<Events>();
    reducers;
    store;

    constructor() {
        this.FLAG_CHANGED = FLAG_CHANGED;

        this.reducers = {
            action: (state, action) => action
        };

        // rematch
        // const store = init({ models });

        this.store = createStore(() => {}); // eslint-disable-line @typescript-eslint/no-empty-function
        this.store.subscribe(() => this.onChange(this.store.getState()));
    }

    onChange(currentState) {
        Object
            .keys(currentState)
            .forEach(id => {
                const subState = currentState[id];
                if (subState[FLAG_CHANGED] != null && subState[FLAG_CHANGED] !== false) {
                    this.emitter.emit(id, subState);
                }
            });
    }

    // http://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting
    register(id: string, reducer) {
        if (this.reducers[id]) {
            throw new Error(`A reducer with id ${id} is already registered`);
        }
        this.reducers[id] = reducer;
        this.store.replaceReducer(combineReducers(this.reducers));
    }

    unregister(id: string) {
        // @todo either remove reducers and data or make them reusable (per application id)
        // delete this.reducers[id];
        // this.store.replaceReducer(redux.combineReducers(this.reducers));
        const currentState = this.store.getState();
        delete currentState[id];
    }

    get(id: string) {
        const currentState = this.store.getState();
        return id == null ? currentState : currentState[id];
    }

    dispatch(...args) {
        return this.store.dispatch(...args);
    }

    /**
     * Subscribe to change (all) events
     * @param  {[type]}   id       [description]
     * @param  {Function} callback [description]
     */
    subscribe(id: string, callback) {
        if (typeof id !== "string" || typeof callback !== "function") {
            // eslint-disable-next-line prefer-rest-params
            throw new Error(`Invalid arguments for state.subscribe ${arguments}`);
        }

        const state = this.store.getState();
        if (state[id]?.[FLAG_CHANGED] == null) {
            throw new Error(`Could not subscribe to state ${id}. Property ${FLAG_CHANGED} not available`);
        }

        this.emitter.on(id, callback);
    }

    unsubscribe(id: string, callback) {
        if (typeof id !== "string" || typeof callback !== "function") {
            // eslint-disable-next-line prefer-rest-params
            throw new Error(`Invalid arguments for state.unsubscribe ${arguments}`);
        }
        this.emitter.events[id] = this.emitter.events[id]?.filter(func => func !== callback);
    }
}
