import { RematchStore, RematchRootState } from "@rematch/core";
import { DataReducers } from "../store/models/data";
import { ErrorReducers } from "../store/models/errors";
declare const models: {
    data: {
        state: import("./models/data").DataState;
        reducers: {
            clearHistory(state: import("./models/data").DataState): {
                past: any[];
                future: any[];
                undoSize: number;
                present: any;
            };
            removeLastUndo(state: import("./models/data").DataState): {
                past: any[];
                undoSize: number;
                present: any;
                future: any[];
            };
            undo(state: import("./models/data").DataState): import("./models/data").DataState;
            redo(state: import("./models/data").DataState): import("./models/data").DataState;
            set(state: import("./models/data").DataState, action: import("./models/data").ActionSet): import("./models/data").DataState;
        };
    };
    errors: {
        state: any[];
        reducers: {
            set(state: import("./models/errors").ErrorState, errors?: import("./models/errors").ErrorState): import("./models/errors").ErrorState;
        };
    };
};
export declare type Model = typeof models;
export declare type ModelReducers = {
    data: DataReducers;
    errors: ErrorReducers;
};
export default class Store {
    store: RematchStore<Model>;
    dispatch: ModelReducers;
    emitter: import("nanoevents").Emitter<import("nanoevents").DefaultEvents>;
    getState: () => RematchRootState<Model>;
    previousState?: RematchRootState<Model>;
    constructor();
    onChange(currentState: RematchRootState<Model>): void;
    get<T extends keyof ModelReducers>(id: T): RematchRootState<Model>[T];
    /** Subscribe to changes */
    subscribe<T extends keyof ModelReducers>(id: T, callback: (value: RematchRootState<Model>[T]) => void): void;
    unsubscribe(id: keyof ModelReducers, callback: any): void;
}
export {};
