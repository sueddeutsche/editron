import { JSONPointer } from "../../types";
import { PatchResult } from "../utils/createDiff";
export declare type AddChange = {
    type: "add";
    pointer: JSONPointer;
};
export declare type DeleteChange = {
    type: "delete";
    pointer: JSONPointer;
};
export declare type MoveChange = {
    type: "move";
    pointer: JSONPointer;
    to: JSONPointer;
};
export declare type ValueChange = {
    type: "update";
    pointer: JSONPointer;
};
export declare const isAddChange: (change: any) => change is AddChange;
export declare const isDeleteChange: (change: any) => change is DeleteChange;
export declare const isMoveChange: (change: any) => change is MoveChange;
export declare const isValueChange: (change: any) => change is ValueChange;
export declare type Change = AddChange | DeleteChange | MoveChange | ValueChange;
/** sort changes to be processable in order */
export declare function sortChanges(a: any, b: any): number;
export declare type SimpleChange = {
    type: "add" | "delete" | "update";
    pointer: JSONPointer;
    from?: JSONPointer;
    to?: JSONPointer;
};
export declare function changesWithChildPointers(changes: Array<Change>, previousData: any, currentData: any): Array<SimpleChange>;
export declare function changesFromPatchResult(patchResult: PatchResult, parentDataType: any, originalData: any): Array<Change>;
/** converts a patch to a list of simple changes for add, delete and move operations */
export declare function getArrayChangeList(patchResult: PatchResult, originalData: any): Array<Change>;
/** converts a patch to a list of simple changes for add, delete and move operations */
export declare function getObjectChangeList(patchResult: PatchResult): Array<Change>;
