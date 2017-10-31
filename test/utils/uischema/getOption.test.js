const { test } = require("ava");
const Controller = require("../../../Controller");
const UISchema = require("../../../utils/UISchema");


test.beforeEach((t) => {
    const schema = {
        type: "object",
        title: "title of object",
        description: "description of object",
        "editron:ui": {}
    };
    const controller = new Controller(schema, {}, []);
    Object.assign(t.context, {
        controller,
        schema
    });
});


// test("should return the options object if no option is given", (t) => {
//     const result = UISchema.getOption("#", t.context.controller);
//     // the schema is cloned and extended, thus retrieve the options via the schema service
//     t.true(result === t.context.controller.schema().get("#")["editron:ui"]);
// });

test("should return 'null' for a invalid option", (t) => {
    const result = UISchema.getOption("#", t.context.controller, "mimimi");

    t.true(result === null);
});

test("should have option 'hidden' defined per default", (t) => {
    const result = UISchema.getOption("#", t.context.controller, "hidden");

    t.true(result === false);
});

test("should return value of option", (t) => {
    t.context.schema["editron:ui"].title = "title in options";
    t.context.controller.setSchema(t.context.schema);
    const result = UISchema.getOption("#", t.context.controller, "title");

    t.true(result === "title in options");
});

test("should return title schema property if option is undefined", (t) => {
    const result = UISchema.getOption("#", t.context.controller, "title");

    t.true(result === "title of object");
});

test("should return description schema property if option is undefined", (t) => {
    const result = UISchema.getOption("#", t.context.controller, "description");

    t.true(result === "description of object");
});

test("should return first matching option in list of possible properties", (t) => {
    const result = UISchema.getOption("#", t.context.controller, "invalid", "description", "title");

    t.true(result === "description of object");
});

test("should return value at pointer", (t) => {
    t.context.schema["editron:ui"].icon = "/icon";
    t.context.controller.setSchema(t.context.schema);
    t.context.controller.setData({ icon: "icon-value" });
    const result = UISchema.getOption("#", t.context.controller, "icon");

    t.true(result === "icon-value");
});

test("should return first matching option from options list", (t) => {
    t.context.schema["editron:ui"].icon = [undefined, "my-icon"];
    t.context.controller.setSchema(t.context.schema);
    const result = UISchema.getOption("#", t.context.controller, "invalid", "icon");

    t.true(result === "my-icon");
});

test("should return resolved pointer from options list", (t) => {
    t.context.schema["editron:ui"].icon = ["/icon", "my-icon"];
    t.context.controller.setSchema(t.context.schema);
    t.context.controller.setData({ icon: "icon-value" });
    const result = UISchema.getOption("#", t.context.controller, "icon");

    t.true(result === "icon-value");
});

test("should return fallback value if pointer does not match a value", (t) => {
    t.context.schema["editron:ui"].icon = ["/icon", "my-icon"];
    t.context.controller.setSchema(t.context.schema);
    const result = UISchema.getOption("#", t.context.controller, "icon");

    t.true(result === "my-icon");
});

