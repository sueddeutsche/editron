const editors = [];
const validators = [];
export default {
    /** register an editor (widget) to use in editron-controller */
    editor(constructor) {
        console.log(`register editor ${constructor.name}`);
        editors.push(constructor);
    },
    /**
     * add a custom json-schema format-validator for a specific format value
     * @param _ - unused...
     * @param value - value of property format for this validator (must be unique formatType)
     * @param validator - (format) validation function
     */
    validator(_, value, validator) {
        validators.push(["format", value, validator]);
    },
    /**
     * add a custom keyword-validator for a new keyword
     * @param datatype - datatype, to register keyword
     * @param keywordName - name of the keyword (like oneOf, format, etc)
     * @param validator - (keyword) validation function
     */
    keywordValidator(datatype, keywordName, validator) {
        validators.push(["keyword", datatype, keywordName, validator]);
    },
    /** returns all registered plugin-editors */
    getEditors() {
        return editors;
    },
    /** returns all validation function */
    getValidators() {
        return validators;
    }
};
