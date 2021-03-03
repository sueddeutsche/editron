export function getTypeClass(schema) {
    return schema.type === "array" || schema.type === "object" ? schema.type : "value";
}
/**
 * This is an optional base class for a custom editor. Inheriting from AbstractEditor will setup most required
 * editor-methods to work by default, while still allowing custom implementations. Most of all, it removes
 * the tedious and redundant editron/serivce/pointer bootstraping.
 *
 * Still required is
 *
 *      1. a custom `static editorOf(p, c, o)`-method, to register on a schema
 *      2. an `update(event)`-method to respond to changes
 *
 * Convenience methods are
 *
 *      - `getData()` to fetch the associated data of the current _pointer_
 *      - `setData(newValue)` to update the associated data of the current _pointer_
 *      - `getSchema()` returning the json-schema of the current _pointer_
 *      - `getErrors()` returning a list of current errors
 *      - `getElement()` gives you the root dom-node for this editor (aka render target)
 *      - `focus()` and `blur()` to manage the selection state of the current input (requires correct placement of _id_)
 *
 * @param pointer - pointer referencing the current data and schema
 * @param editron - editron instance
 * @param options - resolved options object
 */
export default class AbstractEditor {
    constructor(pointer, editron, options) {
        this.pointer = pointer;
        this.editron = editron;
        this.options = options;
        const schema = this.getSchema();
        this.dom = this.editron
            .createElement(`.ed-${getTypeClass(schema)}`, options.attrs);
        if (schema.format) {
            this.dom.classList.add(`ed-${getTypeClass(schema)}--${schema.format}`);
        }
    }
    static editorOf(pointer, editron, options) {
        throw new Error("Missing editorOf-method in custom editor");
    }
    update(event) {
        throw new Error("Missing implementation of method 'update' in custom editor");
    }
    getData() {
        return this.editron.service("data").get(this.pointer);
    }
    setData(data) {
        return this.editron.service("data").set(this.pointer, data);
    }
    getErrors() {
        return this.editron.service("validation").getErrorsAndWarnings(this.pointer);
    }
    getSchema() {
        return this.editron.service("schema").get(this.pointer);
    }
    getPointer() {
        return this.pointer;
    }
    getElement() {
        return this.dom;
    }
    focus() {
        this.editron.service("location").setCurrent(this.pointer);
    }
    blur() {
        this.editron.service("location").blur(this.pointer);
    }
    destroy() {
        throw new Error("Missing implementation of method 'destroy' in custom editor");
    }
}
