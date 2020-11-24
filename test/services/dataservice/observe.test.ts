import { strict as assert } from "assert";
import DataService from "../../../src/services/dataservice";
import State from "../../../src/store";

const BUBBLE_EVENTS = true;


describe("ValidationService observe", () => {
    let state;
    let service;
    let data;

    beforeEach(() => {
        state = new State();
        service = new DataService(state);
        data = { item: { id: "original" }, other: { id: "other-item" } };
        service.set("#", data);
    });


    it("should notify of change at pointer", () => {
        let called = false;
        service.observe("#/item/id", () => (called = true));
        service.set("#/item/id", "modified");

        assert.equal(called, true);
    });

    it("should not notify parents", () => {
        let called = false;
        service.observe("#/item", () => (called = true));
        service.set("#/item/id", "modified");

        assert.equal(called, false);
    });

    it("should also send with type 'data:update' ", () => {
        let event;
        service.observe("#/item/id", e => (event = e));
        service.set("#/item/id", "modified");

        assert.equal(event.type, "data:update");
    });

    it("should notify all parents of change", () => {
        let called = false;
        service.observe("#/item", () => (called = true), BUBBLE_EVENTS);
        service.set("#/item/id", "modified");

        assert.equal(called, true);
    });

    it("should notify root of change", () => {
        let called = false;
        service.observe("#", () => (called = true), BUBBLE_EVENTS);
        service.set("#/item/id", "modified");

        assert.equal(called, true);
    });

    it("should not notify observers on different trees", () => {
        let called = false;
        service.observe("#/item", () => (called = true), BUBBLE_EVENTS);
        service.set("#/other/id", "modified");

        assert.equal(called, false);
    });

    it("should remove observer", () => {
        let called = false;
        const cb = () => (called = true);
        service.observe("#/item", cb, BUBBLE_EVENTS);
        service.removeObserver("#/item", cb);
        service.set("#/item/id", "modified");

        assert.equal(called, false);
    });
});
