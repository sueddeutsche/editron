import { ActionCreators } from "./reducers/actions";
import BubblingCollectionObservable from "./utils/BubblingCollectionObservable";
import errorReducer from "./reducers/errorReducer";
import jlib from "json-schema-library";
import mitt from "mitt";
import State from "./State";
import Validation from "./utils/Validation";
import { JSONSchema, JSONData, JSONPointer } from "../types";

const { JsonEditor: Core} = jlib.cores;


export const EVENTS = {
    BEFORE_VALIDATION: "beforeValidation",
    AFTER_VALIDATION: "afterValidation",
    ON_ERROR: "onError"
};


/**
 * @class  ValidationService
 */
export default class ValidationService {
    core;
    currentValidation: Validation;
    emitter;
    errorHandler: Function;
    EVENTS;
    id: string;
    observer;
    schema: JSONSchema;
    state;

    constructor(state, schema: JSONSchema = { type: "object" }, core = new Core()) {
        if (!(state instanceof State)) {
            throw new Error("Given state in ValidationService must be of instance 'State'");
        }

        this.core = core;
        this.set(schema);
        this.observer = new BubblingCollectionObservable();
        this.emitter = mitt();
        this.id = "errors";
        this.state = state;
        this.state.register(this.id, errorReducer);
        this.setErrorHandler(error => error);
        this.EVENTS = EVENTS;
    }

    setErrorHandler(callback) {
        this.errorHandler = callback;
    }

    /**
     * Starts the validation, executing callback handlers and emitters on the go
     *
     * @param  {Any} data               - data to validate
     * @param  {JsonPointer} [pointer]  - optional location. Per default all data is validated
     * @return {Promise} promise, resolving with list of errors when all async validations are performed
     */
    validate(data: JSONData, pointer = "#") {
        if (this.currentValidation) {
            this.currentValidation.cancel();
        }

        this.emit(EVENTS.BEFORE_VALIDATION);

        // @feature selective-validation
        this.observer.clearEvents(pointer);
        // reset stored list of events
        let remainingErrors = [];
        if (pointer !== "#") {
            // the following filtering is a duplicate from BubblingCollectionObservable.clearEvents
            remainingErrors = this.state.get(this.id)
                .filter(e => e.data.pointer == null || e.data.pointer.startsWith(pointer) === false);
        }

        this.state.dispatch(ActionCreators.setErrors(remainingErrors));
        this.currentValidation = new Validation(data, pointer, this.errorHandler);
        return this.currentValidation.start(
            this.core,
            (newError, currentErrors) => {
                // @feature selective-validation
                const completeListOfErrors = remainingErrors.concat(currentErrors);

                this.state.dispatch(ActionCreators.setErrors(completeListOfErrors));
                this.observer.notify(newError.data.pointer, newError);
                this.emit(EVENTS.ON_ERROR, newError);
            },
            validationErrors => {
                // @feature selective-validation
                const completeListOfErrors = remainingErrors.concat(validationErrors);

                this.state.dispatch(ActionCreators.setErrors(completeListOfErrors));
                this.emit(EVENTS.AFTER_VALIDATION, completeListOfErrors);
                this.currentValidation = null;
            }
        );
    }

    set(schema: JSONSchema) {
        this.core.setSchema(schema);
        this.schema = this.core.getSchema();
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

    observe(pointer: JSONPointer, callback, bubbledEvents = false) {
        this.observer.observe(pointer, callback, bubbledEvents);
        return callback;
    }

    removeObserver(pointer: JSONPointer, callback) {
        this.observer.removeObserver(pointer, callback);
    }

    notify(pointer: JSONPointer, event = {}) {
        this.observer.notify(pointer, event);
    }

    getErrorsAndWarnings(pointer?: JSONPointer, withChildErrors = false) {
        const errors = this.state.get(this.id) || [];
        if (pointer == null) {
            return errors;
        }
        // filter by pointer
        const selectError = new RegExp(`^${pointer}${withChildErrors ? "" : "$"}`);
        return errors.filter(error => selectError.test(error.data.pointer));
    }

    getErrors(pointer?: JSONPointer, withChildErrors = false) {
        return this.getErrorsAndWarnings(pointer, withChildErrors).filter(error => error.severity !== "warning");
    }

    getWarnings(pointer?: JSONPointer, withChildWarnings = false) {
        return this.getErrorsAndWarnings(pointer, withChildWarnings).filter(error => error.severity === "warning");
    }

    destroy() {
        this.set(null);
        this.emitter = null;
        this.observer = null;
        this.state.unregister(this.id, errorReducer);
    }
}
