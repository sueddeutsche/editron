/* global window */
const DiffPatcher = require("jsondiffpatch/src/diffpatcher").DiffPatcher;
const diff_match_patch = require("diff_match_patch");
const options = {
    // used to match objects when diffing arrays, by default only === operator is used
    // this function is used only to when objects are not equal by ref
    objectHash: (obj) => obj._id,
    arrays: {
        // default true, detect items moved inside the array (otherwise they will be registered as remove+add)
        detectMove: true,
        // default false, the value of items moved is not included in deltas
        includeValueOnMove: false
    }
};

try {
    // required in browser environments
    window.diff_match_patch = diff_match_patch;
} catch (e) {
    // loaded by default in nodejs
}

const diffpatch = new DiffPatcher(options); // jsondiffpatch.create(options);
diffpatch.options = options;


module.exports = diffpatch;
