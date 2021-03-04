import copy from "../utils/copy";
import diffpatch from "../utils/diffpatch";
import createDiff from "../utils/createDiff";
import { getTypeOf } from "json-schema-library";
import gp from "gson-pointer";
import isRootPointer from "../utils/isRootPointer";
import Store from "../../store";
import { changesFromPatchResult, changesWithChildPointers } from "./change";
const ID = "data";
export default class DataService {
    /**
     * Read and modify form data and notify observers
     * @param state - current state/store of application
     * @param data - current application data (form)
     */
    constructor(store, data) {
        /** current observers on json-pointer changes */
        this.observers = {};
        /** internal value to track previous data */
        this.lastUpdate = {};
        /** list of active watchers on update-lifecycle events */
        this.watcher = [];
        if (!(store instanceof Store)) {
            throw new Error("Given state in DataService must be of instance 'State'");
        }
        this.store = store;
        this.onStateChanged = this.onStateChanged.bind(this);
        this.store.subscribe(ID, this.onStateChanged);
        if (data !== undefined) {
            this.set("#", data);
            this.resetUndoRedo();
        }
    }
    // improved version - supporting multiple patches
    onStateChanged() {
        const { present: data } = this.store.get(ID);
        const patches = createDiff(this.lastUpdate, data);
        if (patches.length === 0) {
            return;
        }
        const allChanges = [];
        // @todo simplify event-arguments: we have patches, changes and simplechanges
        for (let i = 0, l = patches.length; i < l; i += 1) {
            const eventLocation = patches[i].pointer;
            const parentData = this.getDataByReference(eventLocation);
            const parentDataType = getTypeOf(parentData);
            // build simple patch-information and notify about changes in pointer for move-instance support
            // this is a major performance improvement for array-item movements
            const changes = changesFromPatchResult(patches[i], parentDataType, this.lastUpdate);
            if (parentDataType === "array" || parentDataType === "object") {
                this.notifyWatcher({ type: "data:update:container", value: { pointer: eventLocation, changes } });
            }
            // collect all changes fo change-stream
            allChanges.push(...changes);
            const payload = { pointer: eventLocation, patch: patches[i].patch };
            this.notifyWatcher({ type: "data:update:after", value: payload });
            this.bubbleObservers(eventLocation, { type: "data:update", value: payload });
        }
        const changeStream = changesWithChildPointers(allChanges, this.lastUpdate, data);
        this.notifyWatcher({ type: "data:update:done", value: changeStream });
        this.lastUpdate = data;
    }
    /** clear undo/redo stack */
    resetUndoRedo() {
        var _a;
        this.store.dispatch.data.clearHistory();
        (_a = this.store.previousState) === null || _a === void 0 ? void 0 : _a.errors.pop();
    }
    /**
     * Get a copy of current data from the requested `pointer`
     * @param [pointer] - data to fetch. Defaults to _root_
     * @returns data, associated with `pointer`
     */
    get(pointer = "#") {
        const value = this.getDataByReference(pointer);
        return copy(value);
    }
    /** returns a reference to data from the requested `pointer` (cheaper)
     * @param [pointer="#"] - data to fetch. Defaults to _root_
     * @returns data, associated with `pointer`
     */
    getDataByReference(pointer = "#") {
        const state = this.store.store.getState();
        return gp.get(state.data.present, pointer);
    }
    /**
     * Change data at the given `pointer`
     * @param pointer - data location to modify
     * @param value - new value at pointer
     * @param [options]
     */
    set(pointer, value, options) {
        if (this.isValid(pointer) === false) {
            throw new Error(`Pointer ${pointer} does not exist in data`);
        }
        const currentValue = this.getDataByReference(pointer);
        if (diffpatch.diff(currentValue, value) == null) {
            return;
        }
        if (pointer === "#") {
            // do not add root changes to undo (for sync, skip this)
            options = { ...options, addToHistory: false };
        }
        this.notifyWatcher({ type: "data:update:before", value: { pointer, action: "data" } });
        // this.store.dispatch(ActionCreators.setData(pointer, value, currentValue, isSynched));
        this.store.dispatch.data.set({ pointer, value, addToHistory: options === null || options === void 0 ? void 0 : options.addToHistory });
    }
    /**
     * Delete data at the given `pointer`
     * @param pointer - data location to delete
     */
    delete(pointer) {
        if (isRootPointer(pointer)) {
            throw new Error("Can not remove root data via delete. Use set(\"#/\", {}) instead.");
        }
        const frags = gp.split(pointer);
        const key = frags.pop();
        const parentPointer = gp.join(frags);
        const data = this.get(parentPointer);
        gp.remove(data, key);
        this.set(parentPointer, data);
    }
    /** get valid undo count */
    undoCount() {
        return this.store.get(ID).past.length;
    }
    /** get valid redo count */
    redoCount() {
        return this.store.get(ID).future.length;
    }
    /** undo last change */
    undo() {
        this.notifyWatcher({ type: "data:update:before", value: { pointer: "#", action: "undo" } });
        this.store.dispatch.data.undo();
        // this.store.dispatch(ActionCreators.undo());
    }
    /** redo last undo */
    redo() {
        this.notifyWatcher({ type: "data:update:before", value: { pointer: "#", action: "redo" } });
        // this.store.dispatch(ActionCreators.redo());
        this.store.dispatch.data.redo();
    }
    notifyWatcher(event) {
        this.watcher.forEach(watcher => watcher(event));
    }
    /** watch DataService lifecycle events */
    watch(callback) {
        if (this.watcher.includes(callback) === false) {
            this.watcher.push(callback);
        }
        return callback;
    }
    removeWatcher(callback) {
        this.watcher = this.watcher.filter(watcher => watcher !== callback);
    }
    /**
     * observes changes in data at the specified json-pointer
     * @param pointer - json-pointer to watch
     * @param callback - called on a change
     * @param bubbleEvents - set to true to receive notifications changes in children of pointer
     * @returns callback
     */
    observe(pointer, callback, bubbleEvents = false) {
        callback.bubbleEvents = bubbleEvents;
        this.observers[pointer] = this.observers[pointer] || [];
        this.observers[pointer].push(callback);
        return callback;
    }
    /** stop an observer from watching changes on pointer */
    removeObserver(pointer, callback) {
        if (this.observers[pointer] && this.observers[pointer].length > 0) {
            this.observers[pointer] = this.observers[pointer].filter(cb => cb !== callback);
        }
        return this;
    }
    /** send an event to all json-pointer observers */
    notify(pointer, event) {
        if (this.observers[pointer] == null || this.observers[pointer].length === 0) {
            return;
        }
        const observers = this.observers[pointer];
        for (let i = 0, l = observers.length; i < l; i += 1) {
            if (observers[i].bubbleEvents === true || event.value.pointer === pointer) {
                observers[i](event);
            }
        }
    }
    bubbleObservers(pointer, event) {
        const frags = gp.split(pointer);
        while (frags.length) {
            this.notify(gp.join(frags, true), event);
            frags.length -= 1;
        }
        this.notify("#", event);
    }
    /** Test the pointer for existing data */
    isValid(pointer) {
        return isRootPointer(pointer) || gp.get(this.getDataByReference(), pointer) !== undefined;
    }
    /** destroy service */
    destroy() {
        this.store.unsubscribe(ID, this.onStateChanged);
    }
}
