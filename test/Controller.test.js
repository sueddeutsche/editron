/* eslint max-len: 0 */
const test = require("ava");

const Controller = require("../Controller");


test.beforeEach(t => {
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
    const controller = new Controller(schema, data);
    t.context.controller = controller;
});


test("should have independent data services", t => {
    const controller = t.context.controller;
    const controller2 = new Controller(controller.schema().get(), controller.data().get());

    controller2.data().set("#/list/0", { title: "new" });

    t.true(controller.data().get("#/list/0/title") === "first", "controllers should not share same data");
    t.true(controller2.data().get("#/list/0/title") === "new", "controllers should not share same data");
});

