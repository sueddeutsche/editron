import BubblingCollectionObservable, { Observer } from "./utils/BubblingCollectionObservable";
import Store from "../store";
import Validation, { ValidationErrorMapper } from "./utils/Validation";
import { JSONSchema, JSONData, JSONPointer, ValidationError } from "../types";
export { Observer };
declare type ValidationDoneEvent = {
    type: "validation:done";
    value: Array<ValidationError>;
};
export declare type Event = ValidationDoneEvent;
export declare type Watcher = (event: Event) => void;
export default class ValidationService {
    core: any;
    currentValidation: Validation;
    errorHandler: ValidationErrorMapper;
    observer: BubblingCollectionObservable;
    schema: JSONSchema;
    store: Store;
    /** list of active watchers on update-lifecycle events */
    watcher: any[];
    constructor(store: Store, schema?: JSONSchema, core?: any);
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
    observe(pointer: JSONPointer, observer: Observer, bubbledEvents?: boolean): Observer;
    removeObserver(pointer: JSONPointer, observer: Observer): this;
    notify(pointer: JSONPointer, event: ValidationError): void;
    notifyWatcher(event: Event): void;
    /** watch DataService lifecycle events */
    watch(callback: Watcher): Watcher;
    unwatch(callback: Watcher): Watcher;
    /** returns all validation errors and warnings */
    getErrorsAndWarnings(pointer?: JSONPointer, withChildErrors?: boolean): Array<ValidationError>;
    /** returns all validation errors only */
    getErrors(pointer?: JSONPointer, withChildErrors?: boolean): Array<ValidationError>;
    /** returns all validation warnings only */
    getWarnings(pointer?: JSONPointer, withChildWarnings?: boolean): Array<ValidationError>;
    destroy(): void;
}
