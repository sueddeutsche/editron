/* eslint arrow-parens: 0, func-style: 0, callback-return: 0 */
import { strict as assert } from "assert";
import Bubbles from "../../../src/services/utils/BubblingCollectionObservable";
const cp = (v) => JSON.parse(JSON.stringify(v));
const createValidationError = (o = {}) => o;
describe("BubblingCollectionObservable", () => {
    // Bubbable
    it("should notify observers", () => {
        let called = false;
        const b = new Bubbles();
        b.observe("#", () => (called = true));
        b.notify("#", createValidationError());
        assert.equal(called, true);
    });
    it("should remove observer", () => {
        let called = false;
        const b = new Bubbles();
        const cb = () => (called = true);
        b.observe("#", cb);
        b.removeObserver("#", cb);
        b.notify("#", createValidationError());
        assert.equal(called, false);
    });
    it("should notify observers along pointer", () => {
        const called = [];
        const b = new Bubbles();
        b.observe("#", () => called.push("#"), true);
        b.observe("#/child", () => called.push("#/child"), true);
        b.observe("#/child/item", () => called.push("#/child/item"), true);
        b.notify("#/child/item", createValidationError());
        assert.deepEqual(called, ["#/child/item", "#/child", "#"]);
    });
    it("should not notify observers along pointer that listen to their location only", () => {
        const called = [];
        const b = new Bubbles();
        b.observe("#", () => called.push("#"), true);
        b.observe("#/child", () => called.push("#/child"), false);
        b.observe("#/child/item", () => called.push("#/child/item"), false);
        b.notify("#/child/item", createValidationError());
        assert.deepEqual(called, ["#/child/item", "#"]);
    });
    it("should collect events occuring on the same pointer", () => {
        const events = [];
        const b = new Bubbles();
        b.observe("#/child/item", (event) => events.push(cp(event.value)), false);
        b.notify("#/child/item", createValidationError({ id: 1 }));
        b.notify("#/child/item", createValidationError({ id: 2 }));
        assert.equal(events.length, 2);
        assert.equal(events[0].length, 1);
        assert.equal(events[1].length, 2);
    });
    it("should collect events occuring within parent-pointer", () => {
        const events = [];
        const b = new Bubbles();
        b.observe("#", (event) => events.push(cp(event.value)), true);
        b.notify("#/child/item", createValidationError({ id: 1 }));
        b.notify("#/child/item", createValidationError({ id: 2 }));
        b.notify("#/child", createValidationError({ id: 3 }));
        assert.equal(events.length, 3);
        assert.equal(events[0].length, 1);
        assert.equal(events[1].length, 2);
        assert.equal(events[2].length, 3, "should have collected events from all children");
    });
    it("should collect events occuring within parent-pointer and itself", () => {
        const events = [];
        const b = new Bubbles();
        b.observe("#/child", (event) => events.push(cp(event.value)), true);
        b.notify("#/child/item", createValidationError({ id: 1 }));
        b.notify("#/child/item", createValidationError({ id: 2 }));
        b.notify("#/child", createValidationError({ id: 3 }));
        assert.equal(events.length, 3);
        assert.equal(events[0].length, 1);
        assert.equal(events[1].length, 2);
        assert.equal(events[2].length, 3, "should have collected events from all children and itself");
    });
    // CLEAR pointer
    it("should clear events on pointer", () => {
        const targetEvents = [];
        const parentEvents = [];
        const b = new Bubbles();
        b.observe("#/parent/target", e => targetEvents.push(e.value));
        b.observe("#/parent", e => parentEvents.push(e.value), true);
        b.notify("#/parent/target", createValidationError({ id: 1 }));
        b.notify("#/parent", createValidationError({ id: 2 }));
        assert.deepEqual(targetEvents, [[{ id: 1 }]]);
        assert.deepEqual(parentEvents, [[{ id: 1 }], [{ id: 1 }, { id: 2 }]]);
        targetEvents.length = 0;
        parentEvents.length = 0;
        b.clearEvents("#/parent/target");
        assert.deepEqual(parentEvents, [[{ id: 2 }]], "should have notified parent with removed event");
        assert.deepEqual(targetEvents, [[]], "should have notified target with empty event-list");
    });
    it("should clear events of children", () => {
        const targetEvents = [];
        const parentEvents = [];
        const b = new Bubbles();
        b.observe("#/parent/target", e => targetEvents.push(e));
        b.observe("#/parent", e => parentEvents.push(e), true);
        b.notify("#/parent/target", createValidationError({ id: 1 }));
        b.notify("#/parent", createValidationError({ id: 2 }));
        targetEvents.length = 0;
        parentEvents.length = 0;
        b.clearEvents("#/parent");
        assert.deepEqual(parentEvents, [{ type: "validation:errors", value: [] }], "should have cleared target-events");
        assert.deepEqual(targetEvents, [{ type: "validation:errors", value: [] }], "should have cleared child-events");
    });
    it("should prevent naming collissions when clearing events of children", () => {
        const parentEvents = [];
        const b = new Bubbles();
        b.observe("#/parent/target2", e => parentEvents.push(e.value), true);
        b.notify("#/parent/target", createValidationError({ id: 1 }));
        b.notify("#/parent/target2", createValidationError({ id: 2 }));
        b.clearEvents("#/parent/target");
        assert.deepEqual(parentEvents, [[{ id: 2 }]], "should not have triggered observer on clearEvents");
    });
    // RESET
    it("should reset any collection", () => {
        const events = [];
        const b = new Bubbles();
        // ignore reset event (empty array)
        b.observe("#/child", (event) => event.value.length !== 0 && events.push(cp(event.value)), true);
        b.notify("#/child/item", createValidationError({ id: 1 }));
        b.notify("#/child/item", createValidationError({ id: 2 }));
        b.reset();
        b.notify("#/child", createValidationError({ id: 3 }));
        assert.equal(events[0].length, 1);
        assert.equal(events[1].length, 2);
        assert.equal(events[2].length, 1);
        assert.deepEqual(events[2][0], { id: 3 });
    });
    it("should notify observers on reset", () => {
        const events = [];
        const b = new Bubbles();
        b.observe("#/child", (event) => events.push(cp(event.value)), true);
        b.notify("#/child/item", createValidationError({ id: 1 }));
        b.reset();
        assert.equal(events.length, 2);
        assert.equal(events[0].length, 1);
        assert.equal(events[1].length, 0);
    });
    // test.only("should reset observers only within given pointer", () => {
    //     const first = [];
    //     const firstChild = [];
    //     const firstChildItem = [];
    //     const second = [];
    //     const b = new Bubbles();
    //     b.observe("#/first", (event) => first.push(cp(event)), true);
    //     b.observe("#/first/child", (event) => firstChild.push(cp(event)), true);
    //     b.observe("#/first/child/item", (event) => firstChildItem.push(cp(event)));
    //     b.observe("#/second", (event) => second.push(cp(event)), true);
    //     b.notify("#/first/child/item", { id: 1 });
    //     b.reset();
    //     console.log(JSON.stringify([first, firstChild, firstChildItem, second], null, 2));
    //     console.log(firstChildItem);
    //     assert.equal(first.length, 2);
    //     assert.equal(firstChild.length, 2);
    //     assert.equal(firstChildItem.length, 2);
    //     assert.equal(second.length, 0);
    // });
});
