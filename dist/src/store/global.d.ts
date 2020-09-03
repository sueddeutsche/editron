import { UIReducers } from "./models/ui";
export declare type ModelReducers = {
    ui: UIReducers;
};
export declare type Dispatch = ModelReducers & typeof store.dispatch;
declare const store: import("@rematch/core").RematchStore<{
    ui: {
        state: import("./models/ui").UIState;
        reducers: {
            setCurrentPage(state: import("./models/ui").UIState, pointer: string): import("./models/ui").UIState; /** watch global changes, like ui */
            setCurrentPointer(state: import("./models/ui").UIState, pointer: string): import("./models/ui").UIState;
            showOverlay(state: import("./models/ui").UIState, overlayIsVisible: boolean): import("./models/ui").UIState;
        };
    };
}, import("@rematch/core").Action<any, any>>;
/** rematch-redux dispatch */
export declare const dispatch: Dispatch;
/** rematch-redux getState */
export declare const getState: () => import("@rematch/core").ExtractRematchStateFromModels<{
    ui: {
        state: import("./models/ui").UIState;
        reducers: {
            setCurrentPage(state: import("./models/ui").UIState, pointer: string): import("./models/ui").UIState; /** watch global changes, like ui */
            setCurrentPointer(state: import("./models/ui").UIState, pointer: string): import("./models/ui").UIState;
            showOverlay(state: import("./models/ui").UIState, overlayIsVisible: boolean): import("./models/ui").UIState;
        };
    };
}>;
export declare type GlobalEvent = {
    type: "global";
    value: {
        modelId: string;
        changes: any;
    };
};
export declare type Watcher = (event: GlobalEvent) => void;
/** watch global changes, like ui */
export declare function watch(watcher: Watcher): Watcher;
/** stop watching global changes, like ui */
export declare function removeWatcher(watcher: Watcher): void;
export {};
