import { strict as assert } from "assert";
import Editron from "../../../src/Editron";
import UISchema from "../../../src/utils/UISchema";
describe("UISchema.getOption", () => {
    let controller;
    let schema;
    beforeEach(() => {
        schema = {
            type: "object",
            title: "title of object",
            description: "description of object",
            "editron:ui": {}
        };
        controller = new Editron(schema, {}, {});
    });
    // it("should return the options object if no option is given", () => {
    //     const result = UISchema.getOption("#", controller);
    //     // the schema is cloned and extended, thus retrieve the options via the schema service
    //     assert.ok(result === controller.schema().get("#")["editron:ui"]);
    // });
    it("should return 'null' for a invalid option", () => {
        const result = UISchema.getOption("#", controller, "mimimi");
        assert.ok(result === null);
    });
    it("should have option 'hidden' defined per default", () => {
        const result = UISchema.getOption("#", controller, "hidden");
        assert.ok(result === false);
    });
    it("should return value of option", () => {
        schema["editron:ui"].title = "title in options";
        controller.setSchema(schema);
        const result = UISchema.getOption("#", controller, "title");
        assert.ok(result === "title in options");
    });
    it("should return title schema property if option is undefined", () => {
        const result = UISchema.getOption("#", controller, "title");
        assert.ok(result === "title of object");
    });
    it("should return description schema property if option is undefined", () => {
        const result = UISchema.getOption("#", controller, "description");
        assert.ok(result === "description of object");
    });
    it("should return first matching option in list of possible properties", () => {
        const result = UISchema.getOption("#", controller, "invalid", "description", "title");
        assert.ok(result === "description of object");
    });
    it("should return value at pointer", () => {
        schema["editron:ui"].icon = "/icon";
        controller.setSchema(schema);
        controller.setData({ icon: "icon-value" });
        const result = UISchema.getOption("#", controller, "icon");
        assert.ok(result === "icon-value");
    });
    it("should return first matching option from options list", () => {
        schema["editron:ui"].icon = [undefined, "my-icon"];
        controller.setSchema(schema);
        const result = UISchema.getOption("#", controller, "invalid", "icon");
        assert.ok(result === "my-icon");
    });
    it("should return resolved pointer from options list", () => {
        schema["editron:ui"].icon = ["/icon", "my-icon"];
        controller.setSchema(schema);
        controller.setData({ icon: "icon-value" });
        const result = UISchema.getOption("#", controller, "icon");
        assert.ok(result === "icon-value");
    });
    it("should return fallback value if pointer does not match a value", () => {
        schema["editron:ui"].icon = ["/icon", "my-icon"];
        controller.setSchema(schema);
        const result = UISchema.getOption("#", controller, "icon");
        assert.ok(result === "my-icon");
    });
});
