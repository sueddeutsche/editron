/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const test = require("ava").test;
const State = require("../../../services/State");
const ValidationService = require("../../../services/ValidationService");


let state;
let schema;
let service;

test.beforeEach(() => {
    state = new State();
    schema = {
        type: "object",
        properties: {
            title: { type: "string" },
            chapter: { type: "number", minimum: 1 },
            modules: {
                type: "array",
                items: { type: "string" }
            }
        }
    };
    service = new ValidationService(state, schema);
});


test("observe should notify error at pointer", (t) => {
    let called = false;
    service.observe("#/modules/0", () => (called = true));
    return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
        .then(() => t.is(called, true));
});

test("observe should not notify parents", (t) => {
    let called = false;
    service.observe("#/modules", () => (called = true));
    return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
        .then(() => t.is(called, false));
});


const BUBBLE_EVENTS = true;

test("observe bubble events should notify error at pointer", (t) => {
    let called = false;
    service.observe("#/modules/0", () => (called = true), BUBBLE_EVENTS);
    return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
        .then(() => t.is(called, true));
});

test("observe bubble events should notify all parents of error", (t) => {
    let called = false;
    service.observe("#/modules", () => (called = true), BUBBLE_EVENTS);
    return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
        .then(() => t.is(called, true));
});

test("observe bubble events should notify root of error", (t) => {
    let called = false;
    service.observe("#", () => (called = true), BUBBLE_EVENTS);
    return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
        .then(() => t.is(called, true));
});

test("observe bubble events should not notify observers on different tree", (t) => {
    let called = false;
    service.observe("#/test", () => (called = true), BUBBLE_EVENTS);
    return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
        .then(() => t.is(called, false));
});
