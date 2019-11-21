/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const test = require("ava");

const DataService = require("../../../services/DataService");
const State = require("../../../services/State");


test.beforeEach(t => {
    t.context.data = { item: { id: "original" } };
    t.context.state = new State();
    t.context.service = new DataService(t.context.state);
    t.context.service.set("#", t.context.data);
});


test("should restore last state of t.context.data", t => {
    t.context.service.set("#/item/id", "modified");
    t.is(t.context.service.get("#/item/id"), "modified");

    t.context.service.undo();

    const result = t.context.service.get("#/item/id");
    t.is(result, "original");
});

test("should restore deleted value", t => {
    t.context.service.delete("#/item/id");
    t.is(t.context.service.get("#/item/id"), undefined);

    t.context.service.undo();

    const result = t.context.service.get("#/item/id");
    t.is(result, "original");
});

test("should redo previous undo step", t => {
    const service = t.context.service;
    service.set("#/item/id", "modified");
    service.undo();
    t.is(service.get("#/item/id"), "original");

    service.redo();

    const result = service.get("#/item/id");
    t.is(result, "modified");
});

test("should prevent redo if a change has been made", t => {
    const service = t.context.service;
    service.set("#/item/id", "modified");
    service.undo();
    service.set("#/item/id", "latest");
    t.is(service.get("#/item/id"), "latest");

    service.redo();

    const result = service.get("#/item/id");
    t.is(result, "latest");
});

test("should not update states from unknown actions", t => {
    const undoStepsBefore = t.context.state.get(t.context.service.id).data.past.length;

    t.context.state.dispatch({ type: "TEST_ACTION", value: 14 });
    const undoStepsAfter = t.context.state.get(t.context.service.id).data.past.length;

    t.is(undoStepsBefore, undoStepsAfter);
});

test("should not update parent pointer for a single changed value", t => {
    const service = t.context.service;
    let updatedRoot = false;
    let updatedParent = false;
    let updatedValue = false;
    service.set("#/item/id", "modified");
    service.observe("#", () => (updatedRoot = true));
    service.observe("#/item", () => (updatedParent = true));
    service.observe("#/item/id", () => (updatedValue = true));
    service.undo();

    t.is(updatedRoot, false);
    t.is(updatedParent, false, "parent pointer should not have been notified");
    t.is(updatedValue, true, "should have updated pointer at value");
});

test("should update parent pointer if t.context.data has been added", t => {
    const service = t.context.service;
    let updatedRoot = false;
    let updatedParent = false;
    let updatedValue = false;
    service.set("#/item", [1, 2, 3, 4, 5]);
    service.set("#/item", [1, 2, 3, 4, 5, 6]);
    service.observe("#", () => (updatedRoot = true));
    service.observe("#/item", () => (updatedParent = true));
    service.observe("#/item/2", () => (updatedValue = true));
    service.undo();

    t.is(updatedRoot, false, "root pointer should not have been notified");
    t.is(updatedParent, true, "parent pointer should have been notified");
    t.is(updatedValue, false);
});

test("should update parent pointer if t.context.data has been removed", t => {
    const service = t.context.service;
    let updatedRoot = false;
    let updatedParent = false;
    let updatedValue = false;
    service.set("#/item", [1, 2, 3, 4, 5]);
    service.set("#/item", [1, 2, 3, 5]);
    service.observe("#", () => (updatedRoot = true));
    service.observe("#/item", () => (updatedParent = true));
    service.observe("#/item/2", () => (updatedValue = true));
    service.undo();

    t.is(updatedRoot, false, "root pointer should not have been notified");
    t.is(updatedParent, true, "parent pointer should have been notified");
    t.is(updatedValue, false);
});
