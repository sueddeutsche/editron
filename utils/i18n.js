const render = require("json-schema-library/lib/utils/render");

translate.strings = {};
translateError.strings = {};


function translate(key, data) {
    if (typeof translate.strings[key] === "string") {
        return render(translate.strings[key], data);
    } else if (typeof translate.strings[key] === "function") {
        return translate.strings[key](data);
    }
    return key;
}


function translateError(controller, error) {
    if (typeof translateError.strings[error.code] === "string") {
        error.message = render(translateError.strings[error.code], error.data);
    } else if (typeof translateError.strings[error.code] === "function") {
        error.message = translateError.strings[error.code](controller, error);
    }
    return error;
}


const i18n = {
    translate,
    translateError
};

module.exports = i18n;
