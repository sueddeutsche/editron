import { JSONData, ValidationError } from "../types";
import Controller from "../Controller";
export declare function translate(key: string, data?: JSONData): any;
export declare namespace translate {
    var strings: {
        "array:button:moveup": string;
        "array:button:movedown": string;
        "array:button:remove": string;
        "array:button:clone": string;
    };
}
export declare function translateError(controller: Controller, error: ValidationError): ValidationError;
export declare namespace translateError {
    var strings: {};
}
export declare function addLanguage(lang: any, keys: any): void;
