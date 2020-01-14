/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const test = require("ava");
const State = require("../../../services/State");
const ValidationService = require("../../../services/ValidationService");
const ActionCreators = require("../../../services/reducers/actions").ActionCreators;

let state;
let schema;
let service;

test.beforeEach(() => {
    state = new State();
    schema = {
        type: "object",
        properties: {
        }
    };
    service = new ValidationService(state, schema);
    state.dispatch(ActionCreators.setErrors([
        {
            type: "error",
            message: "error 1",
            data: { id: "1", pointer: "#" }
        },
        {
            type: "error",
            message: "error 2",
            data: { id: "2", pointer: "#/image" }
        },
        {
            type: "error",
            message: "error 2'",
            data: { id: "2'", pointer: "#/image" }
        },
        {
            type: "error",
            message: "error 2a",
            data: { id: "2a", pointer: "#/image/url" }
        },
        {
            type: "error",
            message: "error 2b",
            data: { id: "2b", pointer: "#/image/caption" }
        },
        {
            type: "error",
            message: "error 3",
            data: { id: "3", pointer: "#/video" }
        },
        {
            type: "error",
            message: "error 3a",
            data: { id: "3a", pointer: "#/video/url" }
        }
    ]));
});


test("should return all errors", t => {
    const errors = service.getErrors();

    t.is(errors.length, 7);
});

test("should only return errors on root pointer", t => {
    const errors = service.getErrors("#");

    t.is(errors.length, 1);
    t.is(errors[0].data.pointer, "#");
});

test("should return empty list if no errors are set", t => {
    const errors = service.getErrors("#/story");

    t.is(errors.length, 0);
});

test("should only return errors on 'image' pointer", t => {
    const errors = service.getErrors("#/image");

    t.is(errors.length, 2);
    t.is(errors[0].data.pointer, "#/image");
    t.is(errors[0].data.pointer, "#/image");
});

test("should return all errors from '#/image'", t => {
    const errors = service.getErrors("#/image", true);

    t.is(errors.length, 4);
    t.is(errors[0].data.pointer, "#/image");
    t.is(errors[1].data.pointer, "#/image");
    t.is(errors[2].data.pointer, "#/image/url");
    t.is(errors[3].data.pointer, "#/image/caption");
});

test("should return all errors from '#/video'", t => {
    const errors = service.getErrors("#/video", true);

    t.is(errors.length, 2);
    t.is(errors[0].data.pointer, "#/video");
    t.is(errors[1].data.pointer, "#/video/url");
});

test("should return remaining errors after validation at `pointer`", t => {
    // errors are now validated per pointer only. a simple reset to an empty
    // list will not suffice, the errors must be filtered from validation-target
    const validator = new ValidationService(new State(), { type: "object", properties: {
        url: { type: "string", minLength: 1 },
        title: { type: "string", minLength: 1 }
    } });

    // pretest
    validator.validate({ url: "", title: "" });
    t.is(validator.getErrors().length, 2);

    validator.validate({ url: "", title: "mimi" }, "#/title");
    t.is(validator.getErrors().length, 1, "should modify error-collection by validation result");
    t.is(validator.getErrors()[0].data.pointer, "#/url", "should have removed correct error");
});
