/* eslint max-len: 0 */
import { strict as assert } from "assert";
import Editron from "../../src/Editron";
describe("Editron.addValidator", () => {
    let controller;
    beforeEach(() => {
        const schema = {
            type: "object",
            properties: {
                customFormat: {
                    format: "custom-format",
                    type: "string"
                },
                customAttribute: {
                    custom: "custom-attribute",
                    type: "string"
                }
            }
        };
        const data = { customFormat: "custom-fornat-value" };
        controller = new Editron(schema, data);
    });
    it("should register validator for format", () => {
        controller.addFormatValidator("custom-format", (core, schema, value, pointer) => {
            if (value === "custom-format-error") {
                return { type: "error", code: "custom-format-error", data: { pointer } };
            }
            return undefined;
        });
        return controller.service("validation")
            .validate({ customFormat: "custom-format-error" })
            .then(result => {
            assert.equal(result.length, 1);
            assert.equal(result[0].type, "error");
            assert.equal(result[0].code, "custom-format-error");
        });
    });
    it("should register validator for attribute", () => {
        controller.addKeywordValidator("string", "custom", (core, schema, value, pointer) => {
            if (value === "custom-attribute-error") {
                return { type: "error", code: "custom-attribute-error", data: { pointer } };
            }
            return undefined;
        });
        return controller.service("validation")
            .validate({ customAttribute: "custom-attribute-error" })
            .then(result => {
            assert.equal(result.length, 1);
            assert.equal(result[0].type, "error");
            assert.equal(result[0].code, "custom-attribute-error");
        });
    });
});
