import diffpatch from "../utils/diffpatch";
import gp from "gson-pointer";
import { isPointer } from "../../utils/UISchema";
import pointersOf from "./pointersOf";
export const isAddChange = (change) => (change === null || change === void 0 ? void 0 : change.type) === "add";
export const isDeleteChange = (change) => (change === null || change === void 0 ? void 0 : change.type) === "delete";
export const isMoveChange = (change) => (change === null || change === void 0 ? void 0 : change.type) === "move";
export const isValueChange = (change) => (change === null || change === void 0 ? void 0 : change.type) === "update";
/** sort changes to be processable in order */
export function sortChanges(a, b) {
    if (a.type === b.type) {
        // longest pointer first (outer to inner)
        return b.pointer.length - a.pointer.length;
    }
    // delete first
    if (a.type === "delete") {
        return -1;
    }
    else if (b.type === "delete") {
        return 1;
    }
    // move next
    if (a.type === "move") {
        return -1;
    }
    else if (b.type === "move") {
        return 1;
    }
    // at last add
    if (a.type === "add") {
        return -1;
    }
    else if (b.type === "add") {
        return 1;
    }
    throw new Error(`Uncaught comparisson ${a.type}:${b.type}`);
}
export function changesWithChildPointers(changes, previousData, currentData) {
    // build a list of changes for all pointers that have been modified.
    // Also converts move-change types to add & delete for a simpler api
    const changeStream = [];
    changes.forEach((change) => {
        if (change.type === "add") {
            pointersOf(gp.get(currentData, change.pointer), change.pointer).forEach(pointer => {
                changeStream.push({ type: "add", pointer });
            });
        }
        else if (change.type === "delete") {
            pointersOf(gp.get(previousData, change.pointer), change.pointer).forEach(pointer => {
                changeStream.push({ type: "delete", pointer });
            });
        }
        else if (change.type === "move") {
            pointersOf(gp.get(previousData, change.pointer), change.pointer).forEach(pointer => {
                changeStream.push({ type: "delete", pointer, to: pointer.replace(change.pointer, change.to) });
            });
            pointersOf(gp.get(currentData, change.to), change.to).forEach(pointer => {
                changeStream.push({ type: "add", pointer, from: pointer.replace(change.to, change.pointer) });
            });
        }
        else {
            // value change
            changeStream.push(change);
        }
    });
    changeStream.sort(sortChanges);
    return changeStream;
}
export function changesFromPatchResult(patchResult, parentDataType, originalData) {
    if (parentDataType === "array") {
        return getArrayChangeList(patchResult, originalData);
    }
    else if (parentDataType === "object") {
        return getObjectChangeList(patchResult);
    }
    else if (Array.isArray(patchResult.patch)) {
        return [{ type: "update", pointer: patchResult.pointer }];
    }
    throw new Error(`Unknown patchResult: ${JSON.stringify(patchResult)}`);
}
/** converts a patch to a list of simple changes for add, delete and move operations */
export function getArrayChangeList(patchResult, originalData) {
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
            const change = { type: "delete", pointer: originalArray[i] };
            changeList.push(change);
        }
    }
    // identify added and movement items
    for (let i = 0, l = changedArray.length; i < l; i += 1) {
        let change;
        const ptrOrData = changedArray[i];
        const ptrChanged = ptrOrData !== `${eventLocation}/${i}`;
        if (ptrChanged === false) {
            continue;
        }
        if (isPointer(ptrOrData)) {
            change = { type: "move", pointer: ptrOrData, to: `${eventLocation}/${i}` };
        }
        else {
            change = { type: "add", pointer: `${eventLocation}/${i}` };
        }
        changeList.push(change);
    }
    return changeList;
}
/** converts a patch to a list of simple changes for add, delete and move operations */
export function getObjectChangeList(patchResult) {
    const changeList = [];
    const { pointer } = patchResult;
    const properties = Object.keys(patchResult.patch);
    for (let i = 0, l = properties.length; i < l; i += 1) {
        const property = properties[i];
        const change = patchResult.patch[property];
        if (change.length === 1) {
            changeList.push({ type: "add", pointer: `${pointer}/${property}` });
        }
        else if (change[2] === 0) {
            changeList.push({ type: "delete", pointer: `${pointer}/${property}` });
        }
        else if (change[2] === 3) {
            console.log("object property movement", patchResult);
            throw new Error(`Property movement currently unsupported (${JSON.stringify(change)})`);
        }
        // changed value
        // else if (change.length === 2) { console.log("change", `${patch.pointer}/${property}`); }
    }
    return changeList;
}
