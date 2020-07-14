import { strict as assert } from "assert";
import DataService from "../../../src/services/DataService";
import State from "../../../src/services/State";


describe("DataService/instances", () => {
    let state;
    let service;

    beforeEach(() => {
        state = new State();
        service = new DataService(state);
    });

    it("should not set data on other DataServices", () => {
        service.set("#", { title: "service1" });
        const service2 = new DataService(new State());
        service2.set("#", { title: "service2" });

        assert.equal(service.get("#/title"), "service1");
    });
});
