/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import Controller from "../../src/Controller";
import LocationService from "../../src/services/LocationService";
import { MoveChange, DeleteChange } from "../../src/services/DataService";


describe.only("LocationService", () => {

    let service: LocationService;
    beforeEach(() => {
        service = new LocationService();
    });

    it("should store and retrieve current json-pointer", () => {

        service.setCurrent("#/page/container/value");
        const retrievedPointer = service.getCurrent();

        assert.equal("#/page/container/value", retrievedPointer);
    });

    it("should send focus-action on json-pointer change", () => {
        let events = [];
        service.watch(e => e.type === "focus" && events.push(e));

        service.setCurrent("#/page/container/value");
        service.setCurrent("#/page/value");

        assert.equal(events.length, 2);
        assert.equal(events[0].value, "#/page/container/value");
        assert.equal(events[1].value, "#/page/value");
    });

    it("should send blur-action, only if it matches focused json-pointer", () => {
        let events = [];
        service.setCurrent("#/page/container/value");
        service.watch(e => e.type === "blur" && events.push(e));

        service.blur("#/page/value");
        service.blur("#/page/container/value");

        assert.equal(events.length, 1);
        assert.equal(events[0].value, "#/page/container/value");
    });

    it("should send page-event and target-event", () => {
        let events = [];
        service.watch(e => (e.type === "location:target" || e.type === "location:page") && events.push(e));

        service.goto("#/page/container/value");

        assert.equal(events.length, 2);
        assert.deepEqual(events[0], { type: "location:page", value: "#/page" });
        assert.deepEqual(events[1], { type: "location:target", value: "#/page/container/value" });
    });

    it("should have page-fragment customizable", () => {
        let events = [];
        service.watch(e => (e.type === "location:target" || e.type === "location:page") && events.push(e));

        service.options.pagePattern = "^(#\/page\/container)";
        service.goto("#/page/container/value");

        assert.equal(events.length, 2);
        assert.deepEqual(events[0], { type: "location:page", value: "#/page/container" });
        assert.deepEqual(events[1], { type: "location:target", value: "#/page/container/value" });
    });
});
