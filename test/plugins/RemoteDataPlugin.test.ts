/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import Editron from "../../src/Editron";
import RemoteDataPlugin from "../../src/plugin/remotedataplugin";


const pause = async (time = 0) => new Promise(resolve => setTimeout(resolve, time));


describe("RemoteDataPlugin", () => {
    let options;
    let handler;
    let schema;
    let data;
    let response;

    beforeEach(() => {
        schema = {
            type: "object",
            "editron:ui": {
                remoteData: {
                    requestParam: "https://domain/{{type}}/{{id}}",
                    requestParamValues: "/source",
                    responseMapping: {
                        "remoteValue": "/result/remoteValue",
                        "remoteObject": "/result/remoteObject"
                    }
                }
            },
            properties: {
                source: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                        type: { type: "string" }
                    }
                },
                result: {
                    type: "object",
                    properties: {
                        remoteValue: { type: "string" },
                        remoteObject: {
                            type: "object",
                            properties: {
                                label: { type: "string" }
                            }
                        }
                    }
                }
            }
        };
        data = { source: { id: "123", type: "article" } };
        response = { remoteValue: "remoteValue", remoteObject: { response: 123 } };
        handler = {
            use: ({ source }) => true,
            json: ({ source }) => Promise.resolve(response),
            custom: ({ source }) => Promise.resolve(response)
        };
        options = {
            proxy: {
                handlers: [ handler ]
            },
            plugins: [
                new RemoteDataPlugin()
            ]
        };
    });


    it("should call 'json'-handler per default", async () => {
        let called = false;
        handler.json = () => (called = true) && Promise.resolve(response); // `called` is set sync!

        const controller = new Editron(schema, data, options);

        assert.ok(called, "should have called 'json'-handler");
    });


    it("should call 'custom'-handler set by option", async () => {
        schema["editron:ui"].remoteData.proxyMethod = "custom";
        let called = false;
        handler.custom = () => (called = true) && Promise.resolve(response); // `called` is set sync!

        const controller = new Editron(schema, data, options);

        assert.ok(called, "should have called 'custom'-handler");
    });


    it("should replace 'requestParam'-variables with 'requestParamValues'-values", async () => {
        schema["editron:ui"].remoteData.requestParam = "http://content/{{type}}/{{id}}";
        schema["editron:ui"].remoteData.requestParamValues = "/source";

        let requestParam;
        handler.json = ({ source }) => (requestParam = source) && Promise.resolve(response); // `called` is set sync!

        const controller = new Editron(schema, { source: { type: "image", id: "hash4" }}, options);

        assert.equal(requestParam, "http://content/image/hash4");
    });


    it("should use 'responseMapping' to update data", async () => {
        let requestUrl;

        const responseData = { description: "123", data: { title: "abc" } };
        schema["editron:ui"].remoteData.responseMapping = {
            "#/description": "result/remoteObject/label",
            "#/data/title": "result/remoteValue"
        }

        handler.json = ({ source }) => (requestUrl = source) && Promise.resolve(responseData);
        const controller = new Editron(schema, data, options);

        await pause(1);
        const finalData = controller.getData();

        assert.equal(finalData.result.remoteObject.label, "123");
        assert.equal(finalData.result.remoteValue, "abc");
    });


    it("should not overwrite existing data", async () => {
        let requestUrl;
        const responseData = { data: { title: "abc" } };
        schema["editron:ui"].remoteData.responseMapping = { "#/data/title": "result/remoteValue" };
        data.result = { remoteValue: "initial string" };
        handler.json = ({ source }) => (requestUrl = source) && Promise.resolve(responseData);

        const controller = new Editron(schema, data, options);
        const finalData = controller.getData();

        assert.equal(finalData.result.remoteValue, "initial string");
    });


    it("should overwrite existing data with option 'overwrite'", async () => {
        let requestUrl;
        const responseData = { data: { title: "abc" } };
        schema["editron:ui"].remoteData.overwrite = true;
        schema["editron:ui"].remoteData.responseMapping = { "#/data/title": "result/remoteValue" };
        data.result = { remoteValue: "initial string" };
        handler.json = ({ source }) => (requestUrl = source) && Promise.resolve(responseData);

        const controller = new Editron(schema, data, options);
        await pause(1);
        const finalData = controller.getData();

        assert.equal(finalData.result.remoteValue, "abc");
    });

    it("should watch 'requestParamValues' and update data on change", async () => {
        schema["editron:ui"].remoteData.overwrite = true;

        const responses = [
            { remoteValue: "second response", remoteObject: { response: 2 } },
            { remoteValue: "first response", remoteObject: { response: 1 } }
        ]
        handler.json = ({ source }) => Promise.resolve(responses.pop());

        const controller = new Editron(schema, data, options);
        await pause(1);

        controller.service("data").set("#/source/id", "abc");
        await pause(1);

        const finalData = controller.getData();

        assert.equal(finalData.result.remoteValue, "second response");
    });
});
