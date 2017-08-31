/* eslint max-len: false */
const test = require("ava").test;
const sinon = require("sinon");

const Controller = require("../Controller");
const editors = require("../editors");


test.beforeEach((t) => {
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
    const controller = new Controller(schema, data, editors);
    t.context.controller = controller;
});


test.skip("should be independent of other controllers", (t) => {
    const controller = t.context.controller;
    const controller2 = new Controller(controller.schema().get(), controller.data().get(), editors);

    controller2.data().set("#/list/0", { title: "new" });

    t.true(controller.data().get("#/list/0/title") === "first", "controllers should not share same data");
});

