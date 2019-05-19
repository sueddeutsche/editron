const validateAsync = require("json-schema-library/lib/validateAsync");


/**
 * @class  Validation
 *
 * @param {Object|Array} data       - application json data
 * @param {Object} schema           - json-schema describing data
 * @param {Function} [errorHandler] - optional callback to modify errors
 */
class Validation {

    constructor(data, schema, errorHandler) {
        this.errors = [];
        this.data = data;
        this.schema = schema;
        this.canceled = false;
        this.errorHandler = errorHandler;
    }

    start(core, onErrorCb, onDoneCb) {
        this.cbDone = onDoneCb;
        this.cbError = onErrorCb;
        return validateAsync(core, this.schema, this.data, "#", this.onError.bind(this))
            .then((errors) => {
                this.onDone(errors);
                return errors;
            })
            .catch((error) => this.onFail(error));
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


module.exports = Validation;
