function getTypeClass(schema) {
    return schema.type === "array" || schema.type === "object" ? schema.type : "value";
}


/**
 * This is an optional base class for a custom editor. Inheriting from AbstractEditor will setup most required
 * editor-methods to work by default, while still allowing custom implementations. Most of all, it removes
 * the tedious and redundant controller/serivce/pointer bootstraping.
 *
 * Still required is
 *      1. a custom `static editorOf(p, c, o)`-method, to register on a schema
 *      2. an `update(patch)`-method to respond to changes of the data at _pointer_
 *      3. a custom `updatePointer(newPointer)`-method to respond to changes in the location of the editor. Most of
 *          times, the pointer will be used in rendering and/or when creating child-editors. Dont forget to call
 *          `super.updatePointer(newPointer)`
 *
 * and optionally an `updateErrors(errors)`-method to handle new (or removed) errors.
 *
 * Convenience methods are
 *      - `getData()` to fetch the associated data of the current _pointer_
 *      - `setData(newValue)` to update the associated data of the current _pointer_
 *      - `getSchema()` returning the json-schema of the current _pointer_
 *      - `getErrors()` returning a list of current errors
 *      - `toElement()` gives you the root dom-node for this editor (aka render target)
 *      - `focus()` and `blur()` to manage the selection state of the current input (requires correct placement of _id_)
 */
class AbstractEditor {

    static editorOf(pointer, controller, options) { // eslint-disable-line
        throw new Error("Missing editorOf-method in custom editor");
    }

    constructor(pointer, controller, options) {
        this.pointer = pointer;
        this.controller = controller;
        this.options = options;
        this.errors = [];
        this.dom = this.controller.createElement(`.editron-container.editron-container--${getTypeClass(this.getSchema())}`);
        this.update = controller.data().observe(pointer, this.update.bind(this), options.notifyNestedChanges === true);
        this._addError = controller.validator().observe(pointer, this._addError.bind(this), options.notifyNestedErrors === true);
        this._clearErrors = controller.validator().on("beforeValidation", this._clearErrors.bind(this));
    }

    update() {
        throw new Error("Missing implemented of method 'update' in custom editor");
    }

    updatePointer(newPointer) {
        const oldPointer = this.pointer;

        this.controller.data().removeObserver(oldPointer, this.update);
        this.controller.validator().removeObserver(oldPointer, this._addError);

        this.pointer = newPointer;

        this.controller.data().observe(newPointer, this.update, this.options.notifyNestedChanges === true);
        this._addError = this.controller.validator().observe(newPointer, this._addError);

        return [newPointer, oldPointer];
    }

    getData() {
        return this.controller.data().get(this.pointer);
    }

    setData(data) {
        return this.controller.data().set(this.pointer, data);
    }

    getErrors() {
        return this.errors;
    }

    getSchema() {
        return this.controller.schema().get(this.pointer);
    }

    getPointer() {
        return this.pointer;
    }

    focus() {
        this.controller.location().setCurrent(this.pointer);
    }

    blur() {
        this.controller.location().blur(this.pointer);
    }

    toElement() {
        return this.dom;
    }

    destroy() {
        this.controller.removeEditor(this);
        this.controller.data().removeObserver(this.pointer, this.update);
        this.controller.validator().removeObserver(this.pointer, this._addError);
        this.controller.validator().off("beforeValidation", this._clearErrors);
        this.dom.parentNode && this.dom.parentNode.removeChild(this.dom);
    }

    _notifyErrors() {
        if (this.updateErrors) {
            this.updateErrors(this.errors);
        }
    }

    _clearErrors() {
        if (this.errors.length > 0) {
            this.errors.length = 0;
            this._notifyErrors();
        }
    }

    _addError(error) {
        this.errors.push(error);
        this._notifyErrors();
    }
}


module.exports = AbstractEditor;
