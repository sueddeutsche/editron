/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const test = require("ava").test;
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


test("should return all errors", (t) => {
    const errors = service.getErrors();

    t.is(errors.length, 7);
});

test("should only return errors on root pointer", (t) => {
    const errors = service.getErrors("#");

    t.is(errors.length, 1);
    t.is(errors[0].data.pointer, "#");
});

test("should only return errors on 'image' pointer", (t) => {
    const errors = service.getErrors("#/image");

    t.is(errors.length, 2);
    t.is(errors[0].data.pointer, "#/image");
    t.is(errors[0].data.pointer, "#/image");
});

test("should return all errors from '#/image'", (t) => {
    const errors = service.getErrors("#/image", true);

    t.is(errors.length, 4);
    t.is(errors[0].data.pointer, "#/image");
    t.is(errors[1].data.pointer, "#/image");
    t.is(errors[2].data.pointer, "#/image/url");
    t.is(errors[3].data.pointer, "#/image/caption");
});

test("should return all errors from '#/video'", (t) => {
    const errors = service.getErrors("#/video", true);

    t.is(errors.length, 2);
    t.is(errors[0].data.pointer, "#/video");
    t.is(errors[1].data.pointer, "#/video/url");
});
