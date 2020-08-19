import { createNanoEvents } from "nanoevents";
import { init, RematchStore, RematchRootState } from "@rematch/core";
import data, { DataReducers } from "../store/models/data";
import errors, { ErrorReducers } from "../store/models/errors";


const models = { data, errors };

export type Model = typeof models;

export type ModelReducers = {
    data: DataReducers;
    errors: ErrorReducers;
}


export default class Store {
    store: RematchStore<Model>;
    dispatch: ModelReducers; // usually ModelReducers & typeof store.dispatch
    emitter = createNanoEvents();
    getState: () => RematchRootState<Model>;
    previousState?: RematchRootState<Model>;


    constructor() {
        this.store = init({ models });
        this.dispatch = this.store.dispatch;
        this.getState = this.store.getState;
        this.store.subscribe(() => this.onChange(this.store.getState()));
    }

    onChange(currentState: RematchRootState<Model>) {
        if (currentState === this.previousState) {
            return;
        }

        Object
            .keys(currentState)
            .forEach(id => {
                const subState = currentState[id];
                if (this.previousState?.[id] !== subState) {
                    this.emitter.emit(id, subState);
                }
            });

        this.previousState = currentState;
    }

    get<T extends keyof ModelReducers>(id: T): RematchRootState<Model>[T] {
        return this.store.getState()[id];
    }

    /** Subscribe to changes */
    subscribe<T extends keyof ModelReducers>(id: T, callback: (value: RematchRootState<Model>[T]) => void) {
        this.emitter.on(id, callback);
    }

    unsubscribe(id: keyof ModelReducers, callback) {
        this.emitter.events[id] = this.emitter.events[id]?.filter(func => func !== callback) ?? [];
    }
}
