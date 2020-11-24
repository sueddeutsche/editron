import { init } from "@rematch/core";
import ui from "./models/ui";
import diffpatch from "../services/utils/diffpatch";
const store = init({ models: { ui } });
/** rematch-redux dispatch */
export const dispatch = store.dispatch;
/** rematch-redux getState */
export const getState = store.getState; // eslint-disable-line prefer-destructuring
let watchers = [];
function notifyWatcher(event) {
    watchers.forEach(w => w(event));
}
/** watch global changes, like ui */
export function watch(watcher) {
    watchers.push(watcher);
    return watcher;
}
/** stop watching global changes, like ui */
export function removeWatcher(watcher) {
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
        previousModels[modelId] = stateString;
        const changes = {};
        Object.keys(diff).map(property => changes[property] = state[modelId][property]);
        notifyWatcher({ type: "global", value: { modelId, changes } });
    });
});
