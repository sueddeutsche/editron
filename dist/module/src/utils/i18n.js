import render from "./render";
translate.strings = {
    "array:button:moveup": "move up",
    "array:button:movedown": "move down",
    "array:button:remove": "remove",
    "array:button:clone": "duplicate"
};
translateError.strings = {};
export function translate(key, data) {
    if (typeof translate.strings[key] === "string") {
        return data == null ? translate.strings[key] : render(translate.strings[key], data);
    }
    else if (typeof translate.strings[key] === "function") {
        return translate.strings[key](data);
    }
    return key;
}
export function translateError(editron, error) {
    if (typeof translateError.strings[error.code] === "string") {
        error.message = error.data == null ?
            translateError.strings[error.code] : render(translateError.strings[error.code], error.data);
    }
    else if (typeof translateError.strings[error.code] === "function") {
        error.message = translateError.strings[error.code](editron, error);
    }
    return error;
}
export function addLanguage(lang, keys) {
    const _keys = (keys == null && Object.prototype.toString.call(lang) === "[object Object]") ? lang : keys;
    Object.assign(translateError.strings, _keys.errors);
    Object.assign(translate.strings, _keys.strings);
}
