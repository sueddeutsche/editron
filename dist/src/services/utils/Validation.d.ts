import { JSONData, JSONPointer, ValidationError } from "../../types";
/** error mapper to convert error types and messages (e.g. to add language-translations) */
export declare type ValidationErrorMapper = (error: ValidationError) => ValidationError;
/** called, with a list of all errors, when validation has been finished */
export declare type OnDone = (errors: Array<ValidationError>) => void;
/** called immediately, with with each error, occuring on validation */
export declare type OnError = (error: ValidationError, currentErrors: Array<ValidationError>) => void;
/**
 * @param data - application json data
 * @param schema - json-schema describing data
 * @param [errorHandler] - optional callback to modify errors
 */
export default class Validation {
    /** if validation has been canceled and thus, is obsolete */
    canceled: boolean;
    cbDone: OnDone;
    cbError: OnError;
    data: JSONData;
    errorHandler: ValidationErrorMapper;
    errors: Array<ValidationError>;
    /** entry point of validation */
    pointer: JSONPointer;
    constructor(data: JSONData, pointer: JSONPointer, errorHandler: ValidationErrorMapper);
    /**
     * start validation of data
     * @param core - json-schema-library core, containing json-schema
     * @param onErrorCb - called for error notification while validation is running
     * @param onDoneCb - called on a finished validation with a list of validation errors
     */
    start(core: any, onErrorCb: OnError, onDoneCb: OnDone): Promise<Array<ValidationError>>;
    onError(validationError: ValidationError): void;
    onDone(validationErrors: Array<ValidationError>): void;
    onFail(error: Error): void;
    /** cancel validation - preventing notification of running validation results */
    cancel(): void;
}
