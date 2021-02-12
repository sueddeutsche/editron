import gp from "gson-pointer";
import populated from "./populated";
import jlib from "json-schema-library";
const { eachSchema } = jlib;
const UI_PROPERTY = "editron:ui";
import { JSONPointer, JSONSchema } from "../types";
import Controller from "../Controller";

/** property on a schema-definition, containing editron-options */
export const EDITRON_OPTION_PROPERTY = "editron:ui";


export function getEditronOptions(schema: JSONSchema) {
    return schema[EDITRON_OPTION_PROPERTY];
}


export function isPointer(string: JSONPointer): boolean {
    return typeof string === "string" && /^(#?\/.+|\.?\.\/.+)/.test(string);
}


// returns a list of {title, pointer} from root-node to pointer, excluding root node
function getBreadcrumps(pointer: JSONPointer, controller: Controller): Array<string> {
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


function enumOptions(schema: JSONSchema): Array<any> {
    let options;
    if (schema?.[UI_PROPERTY]?.enum) {
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
 * @param pointer - current base pointer for relative targets
 * @param controller
 * @param pointerToResolve - relative or absolute pointer (must start with `/` or `../`)
 * @return target value of at #/pointer/pointerToResolve or false
 */
function resolveReference(pointer: JSONPointer, controller: Controller, pointerToResolve: JSONPointer): any {
    if (populated(pointerToResolve) === false || isPointer(pointerToResolve) === false) {
        return null;
    }

    let targetPointer = pointerToResolve;
    if (targetPointer[0] !== "#") {
        targetPointer = gp.join(pointer, targetPointer);
    }

    const result = controller.service("data").get(targetPointer);
    return populated(result, result, null);
}


export type EditorSettings = {
    hidden: boolean;
    description?: string;
    title?: string;
    [p: string]: any;
}

/**
 * Returns the resolved copy of an options object. This method is used by the controller to help setup the
 * main options object of an editor instance. It is simplified, in that it currently does  not resolve any reference
 * on the current data
 * @return a resolved copy of the editron:ui settings
 */
function copyOptions(pointer: JSONPointer, controller: Controller): EditorSettings {
    const schema = controller.service("schema").get(pointer);

    const settings = {
        hidden: false,
        description: schema.description,
        ...schema.options, // @legacy options
        ...schema[UI_PROPERTY]
    };

    settings.title = getTitle(pointer, controller); // this comes last, because ensures an '*' is appended if required

    Object
        .keys(settings)
        .forEach(option => {
            settings[option] = resolveOption(pointer, controller, settings[option]);
        });

    return settings;
}


/**
 * Ensures each schema contains a valid schema[UI_PROPERTY] object
 * @param rootSchema
 * @return extended clone of json-schema
 */
function extendSchema<T extends JSONSchema>(rootSchema: T): T {
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
            ...childSchema.options, // @legacy options
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
function resolveOption<T>(pointer: JSONPointer, controller: Controller, optionValue: T): T {
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
 * @param pointer
 * @param controller
 * @param options - a list of option properties. The first non-empty option will be returned
 * @return the first non-empty option
 */
function getOption(pointer: JSONPointer, controller: Controller, ...options: Array<string>): any {
    if (options.length === 0) {
        throw new Error("Expected at least one options property to be given in getOption");
    }

    const schema = controller.service("schema").get(pointer);
    const editronOptions = schema[UI_PROPERTY] || {};

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


function getTitle(pointer: JSONPointer, controller: Controller) {
    const schema = controller.service("schema").get(pointer);
    const title = getOption(pointer, controller, "title") || "";
    return schema.minLength && title ? `${title.replace(/\s*\*\s*$/, "")} *` : title;
}


function getDefaultOption(schema: JSONSchema, option: string): ""|any {
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
