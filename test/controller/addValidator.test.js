/* eslint max-len: 0 */
const test = require("ava");
const Controller = require("../../Controller");


test.beforeEach(t => {
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
    const controller = new Controller(schema, data);
    t.context.controller = controller;
});


test("should register validator for format", t => {
    const { controller } = t.context;

    controller.addFormatValidator("custom-format", (core, schema, value, pointer) => {
        if (value === "custom-format-error") {
            return { type: "error", code: "custom-format-error", data: { pointer } };
        }
        return undefined;
    });

    return controller.validator()
        .validate({ customFormat: "custom-format-error" })
        .then(result => {
            t.is(result.length, 1);
            t.is(result[0].type, "error");
            t.is(result[0].code, "custom-format-error");
        });
});

test("should register validator for attribute", t => {
    const { controller } = t.context;

    controller.addKeywordValidator("string", "custom", (core, schema, value, pointer) => {
        if (value === "custom-attribute-error") {
            return { type: "error", code: "custom-attribute-error", data: { pointer } };
        }
        return undefined;
    });

    return controller.validator()
        .validate({ customAttribute: "custom-attribute-error" })
        .then(result => {
            t.is(result.length, 1);
            t.is(result[0].type, "error");
            t.is(result[0].code, "custom-attribute-error");
        });
});
