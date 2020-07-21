import { Editor } from "../editors/Editor";
import { FormatValidator, KeywordValidator, JSONSchemaTypes } from "../types";

const editors: Array<Editor> = [];
const validators = [];


export default {

    /** register an editor (widget) to use in editron-controller */
    editor(constructor: Editor): void {
        // @ts-ignore
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