const mitt = require("mitt");
const Core = require("json-schema-library").cores.JsonEditor;
const State = require("./State");
const ActionCreators = require("./reducers/actions").ActionCreators;
const errorReducer = require("./reducers/errorReducer");
const splitPointer = require("./utils/splitPointer");
const Validation = require("./utils/Validation");


const EVENTS = {
    BEFORE_VALIDATION: "beforeValidation",
    AFTER_VALIDATION: "afterValidation",
    ON_ERROR: "onError"
};


/**
 * @class  ValidationService
 */
class ValidationService {

    constructor(state, schema = {}, core = new Core()) {
        if (!(state instanceof State)) {
            throw new Error("Given state in ValidationService must be of instance 'State'");
        }

        this.core = core;
        this.set(schema);
        this.observers = {};
        this.emitter = mitt();
        this.id = "errors";
        this.state = state;
        this.state.register(this.id, errorReducer);
        this.setErrorHandler((error) => error);
        this.EVENTS = EVENTS;
    }

    setErrorHandler(callback) {
        this.errorHandler = callback;
    }

    /**
     * Starts the validation, executing callback handlers and emitters on the go
     *
     * @param  {Any} data               - data to validate
     * @param  {JsonSchema} [schema]    - optional json-schema. Per default the root schema is used
     * @return {Promise} promise, resolving with list of errors when all async validations are performed
     */
    validate(data, schema = this.schema) {
        if (this.currentValidation) {
            this.currentValidation.cancel();
        }

        this.emit(EVENTS.BEFORE_VALIDATION);
        this.state.dispatch(ActionCreators.setErrors([]));
        this.currentValidation = new Validation(data, schema, this.errorHandler);

        return this.currentValidation.start(
            this.core,
            (newError, currentErrors) => {
                this.state.dispatch(ActionCreators.setErrors(currentErrors));
                this.bubbleObservers(newError.data.pointer, newError);
                this.emit(EVENTS.ON_ERROR, newError);
            },
            (validationErrors) => {
                this.state.dispatch(ActionCreators.setErrors(validationErrors));
                this.emit(EVENTS.AFTER_VALIDATION, validationErrors);
                this.currentValidation = null;
            }
        );
    }

    set(schema) {
        this.schema = schema;
        this.core.setSchema(schema);
    }

    get() {
        return this.schema;
    }

    on(eventType, callback) {
        if (eventType === undefined) {
            throw new Error("Missing event type in ValidationService.on");
        }
        this.emitter.on(eventType, callback);
        return callback;
    }

    off(...args) {
        this.emitter && this.emitter.off(...args);
    }

    emit(eventType, event = {}) {
        this.emitter.emit(eventType, event);
    }

    observe(pointer, callback, bubbledEvents = false) {
        callback.bubbledEvents = bubbledEvents;
        this.observers[pointer] = this.observers[pointer] || [];
        this.observers[pointer].push(callback);
        return callback;
    }

    removeObserver(pointer, callback) {
        if (this.observers[pointer] && this.observers[pointer].length > 0) {
            this.observers[pointer] = this.observers[pointer].filter((cb) => cb !== callback);
        }
    }

    notify(pointer, event = {}) {
        if (this.observers[pointer] == null || this.observers[pointer].length === 0) {
            return;
        }
        const observers = this.observers[pointer];
        for (let i = 0, l = observers.length; i < l; i += 1) {
            if (observers[i].bubbledEvents === true || event.data.pointer === pointer) {
                observers[i](event);
            }
        }
    }

    getErrorsAndWarnings(pointer = undefined, withChildErrors = false) {
        const errors = this.state.get(this.id);
        if (pointer == null) {
            return errors;
        }
        // filter by pointer
        const selectError = new RegExp(`^${pointer}${withChildErrors ? "" : "$"}`);
        return errors.filter((error) => selectError.test(error.data.pointer));
    }

    getErrors(pointer = undefined, withChildErrors = false) {
        return this.getErrorsAndWarnings(pointer, withChildErrors).filter((error) => error.severity !== "warning");
    }

    getWarnings(pointer = undefined, withChildWarnings = false) {
        return this.getErrorsAndWarnings(pointer, withChildWarnings).filter((error) => error.severity === "warning");
    }

    bubbleObservers(pointer, error) {
        const frags = splitPointer(pointer);
        while (frags.length) {
            this.notify(`#/${frags.join("/")}`, error);
            frags.length -= 1;
        }
        this.notify("#", error);
    }

    destroy() {
        this.set(null);
        this.emitter = null;
        this.state.unregister(this.id, errorReducer);
    }
}


module.exports = ValidationService;
module.exports.EVENTS = EVENTS;
