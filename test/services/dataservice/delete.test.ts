/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import DataService from "../../../src/services/dataservice";
import State from "../../../src/store";


describe("DataService delete", () => {
    let state;
    let service;
    let data;

    beforeEach(() => {
        state = new State();
        service = new DataService(state);
        data = { item: { id: "original" }, root: true };
        service.set("#", data);
    });


    it("should remove value at given pointer", () => {
        service.delete("#/item/id");

        const result = service.get("#");
        assert.deepEqual(result, { item: {}, root: true });
    });

    it("should remove item at given pointer", () => {
        service.set("#/item", { list: [0, 1, 2, 3] });

        service.delete("#/item/list/2");

        const result = service.get("#/item/list");
        assert.deepEqual(result, [0, 1, 3]);
    });

    it("should throw when deleting root node", () => {
        assert.throws(() => service.delete("#"), Error);
    });
});
