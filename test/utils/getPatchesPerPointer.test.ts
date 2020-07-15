import { strict as assert } from "assert";
import gp from "gson-pointer";
import diffpatch from "../../src/services/utils/diffpatch";
import getPatchesPerPointer from "../../src/services/utils/getPatchesPerPointer";


describe("utils/getPatchesPerPointer", () => {

    it("should return empty array if data is the same", () => {
        const result = getPatchesPerPointer({ a: "prop" }, { a: "prop" });

        assert.equal(result.length, 0);
    });

    it("should return patches with pointer of change and its patch", () => {
        const result = getPatchesPerPointer({ a: "prop" }, { a: "properly" });

        assert.equal(result.length, 1);
        assert.deepEqual(result[0], {
            parentPointer: "#",
            pointer: "#/a",
            patch: ["prop", "properly"]
        });
    });

    it("should return nested patches with pointer of change and its patch", () => {
        const result = getPatchesPerPointer(
            { a: { changedHere: "prop" } },
            { a: { changedHere: "properly" } }
        );

        assert.equal(result.length, 1);
        assert.deepEqual(result[0], {
            parentPointer: "#/a",
            pointer: "#/a/changedHere",
            patch: ["prop", "properly"]
        });
    });

    it("should return all patches with pointer of change and its patch", () => {
        const result = getPatchesPerPointer(
            { a: { changedHere: "prop" }, andHere: "boo" },
            { a: { changedHere: "properly" }, andHere: "foo" }
        );

        assert.equal(result.length, 2);
        assert.deepEqual(result[0], {
            parentPointer: "#/a",
            pointer: "#/a/changedHere",
            patch: ["prop", "properly"]
        });
        assert.deepEqual(result[1], {
            parentPointer: "#",
            pointer: "#/andHere",
            patch: ["boo", "foo"]
        });
    });

    it("should return pointer of object for key changes", () => {
        const result = getPatchesPerPointer(
            { a: { b: "key" } },
            { a: { c: "key" } }
        );

        assert.equal(result.length, 1);
        assert.deepEqual(result[0], {
            parentPointer: "#",
            pointer: "#/a",
            patch: { b: ["key", 0, 0], c: ["key"] }
        });
    });

    it("should return pointer of array for item changes", () => {
        const result = getPatchesPerPointer(
            { a: ["string"] },
            { a: ["modifiedString"] }
        );

        assert.equal(result.length, 1);
        assert.deepEqual(result[0], {
            parentPointer: "#",
            pointer: "#/a",
            patch: { "0": ["modifiedString"], _0: ["string", 0, 0], _t: "a" }
        });
    });

    it("should return movement of arrays", () => {
        const result = getPatchesPerPointer(
            { a: [{ _id: 0, title: "first" }, { _id: 1, title: "second" }, { _id: 2, title: "third" }] },
            { a: [{ _id: 2, title: "third" }, { _id: 1, title: "second" }, { _id: 0, title: "first" }] }
        );

        assert.equal(result.length, 1);
    });

    it("should return patches in correct order", () => {
        const result = getPatchesPerPointer(
            { a: [{ _id: 0, title: "first" }, { _id: 1, title: "second" }, { _id: 2, title: "third" }] },
            { a: [{ _id: 2, title: "third" }, { _id: 1, title: "zwei" }, { _id: 0, title: "eins" }] }
        );

        assert.equal(result.length, 3);
        // movement (changing indices) should come first
        assert.deepEqual(result[0], {
            parentPointer: "#",
            pointer: "#/a",
            patch: { _t: "a", _1: ["", 1, 3], _2: ["", 0, 3] }
        });
        // other changes should refer to updated index
        assert.equal(result[1].pointer, "#/a/1/title");
        assert.equal(result[2].pointer, "#/a/2/title");
    });


    function applyPatches(input, patches) {
        const orig = JSON.parse(JSON.stringify(input));
        patches.forEach(delta => {
            const val = gp.get(orig, delta.pointer);
            const updated = diffpatch.patch(val, delta.patch);
            gp.set(orig, delta.pointer, updated);
        });
        return orig;
    }

    it("patch should correctly patch array movement", () => {
        const input = { a: [{ _id: 0, title: "first" }, { _id: 1, title: "second" }, { _id: 2, title: "third" }] };
        const update = { a: [{ _id: 2, title: "third" }, { _id: 1, title: "zwei" }, { _id: 0, title: "eins" }] };
        const patches = getPatchesPerPointer(input, update);

        const result = applyPatches(input, patches);

        assert.deepEqual(update, result);
    });

    it("patch should correctly patch array insertion", () => {
        const input = { a: [{ _id: 0, title: "first" }, { _id: 2, title: "third" }] };
        const update = { a: [{ _id: 0, title: "first" }, { _id: 1, title: "second" }, { _id: 2, title: "third" }] };
        const patches = getPatchesPerPointer(input, update);

        const result = applyPatches(input, patches);

        assert.deepEqual(update, result);
    });

    it("patch should also patch different input arrays", () => {
        const input = { a: [{ _id: 0, title: "first" }, { _id: 1, title: "second" }, { _id: 2, title: "third" }] };
        const update = { a: [{ _id: 2, title: "third" }, { _id: 1, title: "second" }, { _id: 0, title: "first" }] };
        const patches = getPatchesPerPointer(input, update);

        const result = applyPatches({ a: [1, 2, 3] }, patches);

        assert.deepEqual(result, { a: [3, 2, 1] });
    });
});

