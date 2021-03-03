import diffpatch from "../utils/diffpatch";
import gp from "gson-pointer";
import { isPointer } from "../../utils/UISchema";
import { JSONPointer } from "../../types";
import { PatchResult } from "../utils/createDiff";
import pointersOf from "./pointersOf";
import { changePointer } from "../../utils/changePointer";


export type AddChange = {
    type: "add";
    pointer: JSONPointer;
}

export type DeleteChange = {
    type: "delete";
    pointer: JSONPointer;
}

export type MoveChange = {
    type: "move";
    pointer: JSONPointer;
    to: JSONPointer;
}

export type ValueChange = {
    type: "update";
    pointer: JSONPointer;
}


export const isAddChange = (change): change is AddChange => change?.type === "add";
export const isDeleteChange = (change): change is DeleteChange => change?.type === "delete";
export const isMoveChange = (change): change is MoveChange => change?.type === "move";
export const isValueChange = (change): change is ValueChange => change?.type === "update";


export type Change = AddChange|DeleteChange|MoveChange|ValueChange;


/** sort changes to be processable in order */
export function sortChanges(a, b) {
    if (a.type === b.type) {
        // longest pointer first (outer to inner)
        return b.pointer.length - a.pointer.length;
    }
    // delete first
    if (a.type === "delete") {
        return -1;
    } else if (b.type === "delete") {
        return 1;
    }
    // move next
    if (a.type === "move") {
        return -1;
    } else if (b.type === "move") {
        return 1;
    }
    // at last add
    if (a.type === "add") {
        return -1;
    } else if (b.type === "add") {
        return 1;
    }
    throw new Error(`Uncaught comparisson ${a.type}:${b.type}`);
}

export type SimpleChange = { type: "add"|"delete"|"update", pointer: JSONPointer, from?: JSONPointer, to?: JSONPointer };


export function changesWithChildPointers(changes: Array<Change>, previousData, currentData): Array<SimpleChange> {
    // build a list of changes for all pointers that have been modified.
    // Also converts move-change types to add & delete for a simpler api
    const changeStream: Array<SimpleChange> = [];
    changes.forEach((change: Change) => {
        if (change.type === "add") {
            pointersOf(gp.get(currentData, change.pointer), change.pointer).forEach(pointer => {
                changeStream.push({ type: "add", pointer });
            });

        } else if (change.type === "delete") {
            pointersOf(gp.get(previousData, change.pointer), change.pointer).forEach(pointer => {
                changeStream.push({ type: "delete", pointer });
            });

        } else if (change.type === "move") {
            pointersOf(gp.get(previousData, change.pointer), change.pointer).forEach(pointer => {
                changeStream.push({ type: "delete", pointer, to: changePointer(pointer, change.pointer, change.to) });
            });
            pointersOf(gp.get(currentData, change.to), change.to).forEach(pointer => {
                changeStream.push({ type: "add", pointer, from: changePointer(pointer, change.to, change.pointer) });
            });
        } else {
            // value change
            changeStream.push(change);
        }
    });

    changeStream.sort(sortChanges);
    return changeStream;
}



export function changesFromPatchResult(patchResult: PatchResult, parentDataType, originalData: any): Array<Change> {
    if (parentDataType === "array") {
        return getArrayChangeList(patchResult, originalData);
    } else if (parentDataType === "object") {
        return getObjectChangeList(patchResult);
    } else if (Array.isArray(patchResult.patch)) {
        return [{ type: "update", pointer: patchResult.pointer }];
    }
    throw new Error(`Unknown patchResult: ${JSON.stringify(patchResult)}`);
}


/** converts a patch to a list of simple changes for add, delete and move operations */
export function getArrayChangeList(patchResult: PatchResult, originalData: any): Array<Change> {
    const changeList = [];

    const eventLocation = patchResult.pointer;
    let originalArray = gp.get(originalData, eventLocation);
    if (Array.isArray(originalArray) === false) {
        return changeList;
    }
    originalArray = originalArray.map((_, index) => `${eventLocation}/${index}`);
    const changedArray = diffpatch.patch(Array.from(originalArray), patchResult.patch);

    // retrieve deleted items
    for (let i = 0, l = originalArray.length; i < l; i += 1) {
        if (changedArray.includes(originalArray[i]) === false) {
            const change: DeleteChange = { type: "delete", pointer: originalArray[i] };
            changeList.push(change);
        }
    }

    // identify added and movement items
    for (let i = 0, l = changedArray.length; i < l; i += 1) {
        let change: AddChange|MoveChange;
        const ptrOrData = changedArray[i];
        const ptrChanged = ptrOrData !== `${eventLocation}/${i}`;
        if (ptrChanged === false) {
            continue;
        }

        if (isPointer(ptrOrData)) {
            change = <MoveChange>{ type: "move", pointer: ptrOrData, to: `${eventLocation}/${i}` };
        } else {
            change = <AddChange>{ type: "add", pointer: `${eventLocation}/${i}` };
        }
        changeList.push(change);
    }

    return changeList;
}


/** converts a patch to a list of simple changes for add, delete and move operations */
export function getObjectChangeList(patchResult: PatchResult): Array<Change> {
    const changeList = [];
    const { pointer } = patchResult;
    const properties = Object.keys(patchResult.patch);
    for (let i = 0, l = properties.length; i < l; i += 1) {
        const property = properties[i];
        const change = patchResult.patch[property];
        if (change.length === 1) {
            changeList.push(<AddChange>{ type: "add", pointer: `${pointer}/${property}` });
        } else if (change[2] === 0) {
            changeList.push(<DeleteChange>{ type: "delete", pointer: `${pointer}/${property}` });
        } else if (change[2] === 3) {
            console.log("object property movement", patchResult);
            throw new Error(`Property movement currently unsupported (${JSON.stringify(change)})`);
        }
        // changed value
        // else if (change.length === 2) { console.log("change", `${patch.pointer}/${property}`); }
    }
    return changeList;
}
