const redux = require("redux");
const mitt = require("mitt");
const FLAG_CHANGED = "hasChanged";


class State {
    constructor() {
        this.FLAG_CHANGED = FLAG_CHANGED;

        this.reducers = {
            action: (state, action) => action
        };
        this.emitter = mitt();
        this.store = redux.createStore(() => {}); // eslint-disable-line no-empty-function
        this.store.subscribe(() => this.onChange(this.store.getState()));
    }

    onChange(currentState) {
        Object
            .keys(currentState)
            .forEach((id) => {
                const subState = currentState[id];
                if (subState[FLAG_CHANGED] != null && subState[FLAG_CHANGED] !== false) {
                    this.emitter.emit(id, subState);
                }
            });
    }

    // eslint-disable-next-line
    // http://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application
    register(id, reducer) {
        if (this.reducers[id]) {
            throw new Error(`A reducer with id ${id} is already registered`);
        }
        this.reducers[id] = reducer;
        this.store.replaceReducer(redux.combineReducers(this.reducers));
    }

    unregister(id) {
        // @todo either remove reducers and data or make them reusable (per application id)
        // delete this.reducers[id];
        // this.store.replaceReducer(redux.combineReducers(this.reducers));
        const currentState = this.store.getState();
        delete currentState[id];
    }

    get(id) {
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
     * @return {[type]}            [description]
     */
    subscribe(id, callback) {
        if (typeof id !== "string" || typeof callback !== "function") {
            throw new Error(`Invalid arguments for state.subscribe ${arguments}`);
        }

        const state = this.store.getState();
        if (state[id] && state[id][FLAG_CHANGED] != null) {
            this.emitter.on(id, callback);
        } else {
            throw new Error(`Could not subscribe to state ${id}. Property ${FLAG_CHANGED} not available`);
        }
    }

    unsubscribe(id, callback) {
        if (typeof id !== "string" || typeof callback !== "function") {
            throw new Error(`Invalid arguments for state.unsubscribe ${arguments}`);
        }

        this.emitter.off(id, callback);
    }
}

State.FLAG_CHANGED = FLAG_CHANGED;


module.exports = State;
