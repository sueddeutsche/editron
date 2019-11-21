const test = require("ava");
const DataService = require("../../../services/DataService");
const State = require("../../../services/State");

const BUBBLE_EVENTS = true;


test.beforeEach(t => {
    t.context.state = new State();
    t.context.service = new DataService(t.context.state);
    t.context.data = { item: { id: "original" }, other: { id: "other-item" } };
    t.context.service.set("#", t.context.data);
});


test("should notify of change at pointer", t => {
    let called = false;
    t.context.service.observe("#/item/id", () => (called = true));
    t.context.service.set("#/item/id", "modified");

    t.is(called, true);
});

test("should not notify parents", t => {
    let called = false;
    t.context.service.observe("#/item", () => (called = true));
    t.context.service.set("#/item/id", "modified");

    t.is(called, false);
});

test("should also pass type of modified data", t => {
    let event;
    t.context.service.observe("#/item/id", e => (event = e));
    t.context.service.set("#/item/id", "modified");

    t.is(event.type, "string");
});

test("should notify all parents of change", t => {
    let called = false;
    t.context.service.observe("#/item", () => (called = true), BUBBLE_EVENTS);
    t.context.service.set("#/item/id", "modified");

    t.is(called, true);
});

test("should notify root of change", t => {
    let called = false;
    t.context.service.observe("#", () => (called = true), BUBBLE_EVENTS);
    t.context.service.set("#/item/id", "modified");

    t.is(called, true);
});

test("should not notify observers on different trees", t => {
    let called = false;
    t.context.service.observe("#/item", () => (called = true), BUBBLE_EVENTS);
    t.context.service.set("#/other/id", "modified");

    t.is(called, false);
});

test("should remove observer", t => {
    let called = false;
    function cb() {
        called = true;
    }
    t.context.service.observe("#/item", cb, BUBBLE_EVENTS);
    t.context.service.removeObserver("#/item", cb);
    t.context.service.set("#/item/id", "modified");

    t.is(called, false);
});
