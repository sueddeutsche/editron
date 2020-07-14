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

    describe(`${id} integration`, () => {
        let controller;

        beforeEach(() => {
            controller = new Controller(schema, data, { editors: [Constructor] });
            sinon.spy(controller, "removeInstance");
            sinon.spy(controller, "changePointer");
            sinon.spy(controller.data(), "observe");
            sinon.spy(controller.data(), "removeObserver");
            sinon.spy(controller.validator(), "observe");
            sinon.spy(controller.validator(), "removeObserver");
            sinon.spy(controller.validator(), "on");
            sinon.spy(controller.validator(), "off");
        });

        afterEach(() => {
            controller.removeInstance.restore();
            controller.changePointer.restore();
            controller.data().observe.restore();
            controller.data().removeObserver.restore();
            controller.validator().observe.restore();
            controller.validator().removeObserver.restore();
            controller.validator().on.restore();
            controller.validator().off.restore();
        });

        it("should expose api methods", () => {
            const editorInstance = new Constructor(pointer, controller);

            assert.ok(typeof editorInstance.toElement === "function", "should have a method 'toElement'");
            assert.ok(editorInstance.toElement() instanceof window.HTMLElement, "'toElement()' should return a HTML Node");
            assert.ok(typeof editorInstance.getPointer === "function", "should have a method 'getPointer'");
            assert.ok(typeof editorInstance.getPointer() === "string", "'getPointer()' should return the editors pointer");
            assert.ok(typeof editorInstance.updatePointer === "function", "should have a method 'updatePointer'");
            assert.ok(typeof editorInstance.destroy === "function", "should have a method 'destroy'");
        });


        it("should observe its own update event", () => {
            const observe = controller.dataService.observe;
            new Constructor(pointer, controller);

            assert.ok(observe.calledWith(pointer));
        });


        it("should remove its own update event on destroy", () => {
            const removeObserver = controller.dataService.removeObserver;
            const editor = new Constructor(pointer, controller);
            editor.destroy();

            assert.ok(removeObserver.calledWith(pointer));
        });


        it("should call 'controller.removeInstance()' on 'destroy()'", () => {
            const editor = new Constructor(pointer, controller);
            editor.destroy();

            assert.ok(controller.removeInstance.calledWith(editor));
        });


        it("should have 'pointer' and 'element' defined when calling 'controller.removeInstance()'", () => {
            const editor = new Constructor(pointer, controller);
            const $element = editor.toElement();
            controller.removeInstance.restore();
            sinon.stub(controller, "removeInstance").callsFake(instance => {
                if (instance === editor) {

                    assert.ok(instance.getPointer() === pointer, "should return correct pointer in 'controller.removeInstance()'");
                    assert.ok(instance.toElement() === $element, "should return correct element in 'controller.removeInstance()'");
                }
            });

            editor.destroy();
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


        it("should notify controller of changed pointer on 'updatePointer()'", () => {
            const editor = new Constructor(pointer, controller);
            copyPointerToLocation(controller, pointer, "#/newLocation");

            editor.updatePointer("#/newLocation");

            assert.ok(controller.changePointer.calledWith("#/newLocation", editor));
        });


        it("should return old pointer when calling 'controller.changePointer()'", () => {
            const editor = new Constructor(pointer, controller);
            copyPointerToLocation(controller, pointer, "#/newLocation");
            controller.changePointer.restore();
            sinon.stub(controller, "changePointer").callsFake((newPointer, instance) => {
                if (instance === editor) {

                    assert.ok(newPointer === "#/newLocation", "should call 'controller.changePointer()' with new pointer");
                    assert.ok(instance.getPointer() === pointer, "should return current pointer on 'controller.changePointer()'");
                }
            });

            editor.updatePointer("#/newLocation");
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

        // options.ignoreRegisterErrors !== true &&
        // it("should register to clear errors event", () => {

        //     const on = controller.validationService.on;
        //     new Constructor(pointer, controller);

        //     assert.ok(on.calledWith(ValidationService.EVENTS.BEFORE_VALIDATION));
        //     assert.ok(on.callCount > 0); // there may be multiple editors instantiated
        // });


        // options.ignoreRegisterErrors !== true &&
        // it("should unregister error events on destroy", () => {

        //     const off = controller.validationService.off;
        //     const editor = new Constructor(pointer, controller);
        //     editor.destroy();

        //     assert.ok(off.calledWith(ValidationService.EVENTS.BEFORE_VALIDATION));
        //     assert.ok(off.callCount > 0); // there may be multiple editors instantiated
        // });
    });
};


