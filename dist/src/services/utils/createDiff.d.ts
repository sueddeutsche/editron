import { JSONPointer } from "../../types";
export declare type Change = [any, any?, number?];
export declare type Patch = {
    /** the property "_t" { "_t": "a"} is not typed, but assigned to array-patches (jsondiffpatch delta format) */
    [property: string]: Change;
};
export declare type PatchResult = {
    pointer: JSONPointer;
    parentPointer: JSONPointer;
    patch: Patch;
};
/**
 * creates a diff between given data-versions and returns a list of changes.
 * Changes on object-properties (add, remove, rename) or array-items (add,
 * remove, move) are grouped by their parent object or array.
 */
export default function createDiff<T extends any>(previousValue: T, newValue: T): Array<PatchResult>;
