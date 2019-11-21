/* global HTMLElement */
/* eslint no-new: 0, max-len: 0 */
const test = require("ava");
const sinon = require("sinon");
const gp = require("gson-pointer");

const Controller = require("../../Controller");


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
module.exports = function testEditorIntegration(Constructor, pointer, schema, data, options = {}) {
    const id = Constructor.name;

    test.beforeEach(t => {
        const controller = new Controller(schema, data, [Constructor]);
        sinon.spy(controller, "removeInstance");
        sinon.spy(controller, "changePointer");
        sinon.spy(controller.data(), "observe");
        sinon.spy(controller.data(), "removeObserver");
        sinon.spy(controller.validator(), "observe");
        sinon.spy(controller.validator(), "removeObserver");
        sinon.spy(controller.validator(), "on");
        sinon.spy(controller.validator(), "off");
        t.context.controller = controller;
    });

    test.afterEach(t => {
        const controller = t.context.controller;
        controller.removeInstance.restore();
        controller.changePointer.restore();
        controller.data().observe.restore();
        controller.data().removeObserver.restore();
        controller.validator().observe.restore();
        controller.validator().removeObserver.restore();
        controller.validator().on.restore();
        controller.validator().off.restore();
    });


    test(`${id} should expose api methods`, t => {
        const editorInstance = new Constructor(pointer, t.context.controller);

        t.true(typeof editorInstance.toElement === "function", "should have a method 'toElement'");
        t.true(editorInstance.toElement() instanceof HTMLElement, "'toElement()' should return a HTML Node");
        t.true(typeof editorInstance.getPointer === "function", "should have a method 'getPointer'");
        t.true(typeof editorInstance.getPointer() === "string", "'getPointer()' should return the editors pointer");
        t.true(typeof editorInstance.updatePointer === "function", "should have a method 'updatePointer'");
        t.true(typeof editorInstance.destroy === "function", "should have a method 'destroy'");
    });


    test(`${id} should observe its own update event`, t => {
        const controller = t.context.controller;
        const observe = controller.dataService.observe;
        new Constructor(pointer, controller);

        t.true(observe.calledWith(pointer));
    });


    test(`${id} should remove its own update event on destroy`, t => {
        const controller = t.context.controller;
        const removeObserver = controller.dataService.removeObserver;
        const editor = new Constructor(pointer, controller);
        editor.destroy();

        t.true(removeObserver.calledWith(pointer));
    });


    test(`${id} should call 'controller.removeInstance()' on 'destroy()'`, t => {
        const controller = t.context.controller;
        const editor = new Constructor(pointer, controller);
        editor.destroy();

        t.true(controller.removeInstance.calledWith(editor));
    });


    test(`${id} should have 'pointer' and 'element' defined when calling 'controller.removeInstance()'`, t => {
        const controller = t.context.controller;
        const editor = new Constructor(pointer, controller);
        const $element = editor.toElement();
        controller.removeInstance.restore();
        sinon.stub(controller, "removeInstance").callsFake(instance => {
            if (instance === editor) {

                t.true(instance.getPointer() === pointer, "should return correct pointer in 'controller.removeInstance()'");
                t.true(instance.toElement() === $element, "should return correct element in 'controller.removeInstance()'");
            }
        });

        editor.destroy();
    });


    // copy schema at pointer to new location, copy data at pointer to new location
    test(`${id} should update pointer`, t => {
        const controller = t.context.controller;
        const editor = new Constructor(pointer, controller);
        copyPointerToLocation(controller, pointer, "#/newLocation");

        editor.updatePointer("#/newLocation");

        t.true(editor.getPointer() === "#/newLocation");
    });


    test(`${id} should remove listener of old pointer on 'updatePointer()'`, t => {
        const controller = t.context.controller;
        const editor = new Constructor(pointer, controller);
        copyPointerToLocation(controller, pointer, "#/newLocation");
        controller.data().removeObserver.resetHistory();

        editor.updatePointer("#/newLocation");

        t.true(controller.data().removeObserver.calledWith(pointer));
    });


    test(`${id} should add listener for new pointer on 'updatePointer()'`, t => {
        const controller = t.context.controller;
        const editor = new Constructor(pointer, controller);
        copyPointerToLocation(controller, pointer, "#/newLocation");
        controller.data().observe.resetHistory();

        editor.updatePointer("#/newLocation");

        t.true(controller.data().observe.calledWith("#/newLocation"));
    });


    test(`${id} should notify controller of changed pointer on 'updatePointer()'`, t => {
        const controller = t.context.controller;
        const editor = new Constructor(pointer, controller);
        copyPointerToLocation(controller, pointer, "#/newLocation");

        editor.updatePointer("#/newLocation");

        t.true(controller.changePointer.calledWith("#/newLocation", editor));
    });


    test(`${id} should return old pointer when calling 'controller.changePointer()'`, t => {
        const controller = t.context.controller;
        const editor = new Constructor(pointer, controller);
        copyPointerToLocation(controller, pointer, "#/newLocation");
        controller.changePointer.restore();
        sinon.stub(controller, "changePointer").callsFake((newPointer, instance) => {
            if (instance === editor) {

                t.true(newPointer === "#/newLocation", "should call 'controller.changePointer()' with new pointer");
                t.true(instance.getPointer() === pointer, "should return current pointer on 'controller.changePointer()'");
            }
        });

        editor.updatePointer("#/newLocation");
    });


    options.ignoreRegisterErrors !== true &&
    test(`${id} should observe its own error event`, t => {
        const controller = t.context.controller;
        const observe = controller.validationService.observe;
        new Constructor(pointer, controller);

        t.true(observe.calledWith(pointer));
    });


    // options.ignoreRegisterErrors !== true &&
    // test(`${id} should register to clear errors event`, t => {
    //     const controller = t.context.controller;
    //     const on = controller.validationService.on;
    //     new Constructor(pointer, controller);

    //     t.true(on.calledWith(ValidationService.EVENTS.BEFORE_VALIDATION));
    //     t.true(on.callCount > 0); // there may be multiple editors instantiated
    // });


    // options.ignoreRegisterErrors !== true &&
    // test(`${id} should unregister error events on destroy`, t => {
    //     const controller = t.context.controller;
    //     const off = controller.validationService.off;
    //     const editor = new Constructor(pointer, controller);
    //     editor.destroy();

    //     t.true(off.calledWith(ValidationService.EVENTS.BEFORE_VALIDATION));
    //     t.true(off.callCount > 0); // there may be multiple editors instantiated
    // });


    options.ignoreRegisterErrors !== true &&
    test(`${id} should remove add-error-listener of old pointer on 'updatePointer()'`, t => {
        const controller = t.context.controller;
        const editor = new Constructor(pointer, controller);
        copyPointerToLocation(controller, pointer, "#/newLocation");
        controller.validator().removeObserver.resetHistory();

        editor.updatePointer("#/newLocation");

        t.true(controller.validator().removeObserver.calledWith(pointer));
    });


    options.ignoreRegisterErrors !== true &&
    test(`${id} should add add-error-listener of new pointer on 'updatePointer()'`, t => {
        const controller = t.context.controller;
        const editor = new Constructor(pointer, controller);
        copyPointerToLocation(controller, pointer, "#/newLocation");
        controller.validator().removeObserver.resetHistory();

        editor.updatePointer("#/newLocation");

        t.true(controller.validator().observe.calledWith("#/newLocation"));
    });
};


