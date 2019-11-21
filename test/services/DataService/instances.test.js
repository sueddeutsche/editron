const test = require("ava");
const DataService = require("../../../services/DataService");
const State = require("../../../services/State");


test.beforeEach((t) => {
    t.context.state = new State();
    t.context.service = new DataService(t.context.state);
});


test("should not set data on other DataServices", (t) => {
    const service = t.context.service;
    service.set("#", { title: "service1" });
    const service2 = new DataService(new State());
    service2.set("#", { title: "service2" });

    t.is(service.get("#/title"), "service1");
});
