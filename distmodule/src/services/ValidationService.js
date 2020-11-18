import BubblingCollectionObservable from "./utils/BubblingCollectionObservable";
import jlib from "json-schema-library";
import Store from "../store";
import Validation from "./utils/Validation";
const ID = "errors";
const { JsonEditor: Core } = jlib.cores;
export default class ValidationService {
    constructor(store, schema = { type: "object" }, core = new Core()) {
        this.observer = new BubblingCollectionObservable();
        if (!(store instanceof Store)) {
            throw new Error("Given state in ValidationService must be of instance 'State'");
        }
        this.core = core;
        this.set(schema);
        this.store = store;
        this.setErrorHandler(error => error);
    }
    /** sets a custom error handler to map errors */
    setErrorHandler(callback) {
        this.errorHandler = callback;
    }
    /**
     * Starts the validation, executing callback handlers and emitters on the go
     * @param data               - data to validate
     * @param [pointer]  - optional location. Per default all data is validated
     * @return promise, resolving with list of errors when all async validations are performed
     */
    validate(data, pointer = "#") {
        if (this.currentValidation) {
            this.currentValidation.cancel();
        }
        // @feature selective-validation
        this.observer.clearEvents(pointer);
        // reset stored list of events
        let remainingErrors = [];
        if (pointer !== "#") {
            // the following filtering is a duplicate from BubblingCollectionObservable.clearEvents
            remainingErrors = this.store.get(ID)
                .filter(e => e.data.pointer == null || e.data.pointer.startsWith(pointer) === false);
        }
        this.store.dispatch.errors.set(remainingErrors);
        // this.store.dispatch(ActionCreators.setErrors(remainingErrors));
        this.currentValidation = new Validation(data, pointer, this.errorHandler);
        return this.currentValidation.start(this.core, (newError, currentErrors) => {
            // @feature selective-validation
            const completeListOfErrors = remainingErrors.concat(currentErrors);
            this.store.dispatch.errors.set(completeListOfErrors);
            this.observer.notify(newError.data.pointer, newError);
        }, validationErrors => {
            // @feature selective-validation
            const completeListOfErrors = remainingErrors.concat(validationErrors);
            this.store.dispatch.errors.set(completeListOfErrors);
            this.currentValidation = null;
        });
    }
    /** set or change the json-schema for data validation */
    set(schema) {
        this.core.setSchema(schema);
        this.schema = this.core.getSchema();
    }
    /** returns the current json-schema */
    get() {
        return this.schema;
    }
    observe(pointer, observer, bubbledEvents = false) {
        this.observer.observe(pointer, observer, bubbledEvents);
        return observer;
    }
    removeObserver(pointer, observer) {
        this.observer.removeObserver(pointer, observer);
        return this;
    }
    notify(pointer, event) {
        this.observer.notify(pointer, event);
    }
    /** returns all validation errors and warnings */
    getErrorsAndWarnings(pointer, withChildErrors = false) {
        const errors = this.store.get(ID);
        if (pointer == null) {
            return errors;
        }
        // filter by pointer
        const selectError = new RegExp(`^${pointer}${withChildErrors ? "" : "$"}`);
        return errors.filter(error => selectError.test(error.data.pointer));
    }
    /** returns all validation errors only */
    getErrors(pointer, withChildErrors = false) {
        return this.getErrorsAndWarnings(pointer, withChildErrors).filter(error => error.severity !== "warning");
    }
    /** returns all validation warnings only */
    getWarnings(pointer, withChildWarnings = false) {
        return this.getErrorsAndWarnings(pointer, withChildWarnings).filter(error => error.severity === "warning");
    }
    destroy() {
        this.set(null);
        this.observer = null;
    }
}
