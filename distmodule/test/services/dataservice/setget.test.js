/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import DataService from "../../../src/services/dataservice";
import State from "../../../src/store";
describe("DataService set/get", () => {
    let state;
    let service;
    beforeEach(() => {
        state = new State();
        service = new DataService(state);
    });
    it("should store given data", () => {
        service.set("#", { id: "storeme" });
        const data = service.get("#");
        assert.deepEqual(data, { id: "storeme" });
    });
    it("should return root object by default", () => {
        service.set("#", { id: "storeme" });
        const data = service.get();
        assert.deepEqual(data, { id: "storeme" });
    });
    it("should store copy of data", () => {
        const data = { item: { id: "original" } };
        service.set("#", data);
        data.item.id = "modified";
        assert.deepEqual(service.get("#"), { item: { id: "original" } });
    });
    it("should return copy of data", () => {
        service.set("#", { item: { id: "original" } });
        const data = service.get("#");
        data.item.id = "modified";
        assert.deepEqual(service.get("#"), { item: { id: "original" } });
    });
    it("should update nested value", () => {
        const data = { item: { id: "original", label: "" } };
        service.set("#", data);
        service.set("#/item/label", "modified");
        assert.deepEqual(service.get("#"), { item: { id: "original", label: "modified" } });
    });
    it("should return nested data", () => {
        const data = { item: { id: "original" } };
        service.set("#", data);
        const result = service.get("#/item/id");
        assert.equal(result, "original");
    });
    it("should throw if pointer has no parent value", () => {
        service.set("#", {});
        assert.throws(() => service.set("#/invalid/path", "will not be set"), Error);
    });
    it("should throw if pointer is undefined", () => {
        service.set("#", {});
        assert.throws(() => service.set("#/invalid", "will not be set"), Error);
    });
});
