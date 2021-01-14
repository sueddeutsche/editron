import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { QueryListFormAttrs } from 'mithril-material-forms';
import { EditorUpdateEvent, Options as EditorOptions } from "../Editor";
import AbstractValueEditor from '../AbstractValueEditor';
export declare type SuggestionInput = {
    /** display name of value */
    name?: string;
    /** final exported value */
    value: string;
};
export declare type Options = EditorOptions & AutocompleteSchemaOptions;
declare type AutocompleteSchemaOptions = {
    placeholder?: string;
    autocomplete: {
        valueProp: string;
        suggestions: Array<SuggestionInput> | {
            proxyMethod: string;
        };
        /** if true, will also add current value to list of suggestions. Defaults to false */
        showCurrentInput?: boolean;
        /** adds an additional description below the current input in suggestions */
        currentInputDescription?: string;
    };
};
interface GetSuggestions {
    (value: string): Promise<any>;
}
export default class AutocompleteEditor extends AbstractValueEditor {
    getSuggestions: Array<SuggestionInput> | GetSuggestions;
    autoCompleteViewModel: QueryListFormAttrs;
    static editorOf(pointer: JSONPointer, controller: Controller): boolean;
    constructor(pointer: JSONPointer, controller: Controller, options: Options);
    render(): void;
    update(event: EditorUpdateEvent): void;
    destroy(): void;
}
export {};
