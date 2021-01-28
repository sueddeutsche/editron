/* eslint no-new: 0, max-len: 0 */
import { strict as assert } from "assert";
import sinon from "sinon";
import gp from "gson-pointer";
import Controller from "../../src/Controller";
function copyPointerToLocation(controller, fromLocation, newLocation) {
    // copy current data to newLocation
    const rootData = controller.data().get();
    gp.set(rootData, newLocation, controller.data().get(fromLocation));
    controller.data().set("#", rootData);
    // copy current schema to newLocation
    const rootSchema = controller.schema().get();
    rootSchema.properties[newLocation] = controller.schema().get(fromLocation);
    controller.schema().setSchema(rootSchema);
}
/**
 * Perform basic editor tests
 *  - check if all required methods are defined
 *  - check if the editor did register to update data event
 *  - check if the editor did register to clear-errors and add-error events
 *  - unregistering events on destroy
 *  - calling controller.removeInstance on destroy
 *
 * ## Usage Example
 *  const ArrayEditor = require("../../../lib/editor/arrayeditor");
 *  const testEditor = require("../../support/utils/testEditorIntegration");
 *  testEditor(ArrayEditor, "#", require("../../support/schema.json"), require("../../support/data.json"));
 *
 * @param  {Function} Constructor   - Constructor function of Editor
 * @param  {String} pointer         - pointer to value for editor
 * @param  {Object} schema          - the json schema to use (root must be an object)
 * @param  {Object} data            - the data to use (root must be an object)
 * @param  {Object} options         - options to deactive tests: ignoreRegisterErrors
 */
export default function testEditorIntegration(Constructor, pointer, schema, data, options = { ignoreRegisterErrors: false }) {
    const id = Constructor.name;
    describe.skip(`${id} integration`, () => {
        let controller;
        beforeEach(() => {
            controller = new Controller(schema, data, { editors: [Constructor] });
            sinon.spy(controller.services.data, "observe");
            sinon.spy(controller.services.data, "removeObserver");
            sinon.spy(controller.services.validation, "observe");
            sinon.spy(controller.services.validation, "removeObserver");
            sinon.spy(controller.services.validation, "on");
            sinon.spy(controller.services.validation, "off");
        });
        afterEach(() => {
            controller.services.data.observe.restore();
            controller.services.data.removeObserver.restore();
            controller.services.validation.observe.restore();
            controller.services.validation.removeObserver.restore();
            controller.services.validation.on.restore();
            controller.services.validation.off.restore();
        });
        it("should expose api methods", () => {
            const editorInstance = new Constructor(pointer, controller);
            assert.ok(typeof editorInstance.getElement === "function", "should have a method 'getElement'");
            assert.ok(editorInstance.getElement() instanceof window.HTMLElement, "'getElement()' should return a HTML Node");
            assert.ok(typeof editorInstance.getPointer === "function", "should have a method 'getPointer'");
            assert.ok(typeof editorInstance.getPointer() === "string", "'getPointer()' should return the editors pointer");
            assert.ok(typeof editorInstance.updatePointer === "function", "should have a method 'updatePointer'");
            assert.ok(typeof editorInstance.destroy === "function", "should have a method 'destroy'");
        });
        it("should observe its own update event", () => {
            const observe = controller.data().observe;
            new Constructor(pointer, controller);
            assert.ok(observe.calledWith(pointer));
        });
        it("should remove its own update event on destroy", () => {
            const removeObserver = controller.data().removeObserver;
            const editor = new Constructor(pointer, controller);
            editor.destroy();
            assert.ok(removeObserver.calledWith(pointer));
        });
        // copy schema at pointer to new location, copy data at pointer to new location
        it("should update pointer", () => {
            const editor = new Constructor(pointer, controller);
            copyPointerToLocation(controller, pointer, "#/newLocation");
            editor.updatePointer("#/newLocation");
            assert.ok(editor.getPointer() === "#/newLocation");
        });
        it("should remove listener of old pointer on 'updatePointer()'", () => {
            const editor = new Constructor(pointer, controller);
            copyPointerToLocation(controller, pointer, "#/newLocation");
            controller.data().removeObserver.resetHistory();
            editor.updatePointer("#/newLocation");
            assert.ok(controller.data().removeObserver.calledWith(pointer));
        });
        it("should add listener for new pointer on 'updatePointer()'", () => {
            const editor = new Constructor(pointer, controller);
            copyPointerToLocation(controller, pointer, "#/newLocation");
            controller.data().observe.resetHistory();
            editor.updatePointer("#/newLocation");
            assert.ok(controller.data().observe.calledWith("#/newLocation"));
        });
        options.ignoreRegisterErrors !== true &&
            it("should observe its own error even", () => {
                const observe = controller.validationService.observe;
                new Constructor(pointer, controller);
                assert.ok(observe.calledWith(pointer));
            });
        options.ignoreRegisterErrors !== true &&
            it("should remove add-error-listener of old pointer on 'updatePointer()'", () => {
                const editor = new Constructor(pointer, controller);
                copyPointerToLocation(controller, pointer, "#/newLocation");
                controller.validator().removeObserver.resetHistory();
                editor.updatePointer("#/newLocation");
                assert.ok(controller.validator().removeObserver.calledWith(pointer));
            });
        options.ignoreRegisterErrors !== true &&
            it("should add add-error-listener of new pointer on 'updatePointer()'", () => {
                const editor = new Constructor(pointer, controller);
                copyPointerToLocation(controller, pointer, "#/newLocation");
                controller.validator().removeObserver.resetHistory();
                editor.updatePointer("#/newLocation");
                assert.ok(controller.validator().observe.calledWith("#/newLocation"));
            });
    });
}
;
