import render from "json-schema-library/lib/utils/render";
import { JSONData, ValidationError } from "../types";
import Controller from "../Controller";

translate.strings = {};
translateError.strings = {};


export function translate(key: string, data?: JSONData) {
    if (typeof translate.strings[key] === "string") {
        return render(translate.strings[key], data);
    } else if (typeof translate.strings[key] === "function") {
        return translate.strings[key](data);
    }
    return key;
}


export function translateError(controller: Controller, error: ValidationError): ValidationError {
    if (typeof translateError.strings[error.code] === "string") {
        error.message = render(translateError.strings[error.code], error.data);
    } else if (typeof translateError.strings[error.code] === "function") {
        error.message = translateError.strings[error.code](controller, error);
    }
    return error;
}


export function addLanguage(lang, keys) {
    const _keys = (keys == null && Object.prototype.toString.call(lang) === "[object Object]") ? lang : keys;
    Object.assign(translateError.strings, _keys.errors);
    Object.assign(translate.strings, _keys.strings);
}
