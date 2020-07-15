/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import DataService, { EventType } from "../../../src/services/DataService";
import State from "../../../src/services/State";
import isObject from "../../utils/isObject";


describe("DataService events", () => {
    let state;
    let service;

    beforeEach(() => {
        state = new State();
        service = new DataService(state);
    });


    it("should export events", () => {
        assert.ok(isObject(EventType));
        assert.ok(typeof EventType.BEFORE_UPDATE === "string");
    });

    it("should emit 'beforeUpdate' event before applying data changes", () => {
        let event;
        service.on(EventType.BEFORE_UPDATE, e => {
            e.idValue = service.get("#/id");
            event = e;
        });

        service.set("#", { id: "update" });

        assert.ok(isObject(event));
        assert.equal(event.idValue, undefined);
    });

    it("should emit 'beforeUpdate' event before removing data", () => {
        let event;
        service.set("#", { id: "original" });
        service.on(EventType.BEFORE_UPDATE, e => {
            e.idValue = service.get("#/id");
            event = e;
        });

        service.delete("#/id");

        assert.ok(isObject(event));
        assert.equal(event.idValue, "original");
    });

    it("should emit 'afterUpdate' event after applying data changes", () => {
        let event;
        service.on(EventType.AFTER_UPDATE, e => {
            e.idValue = service.get("#/id");
            event = e;
        });

        service.set("#", { id: "update" });

        assert.ok(isObject(event));
        assert.equal(event.idValue, "update");
    });

    it("should emit 'afterUpdate' event after removing data", () => {
        let event;
        service.set("#", { id: "original" });
        service.on(EventType.AFTER_UPDATE, e => {
            e.idValue = service.get("#/id");
            event = e;
        });

        service.delete("#/id");

        assert.ok(isObject(event));
        assert.equal(event.idValue, undefined);
    });

    it("should emit an event object like { pointer, parentPointer, action }", () => {
        let event;
        service.set("#", { id: "original" });
        service.on(EventType.BEFORE_UPDATE, e => {
            event = e;
        });

        service.set("#/id", { id: "update" });

        assert.ok(isObject(event));
        assert.equal(event.pointer, "#/id");
        assert.equal(event.parentPointer, "#");
    });
});
