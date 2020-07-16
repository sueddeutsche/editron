/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import State from "../../../src/services/State";
import ValidationService, { EventType } from "../../../src/services/ValidationService";
import isObject from "../../utils/isObject";


describe("ValidationService/emit", () => {
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


    it("events should export events", () => {
        assert.ok(isObject(EventType));
        assert.ok(typeof EventType.BEFORE_VALIDATION === "string");
    });

    it("events should emit 'beforeValidation' event before starting validation", () => {
        let called = false;
        service.on("beforeValidation", () => (called = true));

        service.validate({ title: "test", chapter: 1, modules: [] });

        assert.equal(called, true);
    });

    it("events should emit 'afterValidation' event after notifying observers", () => {
        let called = false;
        service.observe("#/chapter", () => (called = true));

        service.on("afterValidation", () => assert.equal(called, true));

        return service.validate({ title: "test", chapter: 0, modules: [] });
    });
});

