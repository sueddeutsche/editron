/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import State from "../../../src/services/State";
import ValidationService from "../../../src/services/ValidationService";


describe("ValidationService/observe", () => {
    let state;
    let schema;
    let service;

    beforeEach(() => {
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


    it("observe should notify error at pointer", () => {
        let called = false;
        service.observe("#/modules/0", () => (called = true));
        return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
            .then(() => assert.equal(called, true));
    });

    it("observe should not notify parents", () => {
        let called = false;
        service.observe("#/modules", () => (called = true));
        return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
            .then(() => assert.equal(called, false));
    });


    const BUBBLE_EVENTS = true;

    it("observe bubble events should notify error at pointer", () => {
        let called = false;
        service.observe("#/modules/0", () => (called = true), BUBBLE_EVENTS);
        return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
            .then(() => assert.equal(called, true));
    });

    it("observe bubble events should notify all parents of error", () => {
        let called = false;
        service.observe("#/modules", () => (called = true), BUBBLE_EVENTS);
        return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
            .then(() => assert.equal(called, true));
    });

    it("observe bubble events should notify root of error", () => {
        let called = false;
        service.observe("#", () => (called = true), BUBBLE_EVENTS);
        return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
            .then(() => assert.equal(called, true));
    });

    it("observe bubble events should not notify observers on different tree", () => {
        let called = false;
        service.observe("#/test", () => (called = true), BUBBLE_EVENTS);
        return service.validate({ title: "test", chapter: 1, modules: [1, "two"] })
            .then(() => assert.equal(called, false));
    });
});
