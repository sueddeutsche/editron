import BubblingCollectionObservable, { Observer } from "./utils/BubblingCollectionObservable";
import State from "./State";
import Validation, { ValidationErrorMapper } from "./utils/Validation";
import { JSONSchema, JSONData, JSONPointer, ValidationError } from "../types";
export { Observer };
export declare enum EventType {
    BEFORE_VALIDATION = "beforeValidation",
    AFTER_VALIDATION = "afterValidation",
    ON_ERROR = "onError"
}
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
    id: string;
    core: any;
    currentValidation: Validation;
    emitter: import("nanoevents").Emitter<Events>;
    errorHandler: ValidationErrorMapper;
    observer: BubblingCollectionObservable;
    schema: JSONSchema;
    state: State;
    constructor(state: State, schema?: JSONSchema, core?: any);
    /** sets a custom error handler to map errors */
    setErrorHandler(callback: ValidationErrorMapper): void;
    /**
     * Starts the validation, executing callback handlers and emitters on the go
     * @param data               - data to validate
     * @param [pointer]  - optional location. Per default all data is validated
     * @return promise, resolving with list of errors when all async validations are performed
     */
    validate(data: JSONData, pointer?: JSONPointer): Promise<Array<ValidationError>>;
    /** set or change the json-schema for data validation */
    set(schema: JSONSchema): void;
    /** returns the current json-schema */
    get(): JSONSchema;
    /**
     * add an event listener to update events
     * @returns the callback
     */
    on<T extends keyof Events>(eventType: T, callback: Events[T]): Events[T];
    /** remove an event listener from update events */
    off<T extends keyof Events>(eventType: T, callback: Function): void;
    emit(eventType: any, event?: {}): void;
    observe(pointer: JSONPointer, observer: Observer, bubbledEvents?: boolean): Observer;
    removeObserver(pointer: JSONPointer, observer: Observer): void;
    notify(pointer: JSONPointer, event: ValidationError): void;
    /** returns all validation errors and warnings */
    getErrorsAndWarnings(pointer?: JSONPointer, withChildErrors?: boolean): Array<ValidationError>;
    /** returns all validation errors only */
    getErrors(pointer?: JSONPointer, withChildErrors?: boolean): Array<ValidationError>;
    /** returns all validation warnings only */
    getWarnings(pointer?: JSONPointer, withChildWarnings?: boolean): Array<ValidationError>;
    destroy(): void;
}
