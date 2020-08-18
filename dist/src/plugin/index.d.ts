import { EditorPlugin, Editor } from "../editors/Editor";
import { JSONPointer, FormatValidator, KeywordValidator, JSONSchemaTypes } from "../types";
export interface Plugin {
    id: string;
    initialize(controller: any): Plugin;
    onCreateEditor?: (pointer: JSONPointer, editor: Editor, options?: any) => void;
    onDestroyEditor?: (pointer: JSONPointer, editor: Editor) => void;
}
declare const _default: {
    /** register an editor (widget) to use in editron-controller */
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
