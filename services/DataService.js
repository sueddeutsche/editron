const gp = require("gson-pointer");
const mitt = require("mitt");
const diffpatch = require("./utils/diffpatch");
const copy = require("./utils/copy");
const isRootPointer = require("./utils/isRootPointer");
const dataReducer = require("./reducers/dataReducer");
const ActionCreators = require("./reducers/actions").ActionCreators;
const ActionTypes = require("./reducers/actions").ActionTypes;
const getParentPointer = require("./utils/getParentPointer");
const getTypeOf = require("json-schema-library/lib/getTypeOf");
const getPatchesPerPointer = require("./utils/getPatchesPerPointer");

const State = require("./State");
const DEBUG = false;

const EVENTS = {
    BEFORE_UPDATE: "beforeUpdate",
    AFTER_UPDATE: "afterUpdate"
};


class DataService {

    constructor(state, data) {
        if (!(state instanceof State)) {
            throw new Error("Given state in DataService must be of instance 'State'");
        }

        this.observers = {};
        this.emitter = mitt();
        this.EVENTS = EVENTS;

        this.id = "data";
        this.state = state;
        this.state.register(this.id, dataReducer);

        let lastUpdate = {};

        // improved version - supporting multiple patches
        this.onStateChanged = () => {
            const current = this.state.get(this.id);
            const patches = getPatchesPerPointer(lastUpdate, current.data.present);
            if (patches.length === 0) {
                DEBUG && console.info("DataService abort update event -- nothing changed");
                return;
            }

            DEBUG && console.log("Patch locations", patches.map((delta) => delta.pointer));

            for (let i = 0, l = patches.length; i < l; i += 1) {
                const eventLocation = patches[i].pointer;
                const parentData = this.getDataByReference(eventLocation);
                const parentDataType = getTypeOf(parentData);
                this.emit(EVENTS.AFTER_UPDATE, eventLocation, { type: parentDataType, patch: patches[i].patch });
                this.bubbleObservers(eventLocation, { type: parentDataType, patch: patches[i].patch });
            }

            lastUpdate = current.data.present;
        };

        this.state.subscribe(this.id, this.onStateChanged);

        if (data !== undefined) {
            this.set("#", data);
            this.resetUndoRedo();
        }
    }

    resetUndoRedo() {
        this.state.get(this.id).data.past.length = 0;
    }

    destroy() {
        this.state.unsubscribe(this.id, this.onStateChanged);
        this.state.unregister(this.id);
    }

    get(pointer = "#") {
        const value = this.getDataByReference(pointer);
        return copy(value);
    }

    getDataByReference(pointer = "#") {
        // eslint-disable-next-line no-invalid-this
        return gp.get(this.state.get(this.id).data.present, pointer);
    }

    set(pointer, value, isSynched = false) {
        if (this.isValid(pointer) === false) {
            throw new Error(`Pointer ${pointer} does not exist in data`);
        }

        const currentValue = this.getDataByReference(pointer);
        if (diffpatch.diff(currentValue, value) == null) {
            DEBUG && console.info("DataService abort update -- value not changed");
            return;
        }

        this.emit(EVENTS.BEFORE_UPDATE, pointer, { action: ActionTypes.DATA_SET, isSynched });
        this.state.dispatch(ActionCreators.setData(pointer, value, currentValue, isSynched));

        if (pointer === "#" && isSynched === false) {
            // do not add root changes to undo
            this.state.get(this.id).data.past.pop();
        }
    }

    delete(pointer) {
        if (isRootPointer(pointer)) {
            throw new Error("Can not remove root data via delete. Use set(\"#/\", {}) instead.");
        }

        const key = pointer.split("/").pop();
        const parentPointer = getParentPointer(pointer);
        const data = this.get(parentPointer);

        gp.delete(data, key);
        this.set(parentPointer, data);
    }

    undoCount() {
        return this.state.get(this.id).data.past.length;
    }

    redoCount() {
        return this.state.get(this.id).data.future.length;
    }

    undo() {
        this.emit(EVENTS.BEFORE_UPDATE, "#", { action: ActionTypes.UNDO });
        this.state.dispatch(ActionCreators.undo());
    }

    redo() {
        this.emit(EVENTS.BEFORE_UPDATE, "#", { action: ActionTypes.REDO });
        this.state.dispatch(ActionCreators.redo());
    }

    on(eventType, callback) {
        if (eventType === undefined) {
            throw new Error("Missing event type in DataService.on");
        }
        this.emitter.on(eventType, callback);
        return callback;
    }

    off(...args) {
        this.emitter.off(...args);
    }

    emit(eventType, pointer, data) {
        this.emitter.emit(eventType, createEventObject(pointer, data));
    }

    observe(pointer, callback, bubbleEvents = false) {
        callback.bubbleEvents = bubbleEvents;
        this.observers[pointer] = this.observers[pointer] || [];
        this.observers[pointer].push(callback);
        return callback;
    }

    removeObserver(pointer, callback) {
        if (this.observers[pointer] && this.observers[pointer].length > 0) {
            this.observers[pointer] = this.observers[pointer].filter((cb) => cb !== callback);
        }
    }

    notify(pointer, event) {
        if (this.observers[pointer] == null || this.observers[pointer].length === 0) {
            return;
        }
        const observers = this.observers[pointer];
        for (let i = 0, l = observers.length; i < l; i += 1) {
            if (observers[i].bubbleEvents === true || event.pointer === pointer) {
                observers[i](event);
            }
        }
    }

    bubbleObservers(pointer, data) {
        const eventObject = createEventObject(pointer, data);
        const frags = gp.split(pointer);
        while (frags.length) {
            this.notify(gp.join(frags, true), eventObject);
            frags.length -= 1;
        }
        this.notify("#", eventObject);
    }

    isValid(pointer) {
        return isRootPointer(pointer) || gp.get(this.getDataByReference(), pointer) !== undefined;
    }
}


function createEventObject(pointer, data) {
    const parentPointer = getParentPointer(pointer);
    return Object.assign(data, {
        pointer,
        parentPointer
    });
}


module.exports = DataService;
module.exports.EVENTS = EVENTS;
