import { JSONPointer, JSONSchema } from "../types";
import Editron from "../Editron";
/** property on a schema-definition, containing editron-options */
export declare const EDITRON_OPTION_PROPERTY = "editron:ui";
export declare function getEditronOptions(schema: JSONSchema): any;
export declare function isPointer(string: JSONPointer): boolean;
declare function getBreadcrumps(pointer: JSONPointer, editron: Editron): Array<string>;
declare function enumOptions(schema: JSONSchema): Array<any>;
export declare type EditorSettings = {
    hidden: boolean;
    description?: string;
    title?: string;
    [p: string]: any;
};
/**
 * Returns the resolved copy of an options object. This method is used by the editron to help setup the
 * main options object of an editor instance. It is simplified, in that it currently does  not resolve any reference
 * on the current data
 * @return a resolved copy of the editron:ui settings
 */
declare function copyOptions(pointer: JSONPointer, editron: Editron): EditorSettings;
/**
 * Ensures each schema contains a valid schema[UI_PROPERTY] object
 * @param rootSchema
 * @return extended clone of json-schema
 */
declare function extendSchema<T extends JSONSchema>(rootSchema: T): T;
/**
 * Returns the first defined option set in schema. Supports relative and absolute pointers in data
 *
 * @param pointer
 * @param editron
 * @param options - a list of option properties. The first non-empty option will be returned
 * @return the first non-empty option
 */
declare function getOption(pointer: JSONPointer, editron: Editron, ...options: Array<string>): any;
declare function getTitle(pointer: JSONPointer, editron: Editron): any;
declare function getDefaultOption(schema: JSONSchema, option: string): "" | any;
declare const _default: {
    copyOptions: typeof copyOptions;
    enumOptions: typeof enumOptions;
    extendSchema: typeof extendSchema;
    getBreadcrumps: typeof getBreadcrumps;
    getDefaultOption: typeof getDefaultOption;
    getEditronOptions: typeof getEditronOptions;
    getOption: typeof getOption;
    getTitle: typeof getTitle;
    isPointer: typeof isPointer;
    UI_PROPERTY: string;
};
export default _default;
