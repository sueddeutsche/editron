import gp from "gson-pointer";
import validateAsync from "json-schema-library/lib/validateAsync";
/**
 * @param data - application json data
 * @param schema - json-schema describing data
 * @param [errorHandler] - optional callback to modify errors
 */
export default class Validation {
    constructor(data, pointer, errorHandler) {
        /** if validation has been canceled and thus, is obsolete */
        this.canceled = false;
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
    start(core, onErrorCb, onDoneCb) {
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
            .catch(error => {
            this.onFail(error);
            return [];
        });
    }
    onError(validationError) {
        if (this.canceled) {
            return;
        }
        validationError = this.errorHandler(validationError);
        this.errors.push(validationError);
        this.cbError(validationError, this.errors);
    }
    onDone(validationErrors) {
        if (this.canceled) {
            return;
        }
        if (this.errors.length !== validationErrors.length) {
            console.error("Inconsistent validation errors. Not all errors were emitted by validateAsync()");
        }
        this.cbDone(this.errors);
    }
    onFail(error) {
        if (this.canceled) {
            return;
        }
        console.error("Validation failed", error);
        this.cbDone(this.errors);
    }
    /** cancel validation - preventing notification of running validation results */
    cancel() {
        this.canceled = true;
    }
}
