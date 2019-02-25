/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const test = require("ava").test;
const State = require("../../../services/State");
const ValidationService = require("../../../services/ValidationService");
const isObject = require("../../utils/isObject");


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


test("events should export events", (t) => {
    t.true(isObject(ValidationService.EVENTS));
    t.true(typeof ValidationService.EVENTS.BEFORE_VALIDATION === "string");
});

test("events should emit 'beforeValidation' event before starting validation", (t) => {
    let called = false;
    service.on("beforeValidation", () => (called = true));

    service.validate({ title: "test", chapter: 1, modules: [] });

    t.is(called, true);
});

test("events should emit 'afterValidation' event after notifying observers", (t) => {
    let called = false;
    service.observe("#/chapter", () => (called = true));

    service.on("afterValidation", () => t.is(called, true));

    return service.validate({ title: "test", chapter: 0, modules: [] });
});
