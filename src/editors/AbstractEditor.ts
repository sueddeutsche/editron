import { JSONData, JSONPointer, JSONSchema, ValidationError } from "../types";
import Controller from "../Controller";
import { Editor, EditorUpdateEvent } from "./Editor";
import { Observer } from "../services/ValidationService";


function getTypeClass(schema: JSONSchema): string {
    return schema.type === "array" || schema.type === "object" ? schema.type : "value"
}


export type Options = {
    /** set to true, to receive errors from current location and all erorrs of child properties/items */
    notifyNestedChanges?: boolean;
    /** set to true, to receive update from current location and all child properties/items changes */
    notifyNestedErrors?: boolean;
    /** HTMLDom attributes of root element (e.g. className, data-content, etc) */
    attrs?: { [p:string]: any };
}


/**
 * This is an optional base class for a custom editor. Inheriting from AbstractEditor will setup most required
 * editor-methods to work by default, while still allowing custom implementations. Most of all, it removes
 * the tedious and redundant controller/serivce/pointer bootstraping.
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
 * @param controller - editron controller instance
 * @param options - resolved options object
 */
export default class AbstractEditor implements Editor {
    pointer: JSONPointer;
    controller: Controller;
    options: Options;
    dom: HTMLElement;

    static editorOf(pointer: JSONPointer, controller: Controller, options?) { // eslint-disable-line
        throw new Error("Missing editorOf-method in custom editor");
    }

    constructor(pointer: JSONPointer, controller: Controller, options) {
        this.pointer = pointer;
        this.controller = controller;
        this.options = options;
        this.dom = this.controller
            .createElement(`.editron-container.editron-container--${getTypeClass(this.getSchema())}`, options.attrs);
    }

    update(event: EditorUpdateEvent) {
        throw new Error("Missing implementation of method 'update' in custom editor");
    }

    getData(): any {
        return this.controller.service("data").get(this.pointer);
    }

    setData(data: JSONData) {
        return this.controller.service("data").set(this.pointer, data);
    }

    getErrors() {
        return this.controller.service("validation").getErrorsAndWarnings(this.pointer);
    }

    getSchema(): JSONSchema {
        return this.controller.service("schema").get(this.pointer);
    }

    getPointer(): JSONPointer {
        return this.pointer;
    }

    getElement(): HTMLElement {
        return this.dom;
    }

    focus(): void {
        this.controller.service("location").setCurrent(this.pointer);
    }

    blur(): void {
        this.controller.service("location").blur(this.pointer);
    }

    destroy(): void {
        throw new Error("Missing implementation of method 'destroy' in custom editor");
    }
}
