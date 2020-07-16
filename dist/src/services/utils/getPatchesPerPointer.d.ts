import { Delta } from "./diffpatch";
import { JSONPointer } from "../../types";
export { Delta };
export declare type SearchResult = {
    pointer: JSONPointer;
    patch: Delta;
    /** if patch is a patch on array */
    isArrayItem: boolean;
    /** true, if element-property was added or removed */
    changedKey: boolean;
};
export declare type Patch = {
    pointer: JSONPointer;
    parentPointer: JSONPointer;
    patch: {
        [property: string]: Delta;
    };
};
export default function getPatchesPerPointer<T extends any>(previousValue: T, newValue: T): Array<Patch>;
