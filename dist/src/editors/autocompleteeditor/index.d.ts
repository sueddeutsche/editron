import AbstractValueEditor from "../AbstractValueEditor";
import Controller from "../../Controller";
import { JSONPointer } from "../../types";
export declare type SuggestionInput = {
    /** display name of value */
    name?: string;
    /** final exported value */
    value: string;
};
export declare type AutocompleteSchemaOptions = {
    autocomplete?: {
        suggestions?: Array<SuggestionInput> | {
            proxyMethod: string;
        };
    };
};
interface GetSuggestions {
    (value: string): Promise<any>;
}
export default class AutocompleteEditor extends AbstractValueEditor {
    getSuggestions: Array<SuggestionInput> | GetSuggestions;
    static editorOf(pointer: JSONPointer, controller: Controller): boolean;
    constructor(pointer: JSONPointer, controller: Controller, options: any);
    render(): void;
}
export {};
