import { strict as assert } from "assert";
import Controller from "../../src/Controller";
describe("Controller", () => {
    it("should be able to instantiate editron", () => {
        const editron = new Controller({
            type: "object",
            properties: {
                title: {
                    type: "string",
                    default: "default-title"
                }
            }
        });
        assert.ok(editron.service("data").get("#/title") === "default-title");
    });
    describe("dataService", () => {
        let controller;
        beforeEach(() => {
            const schema = {
                type: "object",
                properties: {
                    list: {
                        type: "array",
                        items: {
                            type: "object", properties: { title: { type: "string" } }
                        }
                    }
                }
            };
            const data = { list: [{ title: "first" }, { title: "second" }, { title: "third" }] };
            controller = new Controller(schema, data);
        });
        it("should have independent data services", () => {
            const controller2 = new Controller(controller.service("schema").get(), controller.service("data").get());
            controller2.service("data").set("#/list/0", { title: "new" });
            assert.equal(controller.service("data").get("#/list/0/title"), "first", "controllers should not share same data");
            assert.equal(controller2.service("data").get("#/list/0/title"), "new", "controllers should not share same data");
        });
    });
});
