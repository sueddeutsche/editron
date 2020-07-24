import BubblingCollectionObservable, { Observer } from "./utils/BubblingCollectionObservable";
import errorReducer from "./reducers/errorReducer";
import jlib from "json-schema-library";
import State from "./State";
import Validation, { ValidationErrorMapper } from "./utils/Validation";
import { ActionCreators } from "./reducers/actions";
import { createNanoEvents, Unsubscribe } from "nanoevents";
import { JSONSchema, JSONData, JSONPointer, ValidationError } from "../types";

const { JsonEditor: Core } = jlib.cores;


export { Observer };



export enum EventType {
    BEFORE_VALIDATION = "beforeValidation",
    AFTER_VALIDATION = "afterValidation",
    ON_ERROR = "onError"
};

export interface Events {
    /** called right before a new validation is starting */
    [EventType.BEFORE_VALIDATION]: () => void;
    /** called for each validation error occuring durint validation */
    [EventType.ON_ERROR]: (error: ValidationError) => void;
    /** called after finished validation, passing all occured validation-errors */
    [EventType.AFTER_VALIDATION]: (errors: Array<ValidationError>) => void;
}


export default class ValidationService {
    /** state store-id of service */
    id = "errors";
    core;
    currentValidation: Validation;
    emitter = createNanoEvents<Events>();
    errorHandler: ValidationErrorMapper;
    observer = new BubblingCollectionObservable();
    schema: JSONSchema;
    state: State;

    constructor(state: State, schema: JSONSchema = { type: "object" }, core = new Core()) {
        if (!(state instanceof State)) {
            throw new Error("Given state in ValidationService must be of instance 'State'");
        }

        this.core = core;
        this.set(schema);
        this.state = state;
        this.state.register(this.id, errorReducer);
        this.setErrorHandler(error => error);
    }

    /** sets a custom error handler to map errors */
    setErrorHandler(callback: ValidationErrorMapper): void {
        this.errorHandler = callback;
    }

    /**
     * Starts the validation, executing callback handlers and emitters on the go
     * @param data               - data to validate
     * @param [pointer]  - optional location. Per default all data is validated
     * @return promise, resolving with list of errors when all async validations are performed
     */
    validate(data: JSONData, pointer: JSONPointer = "#"): Promise<Array<ValidationError>> {
        if (this.currentValidation) {
            this.currentValidation.cancel();
        }

        this.emit(EventType.BEFORE_VALIDATION);

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
                this.emit(EventType.ON_ERROR, newError);
            },
            validationErrors => {
                // @feature selective-validation
                const completeListOfErrors = remainingErrors.concat(validationErrors);

                this.state.dispatch(ActionCreators.setErrors(completeListOfErrors));
                this.emit(EventType.AFTER_VALIDATION, completeListOfErrors);
                this.currentValidation = null;
            }
        );
    }

    /** set or change the json-schema for data validation */
    set(schema: JSONSchema): void {
        this.core.setSchema(schema);
        this.schema = this.core.getSchema();
    }

    /** returns the current json-schema */
    get(): JSONSchema {
        return this.schema;
    }

    /**
     * add an event listener to update events
     * @returns the callback
     */
    on<T extends keyof Events>(eventType: T, callback: Events[T]): Events[T] {
        if (eventType === undefined) {
            throw new Error("Missing `eventType` in ValidationService.on");
        }
        this.emitter.on(eventType, callback);
        return callback;
    }

    /** remove an event listener from update events */
    off<T extends keyof Events>(eventType: T, callback: Function): void {
        // @ts-ignore
        this.emitter.events[eventType] = this.emitter.events[eventType]?.filter(func => func !== callback) ?? [];
    }

    emit(eventType, event = {}) {
        this.emitter.emit(eventType, event);
    }

    observe(pointer: JSONPointer, observer: Observer, bubbledEvents = false): Observer {
        this.observer.observe(pointer, observer, bubbledEvents);
        return observer;
    }

    removeObserver(pointer: JSONPointer, observer: Observer) {
        this.observer.removeObserver(pointer, observer);
    }

    notify(pointer: JSONPointer, event: ValidationError) {
        this.observer.notify(pointer, event);
    }

    /** returns all validation errors and warnings */
    getErrorsAndWarnings(pointer?: JSONPointer, withChildErrors = false): Array<ValidationError> {
        const errors = this.state.get(this.id) || [];
        if (pointer == null) {
            return errors;
        }
        // filter by pointer
        const selectError = new RegExp(`^${pointer}${withChildErrors ? "" : "$"}`);
        return errors.filter(error => selectError.test(error.data.pointer));
    }

    /** returns all validation errors only */
    getErrors(pointer?: JSONPointer, withChildErrors = false): Array<ValidationError> {
        return this.getErrorsAndWarnings(pointer, withChildErrors).filter(error => error.severity !== "warning");
    }

    /** returns all validation warnings only */
    getWarnings(pointer?: JSONPointer, withChildWarnings = false): Array<ValidationError> {
        return this.getErrorsAndWarnings(pointer, withChildWarnings).filter(error => error.severity === "warning");
    }

    destroy() {
        this.set(null);
        this.emitter = null;
        this.observer = null;
        this.state.unregister(this.id);
        // this.state.unregister(this.id, errorReducer);
    }
}
