/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import State from "../../../src/services/State";
import ValidationService from "../../../src/services/ValidationService";


describe("ValidationService/validate", () => {
    let state;
    let schema;
    let service;

    beforeEach(() => {
        state = new State();
        schema = {
            type: "object",
            properties: {
                title: { type: "string" },
                chapter: { type: "number", minimum: 1 },
                modules: {
                    type: "array",
                    items: { type: "string" }
                }
            }
        };
        service = new ValidationService(state, schema);
    });

    it("should store json schema", () => {
        const result = service.get();
        assert.deepEqual(result, schema);
    });

    it("should validate data by json schema", () => service
        .validate({ title: "test", chapter: 1, modules: [] })
        .then(errors => assert.equal(errors.length, 0))
    );

    it("should pass errors for invalid data", () => service
        .validate({ title: "test", chapter: 0, modules: [] })
        .then(errors => assert.equal(errors.length, 1))
    );
})
