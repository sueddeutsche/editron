import gp from "gson-pointer";
import populated from "./populated";
import jlib from "json-schema-library";
const { eachSchema } = jlib;
const UI_PROPERTY = "editron:ui";
/** property on a schema-definition, containing editron-options */
export const EDITRON_OPTION_PROPERTY = "editron:ui";
export function getEditronOptions(schema) {
    return schema[EDITRON_OPTION_PROPERTY];
}
export function isPointer(string) {
    return typeof string === "string" && /^(#?\/.+|\.?\.\/.+)/.test(string);
}
// returns a list of {title, pointer} from root-node to pointer, excluding root node
function getBreadcrumps(pointer, editron) {
    const breadcrumps = [];
    while (pointer !== "#") {
        breadcrumps.unshift({
            title: getOption(pointer, editron, "title"),
            pointer
        });
        pointer = gp.join(pointer, "..");
    }
    return breadcrumps;
}
function enumOptions(schema) {
    var _a;
    let options;
    if ((_a = schema === null || schema === void 0 ? void 0 : schema[UI_PROPERTY]) === null || _a === void 0 ? void 0 : _a.enum) {
        options = schema.enum.map((value, index) => ({
            title: schema[UI_PROPERTY].enum[index] || schema.enum[index],
            value: schema.enum[index]
        }));
    }
    else if (schema.options && schema.options.enum_titles) {
        // @legacy support jdorn/json-editor
        options = schema.enum.map((value, index) => ({
            title: schema.options.enum_titles[index] || schema.enum[index],
            value: schema.enum[index]
        }));
    }
    else {
        options = schema.enum;
    }
    return options;
}
/**
 * Resolves the given pointer absolute or relative in data
 * @param pointer - current base pointer for relative targets
 * @param editron
 * @param pointerToResolve - relative or absolute pointer (must start with `/` or `../`)
 * @return target value of at #/pointer/pointerToResolve or false
 */
function resolveReference(pointer, editron, pointerToResolve) {
    if (populated(pointerToResolve) === false || isPointer(pointerToResolve) === false) {
        return null;
    }
    let targetPointer = pointerToResolve;
    if (targetPointer[0] !== "#") {
        targetPointer = gp.join(pointer, targetPointer);
    }
    const result = editron.service("data").get(targetPointer);
    return populated(result, result, null);
}
/**
 * Returns the resolved copy of an options object. This method is used by the editron to help setup the
 * main options object of an editor instance. It is simplified, in that it currently does  not resolve any reference
 * on the current data
 * @return a resolved copy of the editron:ui settings
 */
function copyOptions(pointer, editron) {
    const schema = editron.service("schema").get(pointer);
    const settings = {
        hidden: false,
        description: schema.description,
        ...schema.options,
        ...schema[UI_PROPERTY]
    };
    settings.title = getTitle(pointer, editron); // this comes last, because ensures an '*' is appended if required
    Object
        .keys(settings)
        .forEach(option => {
        settings[option] = resolveOption(pointer, editron, settings[option]);
    });
    return settings;
}
/**
 * Ensures each schema contains a valid schema[UI_PROPERTY] object
 * @param rootSchema
 * @return extended clone of json-schema
 */
function extendSchema(rootSchema) {
    rootSchema = JSON.parse(JSON.stringify(rootSchema));
    eachSchema(rootSchema, childSchema => {
        if (childSchema.$ref && childSchema[UI_PROPERTY] == null) {
            // do not add default options for references - json-schema-library
            // merges on root elements only (which is acceptable)
            return;
        }
        childSchema[UI_PROPERTY] = {
            hidden: false,
            title: childSchema.title || "",
            description: childSchema.description || "",
            ...childSchema.options,
            ...childSchema[UI_PROPERTY]
        };
    });
    return rootSchema;
}
/**
 * Resolves a list of pointers, where the first found value is returned. Supports simple strings as fallback.
 *  e.g. `["/data/local/title", "/data/local/subtitle", "Title"]`
 *
 * @return the option value
 */
function resolveOption(pointer, editron, optionValue) {
    if (Array.isArray(optionValue)) {
        for (let i = 0; i < optionValue.length; i += 1) {
            const option = optionValue[i];
            if (isPointer(option)) {
                const value = resolveReference(pointer, editron, option);
                if (populated(value)) {
                    return value;
                }
            }
            else if (populated(option)) {
                return option;
            }
        }
    }
    return optionValue;
}
/**
 * Returns the first defined option set in schema. Supports relative and absolute pointers in data
 *
 * @param pointer
 * @param editron
 * @param options - a list of option properties. The first non-empty option will be returned
 * @return the first non-empty option
 */
function getOption(pointer, editron, ...options) {
    if (options.length === 0) {
        throw new Error("Expected at least one options property to be given in getOption");
    }
    const schema = editron.service("schema").get(pointer);
    const editronOptions = schema[UI_PROPERTY] || {};
    for (let i = 0; i < options.length; i += 1) {
        const option = editronOptions[options[i]];
        const resolver = isPointer(option) ? resolveReference : resolveOption;
        const value = resolver(pointer, editron, option);
        if (populated(value)) {
            return value;
        }
        else if (populated(schema[options[i]])) {
            return schema[options[i]];
        }
    }
    return null;
}
function getTitle(pointer, editron) {
    const schema = editron.service("schema").get(pointer);
    const title = getOption(pointer, editron, "title") || "";
    return schema.minLength && title ? `${title.replace(/\s*\*\s*$/, "")} *` : title;
}
function getDefaultOption(schema, option) {
    return schema[UI_PROPERTY] ? (schema[UI_PROPERTY][option] || "") : "";
}
export default {
    copyOptions,
    enumOptions,
    extendSchema,
    getBreadcrumps,
    getDefaultOption,
    getEditronOptions,
    getOption,
    getTitle,
    isPointer,
    UI_PROPERTY,
};
