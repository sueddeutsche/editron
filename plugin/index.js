const editors = [];
const validators = [];

module.exports = {

    editor: function (constructor) {
        console.log(`register editor ${constructor.name}`);
        editors.push(constructor);
    },

    // format validator
    validator: function (keyword, value, validator) {
        validators.push(["format", value, validator]);
    },

    keywordValidator: function (datatype, property, validator) {
        validators.push(["keyword", datatype, property, validator]);
    },

    getEditors: () => editors,
    getValidators: () => validators
};
