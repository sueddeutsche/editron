import { EditorPlugin, Editor } from "../editors/Editor";
import { JSONPointer, FormatValidator, KeywordValidator, JSONSchemaTypes } from "../types";
import Controller from "../Controller";
import { SimpleChange } from "../services/DataService";

const editors: Array<EditorPlugin> = [];
const validators = [];


export interface Plugin {
    id: string;
    initialize(controller: Controller): Plugin;
    onModifiedData?: (changes: Array<SimpleChange>) => void;
    onCreateEditor?: (pointer: JSONPointer, editor: Editor, options?: any) => void;
    onChangePointer?: (oldPointer: JSONPointer, newPointer: JSONPointer, editor: Editor) => void;
    onDestroyEditor?: (pointer: JSONPointer, editor: Editor) => void;
}


export default {

    /** register an editor (widget) to use in editron-controller */
    editor(constructor: EditorPlugin): void {
        console.log(`register editor ${constructor.name}`);
        editors.push(constructor);
    },

    /**
     * add a custom json-schema format-validator for a specific format value
     * @param _ - unused...
     * @param value - value of property format for this validator (must be unique formatType)
     * @param validator - (format) validation function
     */
    validator(_: string, value: string, validator: FormatValidator): void {
        validators.push(["format", value, validator]);
    },

    /**
     * add a custom keyword-validator for a new keyword
     * @param datatype - datatype, to register keyword
     * @param keywordName - name of the keyword (like oneOf, format, etc)
     * @param validator - (keyword) validation function
     */
    keywordValidator(datatype: JSONSchemaTypes, keywordName: string, validator: KeywordValidator): void {
        validators.push(["keyword", datatype, keywordName, validator]);
    },

    /** returns all registered plugin-editors */
    getEditors(): Array<any> {
        return editors;
    },

    /** returns all validation function */
    getValidators(): Array<any> {
        return validators;
    }
};
