/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import DataService from "../../../src/services/DataService";
import State from "../../../src/store";
import isObject from "../../utils/isObject";


describe("DataService watch", () => {
    let state;
    let service;

    beforeEach(() => {
        state = new State();
        service = new DataService(state);
    });

    it("should send action 'data:update:before', before applying data changes", () => {
        let event;
        service.watch(e => {
            if (e.type === "data:update:before") {
                e.idValue = service.get("#/id");
                event = e
            }
        });

        service.set("#", { id: "update" });

        assert.ok(isObject(event));
        assert.equal(event.idValue, undefined);
    });

    it("should send action-object like { type, value }", () => {
        let event;
        service.set("#", { id: "original" });
        service.watch(e => (event = e));

        service.set("#/id", { id: "update" });

        assert.ok(isObject(event));
        assert.equal(typeof event.type, "string");
        assert.ok(event.value != null);
    });

    it("should send action 'data:update:before', before removing data", () => {
        let event;
        service.set("#", { id: "original" });
        service.watch(e => {
            if (e.type === "data:update:before") {
                e.idValue = service.get("#/id");
                event = e
            }
        });

        service.delete("#/id");

        assert.ok(isObject(event));
        assert.equal(event.idValue, "original");
    });

    it("should send action 'data:update:after', on data change", () => {
        let event;
        service.watch(e => {
            if (e.type === "data:update:after") {
                e.idValue = service.get("#/id");
                event = e;
            }
        });

        service.set("#", { id: "update" });

        assert.ok(isObject(event));
        assert.equal(event.idValue, "update");
    });

    it("should send action 'data:update:after', on data removal", () => {
        let event;
        service.set("#", { id: "original" });
        service.watch(e => {
            if (e.type === "data:update:after") {
                e.idValue = service.get("#/id");
                event = e;
            }
        });

        service.delete("#/id");

        assert.ok(isObject(event));
        assert.equal(event.idValue, undefined);
    });

    it("should send action 'data:update:after' for each change", () => {
        const events = [];
        service.set("#", { id: "original", title: "test" });
        service.watch(e => {
            if (e.type === "data:update:after") {
                events.push(e);
            }
        });

        service.set("#", { id: "trigger", title: "trigger" });

        assert.equal(events.length, 2);
        assert.equal(events[0].value.pointer, "#/id");
        assert.equal(events[1].value.pointer, "#/title");
    });

    it("should send action 'data:update:container' for removed object property", () => {
        let event;
        service.set("#", { id: "original", title: "test" });
        service.watch(e => {
            if (e.type === "data:update:container") {
                event = e;
            }
        });

        service.set("#", { id: "original" });

        assert.ok(isObject(event));
    });

    it("should send action 'data:update:container' for reordered array items", () => {
        let event;
        service.set("#", { list: [1, 2] });
        service.watch(e => {
            if (e.type === "data:update:container") {
                event = e;
            }
        });

        service.set("#", { list: [2, 1] });

        assert.ok(isObject(event));
    });

    it("should send action 'data:update:container' before action 'data:update:after'", () => {
        let events = [];
        service.set("#", { list: [1, 2] });
        service.watch(e => {
            if (e.type === "data:update:container" || e.type === "data:update:after") {
                events.push(e);
            }
        });

        service.set("#", { list: [2, 1] });

        assert.equal(events.length, 2);
        assert.equal(events[0].type, "data:update:container");
        assert.equal(events[1].type, "data:update:after");
    });

    it("should send action 'data:update:done' after all changes have been applied", () => {
        const events = [];
        service.set("#", { id: "original", title: "test" });
        service.watch(e => events.push(e));

        service.set("#", { id: "trigger", title: "trigger" });

        assert.equal(events.length, 4);
        assert.equal(events[3].type, "data:update:done");
    });
});
