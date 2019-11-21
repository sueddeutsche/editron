/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const test = require("ava");
const State = require("../../../services/State");
const ValidationService = require("../../../services/ValidationService");


let state;
let schema;
let service;

test.beforeEach(() => {
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

test("should store json schema", t => {
    const result = service.get();
    t.deepEqual(result, schema);
});

test("should validate data by json schema", t => service
    .validate({ title: "test", chapter: 1, modules: [] })
        .then(errors => t.is(errors.length, 0))
);

test("should pass errors for invalid data", t => service
    .validate({ title: "test", chapter: 0, modules: [] })
        .then(errors => t.is(errors.length, 1))
);
