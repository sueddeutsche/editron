import diffpatch from "./diffpatch";
import gp from "gson-pointer";
/** sort by longest pointer first (from tree leaves to root node) */
function sortByPointer(a, b) {
    if (a.pointer < b.pointer) {
        return -1;
    }
    else if (a.pointer > b.pointer) {
        return 1;
    }
    return 0;
}
function isChange(value) {
    return Array.isArray(value);
}
/** converts the diff tree result to a flat list of patches */
function deltaToChangeList(pointer, diff, result = []) {
    // run through each property and search for a patch
    const properties = Object.keys(diff);
    const isArrayItem = diff["_t"] === "a";
    properties.forEach(property => {
        // skip array flag
        if (property === "_t") {
            return;
        }
        const change = diff[property];
        if (!isChange(change)) {
            // step into path and search for patches
            // @note this could also be a removed array-item ("_<index>": value)
            // findPatches(`${pointer}/${property.replace(/^_/, "")}`, value, result);
            deltaToChangeList(`${pointer}/${property}`, change, result);
            return;
        }
        // add the patch to list
        const propertyAdded = diff[property].length === 1;
        const propertyRemoved = diff[property][2] === 0;
        const entry = {
            pointer: `${pointer}/${property}`,
            change,
            isArrayItem,
            changedProperty: !isArrayItem && (propertyAdded || propertyRemoved)
        };
        result.push(entry);
    });
    return result;
}
/**
 * returns a list of changes from the passed diffpatch-delta
 * Changes on object-properties (add, remove, rename) or array-items (add,
 * remove, move) are grouped by their parent object or array.
 */
export function diffToPatches(diff) {
    const map = {};
    const changes = deltaToChangeList("#", diff);
    // merge all item patches by their parent-pointer
    changes.forEach(entry => {
        const { pointer, change, isArrayItem, changedProperty } = entry;
        if (isArrayItem) {
            const parent = gp.join(pointer, "..");
            const key = pointer.replace(`${parent}/`, "");
            map[parent] = map[parent] || { _t: "a" };
            map[parent][key] = change;
            return;
        }
        if (changedProperty) {
            const parent = gp.join(pointer, "..");
            const key = pointer.replace(`${parent}/`, "");
            map[parent] = map[parent] || {};
            map[parent][key] = change;
            return;
        }
        map[entry.pointer] = change;
    });
    return Object.keys(map)
        .map(pointer => ({ pointer, patch: map[pointer] }))
        .sort(sortByPointer);
}
/**
 * creates a diff between given data-versions and returns a list of changes.
 * Changes on object-properties (add, remove, rename) or array-items (add,
 * remove, move) are grouped by their parent object or array.
 */
export default function createDiff(previousValue, newValue) {
    const diff = diffpatch.diff(previousValue, newValue);
    return diff == null ? [] : diffToPatches(diff);
}
