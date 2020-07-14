const gp = require("gson-pointer");
const validateAsync = require("json-schema-library/lib/validateAsync");


/**
 * @class  Validation
 *
 * @param {Object|Array} data       - application json data
 * @param {Object} schema           - json-schema describing data
 * @param {Function} [errorHandler] - optional callback to modify errors
 */
class Validation {
    errors;
    data;
    pointer;
    canceled;
    errorHandler;
    cbDone;
    cbError;

    constructor(data, pointer, errorHandler) {
        this.errors = [];
        this.data = data;
        this.pointer = pointer;
        this.canceled = false;
        this.errorHandler = errorHandler;
    }

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

        // console.log("validate", pointer, data, JSON.stringify(schema, null, 2));

        // validateAsync(core, value, { schema = core.rootSchema, pointer = "#", onError })
        return validateAsync(core, data, { schema, pointer, onError: this.onError.bind(this) })
            .then(errors => {
                this.onDone(errors);
                return errors;
            })
            .catch(error => this.onFail(error));
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

    cancel() {
        this.canceled = true;
    }
}


export default Validation;
