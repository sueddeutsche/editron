import { init } from "@rematch/core";
import ui, { UIReducers } from "./models/ui";
import diffpatch from "../services/utils/diffpatch";


export type ModelReducers = {
    ui: UIReducers;
}

export type Dispatch = ModelReducers & typeof store.dispatch;


const store = init({ models: { ui } });
/** rematch-redux dispatch */
export const dispatch: Dispatch = store.dispatch;
/** rematch-redux getState */
export const getState = store.getState; // eslint-disable-line prefer-destructuring


export type GlobalEvent = {
    type: "global",
    value: { modelId: string, changes }
};

export type Watcher = (event: GlobalEvent) => void;

let watchers = [];
function notifyWatcher(event: GlobalEvent) {
    watchers.forEach(w => w(event));
}

/** watch global changes, like ui */
export function watch(watcher: Watcher): Watcher {
    watchers.push(watcher);
    return watcher;
}

/** stop watching global changes, like ui */
export function removeWatcher(watcher: Watcher) {
    watchers = watchers.filter(w => w !== watcher);
}


const initialState = store.getState();
const modelIds = Object.keys(initialState);
const previousModels = {};
modelIds.forEach(modelId => { previousModels[modelId] = JSON.stringify(initialState[modelId]); });


store.subscribe(() => {
    const state = store.getState();
    modelIds.forEach(modelId => {
        const stateString = JSON.stringify(state[modelId]);
        if (stateString === previousModels[modelId]) {
            return;
        }
        const diff = diffpatch.diff(JSON.parse(previousModels[modelId]), state[modelId]);
        if (diff == null) {
            return;
        }
        const changes = {};
        Object.keys(diff).map(property => changes[property] = state[modelId][property]);
        notifyWatcher({ type: "global", value: { modelId, changes } });
        previousModels[modelId] = stateString;
    });
});

