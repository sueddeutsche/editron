// @TODO iterate over all schema definitions
const iterateSchema = require("json-schema-library").iterateSchema;
const gp = require("gson-pointer");
const UI_PROPERTY = "editron:ui";
const populated = require("./populated");


function isPointer(string) {
    return typeof string === "string" && /^(#?\/.+|\.?\.\/.+)/.test(string);
}


// returns a list of {title, pointer} from root-node to pointer, excluding root node
function getBreadcrumps(pointer, controller) {
    const breadcrumps = [];
    while (pointer !== "#") {
        breadcrumps.unshift({
            title: getOption(pointer, controller, "title"),
            pointer
        });
        pointer = gp.join(pointer, "..");
    }
    return breadcrumps;
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
 *
 * @param  {String} pointer             - current base pointer for relative targets
 * @param  {Controller} controller
 * @param  {String} pointerToResolve    - relative or absolute pointer (must start with `/` or `../`)
 * @return {Mixed} target value of at #/pointer/pointerToResolve or false
 */
function resolveReference(pointer, controller, pointerToResolve) {
    if (populated(pointerToResolve) === false || isPointer(pointerToResolve) === false) {
        return null;
    }

    let targetPointer = pointerToResolve;
    if (targetPointer[0] !== "#") {
        targetPointer = gp.join(pointer, targetPointer);
    }

    const result = controller.data().get(targetPointer);
    return populated(result, result, null);
}


/**
 * Returns the resolved copy of an options object. This method is used by the controller to help setup the
 * main options object of an editor instance. It is simplified, in that it currently does  not resolve any reference
 * on the current data
 *
 * @param {String} pointer
 * @param {Controller} controller
 * @return {Object} a resolved copy of the editron:ui settings
 */
function copyOptions(pointer, controller) {
    const schema = controller.schema().get(pointer);

    const settings = Object.assign({
        hidden: false,
        description: schema.description
    }, schema.options, schema[UI_PROPERTY]); // @legacy options

    settings.title = getTitle(pointer, controller); // this comes last, because ensures an '*' is appended if required

    Object
        .keys(settings)
        .forEach((option) => {
            settings[option] = resolveOption(pointer, controller, settings[option]);
        });

    return settings;
}


/**
 * Ensures each schema contains a valid schema[UI_PROPERTY] object
 * @param  {Object} rootSchema
 * @return {Object} extended clone of json-schema
 */
function extendSchema(rootSchema) {
    rootSchema = JSON.parse(JSON.stringify(rootSchema));
    iterateSchema(rootSchema, (childSchema) => {
        childSchema[UI_PROPERTY] = childSchema[UI_PROPERTY] || {};
        childSchema[UI_PROPERTY] = Object.assign({
            hidden: false,
            title: childSchema.title || "",
            description: childSchema.description || ""
        }, childSchema.options, childSchema[UI_PROPERTY]); // @legacy options
    });

    return rootSchema;
}


/**
 * Resolves a list of pointers, where the first found value is returned. Supports simple strings as fallback.
 *  e.g. `["/data/local/title", "/data/local/subtitle", "Title"]`
 *
 * @param  {String} pointer     [description]
 * @param  {Controller} controller  [description]
 * @param  {String|Array} optionValue [description]
 * @return {Mixed} the option value
 */
function resolveOption(pointer, controller, optionValue) {
    if (Array.isArray(optionValue)) {
        for (let i = 0; i < optionValue.length; i += 1) {
            const option = optionValue[i];
            if (isPointer(option)) {
                const value = resolveReference(pointer, controller, option);
                if (populated(value)) {
                    return value;
                }
            } else if (populated(option)) {
                return option;
            }
        }
    }
    return optionValue;
}


/**
 * Returns the first defined option set in schema. Supports relative and absolute pointers in data
 *
 * @param  {String} pointer
 * @param  {Controller} controller
 * @param  {...[String]} options    - a list of option properties. The first non-empty option will be returned
 * @return {Mixed} the first non-empty option
 */
function getOption(pointer, controller, ...options) {
    const schema = controller.schema().get(pointer);
    const editronOptions = schema[UI_PROPERTY] || {};

    if (options.length === 0) {
        throw new Error("Expected at least one options property to be given in getOption");
    }

    for (let i = 0; i < options.length; i += 1) {
        const option = editronOptions[options[i]];
        const resolver = isPointer(option) ? resolveReference : resolveOption;
        const value = resolver(pointer, controller, option);

        if (populated(value)) {
            return value;
        } else if (populated(schema[options[i]])) {
            return schema[options[i]];
        }
    }

    return null;
}


function getTitle(pointer, controller) {
    const schema = controller.schema().get(pointer);
    const title = getOption(pointer, controller, "title") || "";
    return schema.minLength ? `${title.replace(/\s*\*\s*$/, "")} *` : title;
}


function getDefaultOption(schema, option) {
    return schema[UI_PROPERTY] ? (schema[UI_PROPERTY][option] || "") : "";
}


module.exports = {
    UI_PROPERTY,
    getOption,
    copyOptions,
    extendSchema,
    getBreadcrumps,
    getTitle,
    enumOptions,
    getDefaultOption
};
