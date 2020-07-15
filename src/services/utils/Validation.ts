import gp from "gson-pointer";
import validateAsync from "json-schema-library/lib/validateAsync";
import { JSONData, JSONPointer, ValidationError } from "../../types";


/** error mapper to convert error types and messages (e.g. to add language-translations) */
export type ValidationErrorMapper = (error: ValidationError) => ValidationError;
/** called, with a list of all errors, when validation has been finished */
export type OnDone = (errors: Array<ValidationError>) => void;
/** called immediately, with with each error, occuring on validation */
export type OnError = (error: ValidationError, currentErrors: Array<ValidationError>) => void;


/**
 * @param data - application json data
 * @param schema - json-schema describing data
 * @param [errorHandler] - optional callback to modify errors
 */
export default class Validation {
    /** if validation has been canceled and thus, is obsolete */
    canceled = false;
    cbDone: OnDone;
    cbError: OnError;
    data: JSONData;
    errorHandler: ValidationErrorMapper;
    errors: Array<ValidationError>;
    /** entry point of validation */
    pointer: JSONPointer;

    constructor(data: JSONData, pointer: JSONPointer, errorHandler: ValidationErrorMapper) {
        this.errors = [];
        this.data = data;
        this.pointer = pointer;
        this.errorHandler = errorHandler;
    }

    /**
     * start validation of data
     * @param core - json-schema-library core, containing json-schema
     * @param onErrorCb - called for error notification while validation is running
     * @param onDoneCb - called on a finished validation with a list of validation errors
     */
    start(core, onErrorCb: OnError, onDoneCb: OnDone): Promise<Array<ValidationError>> {
        this.cbDone = onDoneCb;
        this.cbError = onErrorCb;

        // @feature selective-validation
        const pointer = this.pointer;
        let data = this.data;
        let schema = core.getSchema();
        if (pointer !== "#") {
            schema = core.getSchema(pointer, data);
            data = gp.get(data, pointer);
        }

        return validateAsync(core, data, { schema, pointer, onError: this.onError.bind(this) })
            .then(errors => {
                this.onDone(errors);
                return errors;
            })
            .catch(error => this.onFail(error));
    }

    onError(validationError: ValidationError): void {
        if (this.canceled) {
            return;
        }
        validationError = this.errorHandler(validationError);
        this.errors.push(validationError);
        this.cbError(validationError, this.errors);
    }

    onDone(validationErrors: Array<ValidationError>): void {
        if (this.canceled) {
            return;
        }
        if (this.errors.length !== validationErrors.length) {
            console.error("Inconsistent validation errors. Not all errors were emitted by validateAsync()");
        }
        this.cbDone(this.errors);
    }

    onFail(error: Error): void {
        if (this.canceled) {
            return;
        }

        console.error("Validation failed", error);
        this.cbDone(this.errors);
    }

    /** cancel validation - preventing notification of running validation results */
    cancel(): void {
        this.canceled = true;
    }
}
