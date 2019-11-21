/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const test = require("ava");

const DataService = require("../../../services/DataService");
const State = require("../../../services/State");


test.beforeEach((t) => {
    t.context.state = new State();
    t.context.service = new DataService(t.context.state);
});


test("should store given data", (t) => {
    t.context.service.set("#", { id: "storeme" });

    const data = t.context.service.get("#");

    t.deepEqual(data, { id: "storeme" });
});

test("should return root object by default", (t) => {
    t.context.service.set("#", { id: "storeme" });

    const data = t.context.service.get();

    t.deepEqual(data, { id: "storeme" });
});

test("should store copy of data", (t) => {
    const data = { item: { id: "original" } };
    t.context.service.set("#", data);

    data.item.id = "modified";

    t.deepEqual(t.context.service.get("#"), { item: { id: "original" } });
});

test("should return copy of data", (t) => {
    t.context.service.set("#", { item: { id: "original" } });
    const data = t.context.service.get("#");

    data.item.id = "modified";

    t.deepEqual(t.context.service.get("#"), { item: { id: "original" } });
});

test("should update nested value", (t) => {
    const data = { item: { id: "original", label: "" } };
    t.context.service.set("#", data);

    t.context.service.set("#/item/label", "modified");

    t.deepEqual(t.context.service.get("#"), { item: { id: "original", label: "modified" } });
});

test("should return nested data", (t) => {
    const data = { item: { id: "original" } };
    t.context.service.set("#", data);

    const result = t.context.service.get("#/item/id");

    t.is(result, "original");
});

test("should throw if pointer has no parent value", (t) => {
    t.context.service.set("#", {});

    t.throws(() => t.context.service.set("#/invalid/path", "will not be set"), Error);
});

test("should throw if pointer is undefined", (t) => {
    t.context.service.set("#", {});

    t.throws(() => t.context.service.set("#/invalid", "will not be set"), Error);
});
