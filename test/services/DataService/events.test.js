/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const test = require("ava");

const DataService = require("../../../services/DataService");
const State = require("../../../services/State");
const isObject = require("../../utils/isObject");


test.beforeEach((t) => {
    t.context.state = new State();
    t.context.service = new DataService(t.context.state);
});


test("should export events", (t) => {
    t.true(isObject(DataService.EVENTS));
    t.true(typeof DataService.EVENTS.BEFORE_UPDATE === "string");
});

test("should emit 'beforeUpdate' event before applying data changes", (t) => {
    const service = t.context.service;
    let event;
    service.on("beforeUpdate", (e) => {
        e.idValue = service.get("#/id");
        event = e;
    });

    service.set("#", { id: "update" });

    t.true(isObject(event));
    t.is(event.idValue, undefined);
});

test("should emit 'beforeUpdate' event before removing data", (t) => {
    const service = t.context.service;
    let event;
    service.set("#", { id: "original" });
    service.on("beforeUpdate", (e) => {
        e.idValue = service.get("#/id");
        event = e;
    });

    service.delete("#/id");

    t.true(isObject(event));
    t.is(event.idValue, "original");
});

test("should emit 'afterUpdate' event after applying data changes", (t) => {
    const service = t.context.service;
    let event;
    service.on("afterUpdate", (e) => {
        e.idValue = service.get("#/id");
        event = e;
    });

    service.set("#", { id: "update" });

    t.true(isObject(event));
    t.is(event.idValue, "update");
});

test("should emit 'afterUpdate' event after removing data", (t) => {
    const service = t.context.service;
    let event;
    service.set("#", { id: "original" });
    service.on("afterUpdate", (e) => {
        e.idValue = service.get("#/id");
        event = e;
    });

    service.delete("#/id");

    t.true(isObject(event));
    t.is(event.idValue, undefined);
});

test("should emit an event object like { pointer, parentPointer, action }", (t) => {
    const service = t.context.service;
    let event;
    service.set("#", { id: "original" });
    service.on("beforeUpdate", (e) => {
        event = e;
    });

    service.set("#/id", { id: "update" });

    t.true(isObject(event));
    t.is(event.pointer, "#/id");
    t.is(event.parentPointer, "#");
});
