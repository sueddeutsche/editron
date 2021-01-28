/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import DataService from "../../../src/services/dataservice";
import State from "../../../src/store";
describe("DataService undo/redo", () => {
    let data;
    let state;
    let service;
    beforeEach(() => {
        data = { item: { id: "original" } };
        state = new State();
        service = new DataService(state);
        service.set("#", data);
    });
    it("should restore last state of data", () => {
        service.set("#/item/id", "modified");
        assert.equal(service.get("#/item/id"), "modified");
        service.undo();
        const result = service.get("#/item/id");
        assert.equal(result, "original");
    });
    it("should restore deleted value", () => {
        service.delete("#/item/id");
        assert.equal(service.get("#/item/id"), undefined);
        service.undo();
        const result = service.get("#/item/id");
        assert.equal(result, "original");
    });
    it("should redo previous undo step", () => {
        service.set("#/item/id", "modified");
        service.undo();
        assert.equal(service.get("#/item/id"), "original");
        service.redo();
        const result = service.get("#/item/id");
        assert.equal(result, "modified");
    });
    it("should prevent redo if a change has been made", () => {
        service.set("#/item/id", "modified");
        service.undo();
        service.set("#/item/id", "latest");
        assert.equal(service.get("#/item/id"), "latest");
        service.redo();
        const result = service.get("#/item/id");
        assert.equal(result, "latest");
    });
    it("should not update states from unknown actions", () => {
        const undoStepsBefore = state.get("data").past.length;
        state.dispatch.errors.set([14]);
        const undoStepsAfter = state.get("data").past.length;
        assert.equal(undoStepsBefore, undoStepsAfter);
    });
    it("should not update parent pointer for a single changed value", () => {
        let updatedRoot = false;
        let updatedParent = false;
        let updatedValue = false;
        service.set("#/item/id", "modified");
        service.observe("#", () => (updatedRoot = true));
        service.observe("#/item", () => (updatedParent = true));
        service.observe("#/item/id", () => (updatedValue = true));
        service.undo();
        assert.equal(updatedRoot, false);
        assert.equal(updatedParent, false, "parent pointer should not have been notified");
        assert.equal(updatedValue, true, "should have updated pointer at value");
    });
    it("should update parent pointer if data has been added", () => {
        let updatedRoot = false;
        let updatedParent = false;
        let updatedValue = false;
        service.set("#/item", [1, 2, 3, 4, 5]);
        service.set("#/item", [1, 2, 3, 4, 5, 6]);
        service.observe("#", () => (updatedRoot = true));
        service.observe("#/item", () => (updatedParent = true));
        service.observe("#/item/2", () => (updatedValue = true));
        service.undo();
        assert.equal(updatedRoot, false, "root pointer should not have been notified");
        assert.equal(updatedParent, true, "parent pointer should have been notified");
        assert.equal(updatedValue, false);
    });
    it("should update parent pointer if data has been removed", () => {
        let updatedRoot = false;
        let updatedParent = false;
        let updatedValue = false;
        service.set("#/item", [1, 2, 3, 4, 5]);
        service.set("#/item", [1, 2, 3, 5]);
        service.observe("#", () => (updatedRoot = true));
        service.observe("#/item", () => (updatedParent = true));
        service.observe("#/item/2", () => (updatedValue = true));
        service.undo();
        assert.equal(updatedRoot, false, "root pointer should not have been notified");
        assert.equal(updatedParent, true, "parent pointer should have been notified");
        assert.equal(updatedValue, false);
    });
});
