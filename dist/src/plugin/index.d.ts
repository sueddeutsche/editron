import { EditorPlugin, Editor } from "../editors/Editor";
import { JSONPointer, FormatValidator, KeywordValidator, JSONSchemaTypes } from "../types";
import Editron from "../Editron";
import { SimpleChange } from "../services/dataservice/change";
declare type EditorOptions = {
    [p: string]: any;
};
export interface Plugin {
    /** unique id of your plugin */
    id: string;
    /** called, when editron has been initialized */
    initialize(editron: Editron): void;
    /** called, when editron data has changed */
    onModifiedData?: (changes: Array<SimpleChange>) => void;
    /** called, before a new editor will be instantiated */
    onEditorOptions?: (pointer: JSONPointer, options: EditorOptions) => void;
    /** called, after a new editor was instantiated */
    onCreateEditor?: (pointer: JSONPointer, editor: Editor, options: EditorOptions) => void;
    /** called, when a editor's pointer changes */
    onChangePointer?: (oldPointer: JSONPointer, newPointer: JSONPointer, editor: Editor) => void;
    /** called, when a editor instance is destroyed */
    onDestroyEditor?: (pointer: JSONPointer, editor: Editor) => void;
    /** called, when plugin should be removed */
    destroy?: () => void;
}
declare const _default: {
    /** register an editor (widget) to use in editron-editron */
    editor(constructor: EditorPlugin): void;
    /**
     * add a custom json-schema format-validator for a specific format value
     * @param _ - unused...
     * @param value - value of property format for this validator (must be unique formatType)
     * @param validator - (format) validation function
     */
    validator(_: string, value: string, validator: FormatValidator): void;
    /**
     * add a custom keyword-validator for a new keyword
     * @param datatype - datatype, to register keyword
     * @param keywordName - name of the keyword (like oneOf, format, etc)
     * @param validator - (keyword) validation function
     */
    keywordValidator(datatype: JSONSchemaTypes, keywordName: string, validator: KeywordValidator): void;
    /** returns all registered plugin-editors */
    getEditors(): Array<any>;
    /** returns all validation function */
    getValidators(): Array<any>;
};
export default _default;
