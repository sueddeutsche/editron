import { JSONData, ValidationError } from "../types";
import Editron from "../Editron";
export declare function translate(key: string, data?: JSONData): any;
export declare namespace translate {
    var strings: {
        "array:button:moveup": string;
        "array:button:movedown": string;
        "array:button:remove": string;
        "array:button:clone": string;
    };
}
export declare function translateError(editron: Editron, error: ValidationError): ValidationError;
export declare namespace translateError {
    var strings: {};
}
export declare function addLanguage(lang: any, keys: any): void;
