import { JSONData, ValidationError } from "../types";
import Controller from "../Controller";
declare function translate(key: string, data?: JSONData): any;
declare namespace translate {
    var strings: {};
}
declare function translateError(controller: Controller, error: ValidationError): ValidationError;
declare namespace translateError {
    var strings: {};
}
declare function addLanguage(lang: any, keys: any): void;
declare const i18n: {
    translate: typeof translate;
    translateError: typeof translateError;
    addLanguage: typeof addLanguage;
};
export default i18n;
