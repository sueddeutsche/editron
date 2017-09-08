const render = require("json-schema-library/lib/utils/render");

translate.strings = {};
translateError.strings = {};


function renderKey(key, fallback, data) {
    const string = translate(key, fallback);
    return render(string, data);
}


function translate(key, fallback) {
    if (translate.strings[key]) {
        return translate.strings[key];
    }
    if (fallback == null) {
        return key;
    }
    return fallback;
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
    translateError,
    renderKey
};

module.exports = i18n;
