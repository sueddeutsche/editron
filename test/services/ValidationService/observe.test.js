/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const test = require("ava");
const State = require("../../../services/State");
const ValidationService = require("../../../services/ValidationService");


test.beforeEach(t => {
    t.context.state = new State();
    t.context.schema = {
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
    t.context.service = new ValidationService(t.context.state, t.context.schema);
});


test("observe should notify error at pointer", t => {
    const { service } = t.context;
    let called = false;
    service.observe("#/modules/0", () => (called = true));
    return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
        .then(() => t.is(called, true));
});

test("observe should not notify parents", t => {
    const { service } = t.context;
    let called = false;
    service.observe("#/modules", () => (called = true));
    return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
        .then(() => t.is(called, false));
});


const BUBBLE_EVENTS = true;

test("observe bubble events should notify error at pointer", t => {
    const { service } = t.context;
    let called = false;
    service.observe("#/modules/0", () => (called = true), BUBBLE_EVENTS);
    return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
        .then(() => t.is(called, true));
});

test("observe bubble events should notify all parents of error", t => {
    const { service } = t.context;
    let called = false;
    service.observe("#/modules", () => (called = true), BUBBLE_EVENTS);
    return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
        .then(() => t.is(called, true));
});

test("observe bubble events should notify root of error", t => {
    const { service } = t.context;
    let called = false;
    service.observe("#", () => (called = true), BUBBLE_EVENTS);
    return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
        .then(() => t.is(called, true));
});

test("observe bubble events should not notify observers on different tree", t => {
    const { service } = t.context;
    let called = false;
    service.observe("#/test", () => (called = true), BUBBLE_EVENTS);
    return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
        .then(() => t.is(called, false));
});
