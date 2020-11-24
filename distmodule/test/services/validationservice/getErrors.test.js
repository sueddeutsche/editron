/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import State from "../../../src/store";
import ValidationService from "../../../src/services/ValidationService";
describe("ValidationService/getErrors", () => {
    let state;
    let schema;
    let service;
    beforeEach(() => {
        state = new State();
        schema = {
            type: "object",
            properties: {}
        };
        service = new ValidationService(state, schema);
        state.store.dispatch.errors.set([
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
        ]);
    });
    it("should return all errors", () => {
        const errors = service.getErrors();
        assert.equal(errors.length, 7);
    });
    it("should only return errors on root pointer", () => {
        const errors = service.getErrors("#");
        assert.equal(errors.length, 1);
        assert.equal(errors[0].data.pointer, "#");
    });
    it("should return empty list if no errors are set", () => {
        const errors = service.getErrors("#/story");
        assert.equal(errors.length, 0);
    });
    it("should only return errors on 'image' pointer", () => {
        const errors = service.getErrors("#/image");
        assert.equal(errors.length, 2);
        assert.equal(errors[0].data.pointer, "#/image");
        assert.equal(errors[0].data.pointer, "#/image");
    });
    it("should return all errors from '#/image'", () => {
        const errors = service.getErrors("#/image", true);
        assert.equal(errors.length, 4);
        assert.equal(errors[0].data.pointer, "#/image");
        assert.equal(errors[1].data.pointer, "#/image");
        assert.equal(errors[2].data.pointer, "#/image/url");
        assert.equal(errors[3].data.pointer, "#/image/caption");
    });
    it("should return all errors from '#/video'", () => {
        const errors = service.getErrors("#/video", true);
        assert.equal(errors.length, 2);
        assert.equal(errors[0].data.pointer, "#/video");
        assert.equal(errors[1].data.pointer, "#/video/url");
    });
    it("should return remaining errors after validation at `pointer`", () => {
        // errors are now validated per pointer only. a simple reset to an empty
        // list will not suffice, the errors must be filtered from validation-target
        const validator = new ValidationService(new State(), { type: "object", properties: {
                url: { type: "string", minLength: 1 },
                title: { type: "string", minLength: 1 }
            } });
        // pretest
        validator.validate({ url: "", title: "" });
        assert.equal(validator.getErrors().length, 2);
        validator.validate({ url: "", title: "mimi" }, "#/title");
        assert.equal(validator.getErrors().length, 1, "should modify error-collection by validation result");
        assert.equal(validator.getErrors()[0].data.pointer, "#/url", "should have removed correct error");
    });
});
