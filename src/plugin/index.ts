const editors = [];
const validators = [];


export default {

    editor(constructor): void {
        console.log(`register editor ${constructor.name}`);
        editors.push(constructor);
    },

    // format validator
    validator(keyword: string, value: string, validator): void {
        validators.push(["format", value, validator]);
    },

    keywordValidator(datatype: string, property: string, validator): void {
        validators.push(["keyword", datatype, property, validator]);
    },

    getEditors(): Array<any> {
        return editors;
    },

    getValidators(): Array<any> {
        return validators;
    }
};
