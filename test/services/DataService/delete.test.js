/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const test = require("ava");

const DataService = require("../../../services/DataService");
const State = require("../../../services/State");


test.beforeEach((t) => {
    t.context.state = new State();
    t.context.service = new DataService(t.context.state);
    t.context.data = { item: { id: "original" }, root: true };
    t.context.service.set("#", t.context.data);
});


test("should remove value at given pointer", (t) => {
    const service = t.context.service;
    service.delete("#/item/id");

    const result = service.get("#");
    t.deepEqual(result, { item: {}, root: true });
});

test("should remove item at given pointer", (t) => {
    const service = t.context.service;
    service.set("#/item", { list: [0, 1, 2, 3] });

    service.delete("#/item/list/2");

    const result = service.get("#/item/list");
    t.deepEqual(result, [0, 1, 3]);
});

test("should throw when deleting root node", (t) => {
    t.throws(() => t.context.service.delete("#"), Error);
});
