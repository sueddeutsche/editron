/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import Editron from "../../src/Editron";
import SyncPlugin from "../../src/plugin/syncplugin";


describe("SyncPlugin", () => {
    let schema;
    let data;
    let options;

    beforeEach(() => {
        options = { plugins: [ new SyncPlugin() ] };
        data = {
            source: { title: "abc", value: "123" },
            target: {}
        };
        schema = {
            type: "object",
            "editron:ui": {
                sync: {
                    mappingFromTo: {
                        "source/title": "target/description",
                        "source/value": "value"
                    }
                }
            },

            properties: {
                source: {
                    type: "object",
                    properties: {
                        title: { type: "string" },
                        value: { type: "string" }
                    }
                },
                target: {
                    type: "object",
                    properties: {
                        description: { type: "string" }
                    }
                },
                value: { type: "string" }
            }
        }
    });


    it("should use mapping to copy from source to target", () => {
        const controller = new Editron(schema, data, options);
        controller.createEditor("#", document.createElement("div"));

        const result = controller.getData();

        assert.equal(result.target.description, "abc");
        assert.equal(result.value, "123");
    });


    it("should not overwrite existing values", () => {
        data.value = "wont change";
        const controller = new Editron(schema, data, options);
        controller.createEditor("#", document.createElement("div"));

        const result = controller.getData();

        assert.equal(result.value, "wont change");
    });


    it("should watch changes on source-values and sync data", () => {
        const controller = new Editron(schema, data, options);
        controller.createEditor("#", document.createElement("div"));

        controller.service("data").set("#/source", { title: "update-title", value: "update-value" })
        const result = controller.getData();

        assert.equal(result.target.description, "update-title");
        assert.equal(result.value, "update-value");
    });


    it("should overwrite values when they are equal", () => {
        data.value = "will change";
        data.source.value = "will change";
        const controller = new Editron(schema, data, options);
        controller.createEditor("#", document.createElement("div"));

        controller.service("data").set("#/source", { value: "update-value" })
        const result = controller.getData();

        assert.equal(result.value, "update-value");
    });
});
