import { DiffPatcher } from "jsondiffpatch";
const options = {
    // used to match objects when diffing arrays, by default only === operator is used
    // this function is used only to when objects are not equal by ref
    objectHash: obj => obj._id,
    arrays: {
        // default true, detect items moved inside the array (otherwise they will be registered as remove+add)
        detectMove: true,
        // default false, the value of items moved is not included in deltas
        includeValueOnMove: false
    }
};
const diffpatch = new DiffPatcher(options); // jsondiffpatch.create(options);
// @ts-ignore
diffpatch.options = options;
export default diffpatch;
