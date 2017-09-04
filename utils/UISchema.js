// @TODO iterate over all schema definitions
const iterateSchema = require("json-schema-library").iterateSchema;
const gp = require("gson-pointer");
const UI_PROPERTY = "editron:ui";


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
    if (hasValue(gp.get(schema, `#/${UI_PROPERTY}/title`))) {
        title = schema[UI_PROPERTY][titlePointer];
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
    if (hasValue(schema[UI_PROPERTY].description)) {
        description = schema[UI_PROPERTY].description;
    } else if (hasValue(schema.description)) {
        description = schema.description;
    }
    return description;
}

function enumOptions(schema) {
    let options;
    if (schema[UI_PROPERTY].enum) {
        options = schema.enum.map((value, index) => ({
            title: schema[UI_PROPERTY].enum[index] || schema.enum[index],
            value: schema.enum[index]
        }));
    } else if (schema.options && schema.options.enum_titles) {
        // @legacy support jdorn/json-editor
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
    schema[UI_PROPERTY] = schema[UI_PROPERTY] || {};
    schema[UI_PROPERTY] = Object.assign(schema[UI_PROPERTY], {
        title: getTitle(schema),
        // "title-overview": getTitle(schema, "title-overview", true) || getTitle(schema),
        description: getDescription(schema),
        hidden: schema[UI_PROPERTY].hidden === true || options.hidden === true
        // icon
        // attrs.class
        // ENUM OPTIONS
    });

    return schema;
}

function getIcon(schema) {
    return gp.get(schema, `${UI_PROPERTY}/icon`) | "";
}


/**
 * Ensures each schema contains a valid schema[UI_PROPERTY] object
 * @param  {Object} schema
 * @return {Object} extended clone of json-schema
 */
function extend(schema) {
    const rootSchema = JSON.parse(JSON.stringify(schema));
    iterateSchema(rootSchema, addUIOptions);
    return rootSchema;
}


module.exports = {
    UI_PROPERTY,
    extend,
    getTitle,
    getDescription,
    getIcon,
    addUIOptions,
    requiredTitle,
    enumOptions,
    sanitizeString,
    resolveReference,
    isEmpty,
    hasValue
};
