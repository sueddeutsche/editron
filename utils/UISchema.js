// @TODO iterate over all schema definitions
const iterateSchema = require("json-schema-library").iterateSchema;
const gp = require("gson-pointer");

function isPointer(string) {
    return /(#?\/.+|\.\.\/)/.test(string);
}

function isEmpty(value) {
    return value == null || value === "" || value === "#";
}

function hasValue(value) {
    return !isEmpty(value);
}

function sanitizeString(title = "", maxLength = 40) {
    return title.substr ? title.replace(/<.*?>/g, "").substr(0, maxLength) : title;
}

function requiredTitle(title, schema) {
    return schema.minLength ? `${title.replace(/\s*\*\s*$/, "")} *` : title;
}

function getTitle(schema, titlePointer = "title", sanitize = false) {
    let title;
    if (hasValue(gp.get(schema, "#/ui/title"))) {
        title = schema.ui[titlePointer];
    } else if (hasValue(schema.title)) {
        title = schema.title;
    }

    if (hasValue(title)) {
        title = sanitize ? sanitizeString(title) : title;
        title = requiredTitle(title, schema);
    }

    return title;
}

function getDescription(schema) {
    let description;
    if (hasValue(schema.ui.description)) {
        description = schema.ui.description;
    } else if (hasValue(schema.description)) {
        description = schema.description;
    }
    return description;
}

function enumOptions(schema) {
    let options;
    if (schema.ui.enum) {
        options = schema.enum.map((value, index) => ({
            title: schema.ui.enum[index] || schema.enum[index],
            value: schema.enum[index]
        }));
    } else if (schema.options && schema.options.enum_titles) {
        // jdorn
        options = schema.enum.map((value, index) => ({
            title: schema.options.enum_titles[index] || schema.enum[index],
            value: schema.enum[index]
        }));
    } else {
        options = schema.enum;
    }
    return options;
}

/**
 * Resolves the given pointer absolute or relative in data
 * @param  {String} pointer             - current base pointer for relative targets
 * @param  {Controller} controller
 * @param  {String} pointerToResolve    - relative or absolute pointer (must start with `/` or `../`)
 * @return {Mixed} target value of at #/pointer/pointerToResolve or false
 */
function resolveReference(pointer, controller, pointerToResolve) {
    if (isEmpty(pointerToResolve)) {
        return undefined;
    }

    if (isPointer(pointerToResolve) === false) {
        return pointerToResolve;
    }

    let targetPointer = pointerToResolve;
    if (targetPointer[0] !== "#") {
        targetPointer = gp.join(pointer, targetPointer);
    }

    const result = controller.data().get(targetPointer);
    if (typeof result === "string") {
        return result;
    }

    return false;
}


function addUIOptions(schema, pointer) { // eslint-disable-line no-unused-vars
    const options = schema.options || {}; // legacy jdorn-json-editor
    schema.ui = schema.ui || {};
    schema.ui = Object.assign(schema.ui, {
        title: getTitle(schema),
        // "title-overview": getTitle(schema, "title-overview", true) || getTitle(schema),
        description: getDescription(schema),
        hidden: schema.ui.hidden === true || options.hidden === true
        // icon
        // attrs.class
        // ENUM OPTIONS
    });

    return schema;
}


/**
 * Ensures each schema contains a valid schema.ui object
 * @param  {Object} schema
 * @return {Object} extended clone of json-schema
 */
function extend(schema) {
    const rootSchema = JSON.parse(JSON.stringify(schema));
    iterateSchema(rootSchema, addUIOptions);
    return rootSchema;
}


module.exports = {
    extend,
    getTitle,
    getDescription,
    addUIOptions,
    requiredTitle,
    enumOptions,
    sanitizeString,
    resolveReference,
    isEmpty,
    hasValue
};
