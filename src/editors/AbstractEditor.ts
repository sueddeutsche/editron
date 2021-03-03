import { JSONData, JSONPointer, JSONSchema } from "../types";
import Editron from "../Editron";
import { Editor, EditorUpdateEvent } from "./Editor";


export function getTypeClass(schema: JSONSchema): string {
    return schema.type === "array" || schema.type === "object" ? schema.type : "value";
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
export default class AbstractEditor implements Editor {
    pointer: JSONPointer;
    editron: Editron;
    options: Options;
    dom: HTMLElement;

    static editorOf(pointer: JSONPointer, editron: Editron, options?) { // eslint-disable-line
        throw new Error("Missing editorOf-method in custom editor");
    }

    constructor(pointer: JSONPointer, editron: Editron, options) {
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

    update(event: EditorUpdateEvent) { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("Missing implementation of method 'update' in custom editor");
    }

    getData(): any {
        return this.editron.service("data").get(this.pointer);
    }

    setData(data: JSONData) {
        return this.editron.service("data").set(this.pointer, data);
    }

    getErrors() {
        return this.editron.service("validation").getErrorsAndWarnings(this.pointer);
    }

    getSchema(): JSONSchema {
        return this.editron.service("schema").get(this.pointer);
    }

    getPointer(): JSONPointer {
        return this.pointer;
    }

    getElement(): HTMLElement {
        return this.dom;
    }

    focus(): void {
        this.editron.service("location").setCurrent(this.pointer);
    }

    blur(): void {
        this.editron.service("location").blur(this.pointer);
    }

    destroy(): void {
        throw new Error("Missing implementation of method 'destroy' in custom editor");
    }
}
