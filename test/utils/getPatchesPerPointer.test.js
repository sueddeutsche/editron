const test = require("ava").test;
const gp = require("gson-pointer");
const diffpatch = require("../../services/utils/diffpatch");
const getPatchesPerPointer = require("../../services/utils/getPatchesPerPointer");


test("should return empty array if data is the same", (t) => {
    const result = getPatchesPerPointer({ a: "prop" }, { a: "prop" });

    t.is(result.length, 0);
});

test("should return patches with pointer of change and its patch", (t) => {
    const result = getPatchesPerPointer({ a: "prop" }, { a: "properly" });

    t.is(result.length, 1);
    t.deepEqual(result[0], { pointer: "#/a", patch: ["prop", "properly"] });
});

test("should return nested patches with pointer of change and its patch", (t) => {
    const result = getPatchesPerPointer(
        { a: { changedHere: "prop" } },
        { a: { changedHere: "properly" } }
    );

    t.is(result.length, 1);
    t.deepEqual(result[0], { pointer: "#/a/changedHere", patch: ["prop", "properly"] });
});

test("should return all patches with pointer of change and its patch", (t) => {
    const result = getPatchesPerPointer(
        { a: { changedHere: "prop" }, andHere: "boo" },
        { a: { changedHere: "properly" }, andHere: "foo" }
    );

    t.is(result.length, 2);
    t.deepEqual(result[0], { pointer: "#/a/changedHere", patch: ["prop", "properly"] });
    t.deepEqual(result[1], { pointer: "#/andHere", patch: ["boo", "foo"] });
});

test("should return pointer of object for key changes", (t) => {
    const result = getPatchesPerPointer(
        { a: { b: "key" } },
        { a: { c: "key" } }
    );

    t.is(result.length, 1);
    t.deepEqual(result[0], {
        pointer: "#/a",
        patch: { b: ["key", 0, 0], c: ["key"] }
    });
});

test("should return pointer of array for item changes", (t) => {
    const result = getPatchesPerPointer(
        { a: ["string"] },
        { a: ["modifiedString"] }
    );

    t.is(result.length, 1);
    t.deepEqual(result[0], {
        pointer: "#/a",
        patch: { "0": ["modifiedString"], _0: ["string", 0, 0], _t: "a" }
    });
});

test("should return movement of arrays", (t) => {
    const result = getPatchesPerPointer(
        { a: [{ _id: 0, title: "first" }, { _id: 1, title: "second" }, { _id: 2, title: "third" }] },
        { a: [{ _id: 2, title: "third" }, { _id: 1, title: "second" }, { _id: 0, title: "first" }] }
    );

    t.is(result.length, 1);
});

test("should return patches in correct order", (t) => {
    const result = getPatchesPerPointer(
        { a: [{ _id: 0, title: "first" }, { _id: 1, title: "second" }, { _id: 2, title: "third" }] },
        { a: [{ _id: 2, title: "third" }, { _id: 1, title: "zwei" }, { _id: 0, title: "eins" }] }
    );

    t.is(result.length, 3);
    // movement (changing indices) should come first
    t.deepEqual(result[0], {
        pointer: "#/a",
        patch: { _t: "a", _1: ["", 1, 3], _2: ["", 0, 3] }
    });
    // other changes should refer to updated index
    t.is(result[1].pointer, "#/a/1/title");
    t.is(result[2].pointer, "#/a/2/title");
});


function applyPatches(input, patches) {
    const orig = JSON.parse(JSON.stringify(input));
    patches.forEach((delta) => {
        const val = gp.get(orig, delta.pointer);
        const updated = diffpatch.patch(val, delta.patch);
        gp.set(orig, delta.pointer, updated);
    });
    return orig;
}

test("patch should correctly patch array movement", (t) => {
    const input = { a: [{ _id: 0, title: "first" }, { _id: 1, title: "second" }, { _id: 2, title: "third" }] };
    const update = { a: [{ _id: 2, title: "third" }, { _id: 1, title: "zwei" }, { _id: 0, title: "eins" }] };
    const patches = getPatchesPerPointer(input, update);

    const result = applyPatches(input, patches);

    t.deepEqual(update, result);
});

test("patch should correctly patch array insertion", (t) => {
    const input = { a: [{ _id: 0, title: "first" }, { _id: 2, title: "third" }] };
    const update = { a: [{ _id: 0, title: "first" }, { _id: 1, title: "second" }, { _id: 2, title: "third" }] };
    const patches = getPatchesPerPointer(input, update);

    const result = applyPatches(input, patches);

    t.deepEqual(update, result);
});

test("patch should also patch different input arrays", (t) => {
    const input = { a: [{ _id: 0, title: "first" }, { _id: 1, title: "second" }, { _id: 2, title: "third" }] };
    const update = { a: [{ _id: 2, title: "third" }, { _id: 1, title: "second" }, { _id: 0, title: "first" }] };
    const patches = getPatchesPerPointer(input, update);

    const result = applyPatches({ a: [1, 2, 3] }, patches);

    t.deepEqual(result, { a: [3, 2, 1] });
});
