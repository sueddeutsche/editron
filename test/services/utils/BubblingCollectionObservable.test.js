/* eslint arrow-parens: 0, func-style: 0, callback-return: 0 */
const test = require("ava");
const Bubbles = require("../../../services/utils/BubblingCollectionObservable");
const cp = v => JSON.parse(JSON.stringify(v));


// Bubbable
test("should notify observers", t => {
    let called = false;
    const b = new Bubbles();
    b.observe("#", () => (called = true));
    b.notify("#", []);

    t.is(called, true);
});

test("should remove observer", t => {
    let called = false;
    const b = new Bubbles();
    const cb = () => (called = true);
    b.observe("#", cb);
    b.removeObserver("#", cb);
    b.notify("#", []);

    t.is(called, false);
});

test("should notify observers along pointer", t => {
    const called = [];
    const b = new Bubbles();
    b.observe("#", () => called.push("#"), true);
    b.observe("#/child", () => called.push("#/child"), true);
    b.observe("#/child/item", () => called.push("#/child/item"), true);

    b.notify("#/child/item", []);

    t.deepEqual(called, ["#/child/item", "#/child", "#"]);
});

test("should not notify observers along pointer that listen to their location only", t => {
    const called = [];
    const b = new Bubbles();
    b.observe("#", () => called.push("#"), true);
    b.observe("#/child", () => called.push("#/child"), false);
    b.observe("#/child/item", () => called.push("#/child/item"), false);

    b.notify("#/child/item", []);

    t.deepEqual(called, ["#/child/item", "#"]);
});

test("should collect events occuring on the same pointer", t => {
    const events = [];
    const b = new Bubbles();
    b.observe("#/child/item", (event) => events.push(cp(event)), false);

    b.notify("#/child/item", { id: 1 });
    b.notify("#/child/item", { id: 2 });

    t.is(events.length, 2);
    t.is(events[0].length, 1);
    t.is(events[1].length, 2);
});

test("should collect events occuring within parent-pointer", t => {
    const events = [];
    const b = new Bubbles();
    b.observe("#", (event) => events.push(cp(event)), true);

    b.notify("#/child/item", { id: 1 });
    b.notify("#/child/item", { id: 2 });
    b.notify("#/child", { id: 3 });

    t.is(events.length, 3);
    t.is(events[0].length, 1);
    t.is(events[1].length, 2);
    t.is(events[2].length, 3, "should have collected events from all children");
});

test("should collect events occuring within parent-pointer and itself", t => {
    const events = [];
    const b = new Bubbles();
    b.observe("#/child", (event) => events.push(cp(event)), true);

    b.notify("#/child/item", { id: 1 });
    b.notify("#/child/item", { id: 2 });
    b.notify("#/child", { id: 3 });

    t.is(events.length, 3);
    t.is(events[0].length, 1);
    t.is(events[1].length, 2);
    t.is(events[2].length, 3, "should have collected events from all children and itself");
});

test("should reset any collection", t => {
    const events = [];
    const b = new Bubbles();
    // ignore reset event (empty array)
    b.observe("#/child", (event) => event.length !== 0 && events.push(cp(event)), true);

    b.notify("#/child/item", { id: 1 });
    b.notify("#/child/item", { id: 2 });
    b.reset();
    b.notify("#/child", { id: 3 });

    t.is(events[0].length, 1);
    t.is(events[1].length, 2);
    t.is(events[2].length, 1);
    t.deepEqual(events[2][0], { id: 3 });
});

test("should notify observers on reset", t => {
    const events = [];
    const b = new Bubbles();
    b.observe("#/child", (event) => events.push(cp(event)), true);
    b.notify("#/child/item", { id: 1 });
    b.reset();

    t.is(events.length, 2);
    t.is(events[0].length, 1);
    t.is(events[1].length, 0);
});

// test.only("should reset observers only within given pointer", t => {
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

//     t.is(first.length, 2);
//     t.is(firstChild.length, 2);
//     t.is(firstChildItem.length, 2);

//     t.is(second.length, 0);
// });


