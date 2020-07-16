import { JSONData, JSONPointer, JSONSchema } from "../types";
import Controller from "../Controller";
import { Editor } from "./Editor";
import { Observer } from "../services/ValidationService";
/**
 * This is an optional base class for a custom editor. Inheriting from AbstractEditor will setup most required
 * editor-methods to work by default, while still allowing custom implementations. Most of all, it removes
 * the tedious and redundant controller/serivce/pointer bootstraping.
 *
 * Still required is
 *
 *      1. a custom `static editorOf(p, c, o)`-method, to register on a schema
 *      2. an `update(patch)`-method to respond to changes of the data at _pointer_
 *      3. a custom `updatePointer(newPointer)`-method to respond to changes in the location of the editor. Most of
 *          times, the pointer will be used in rendering and/or when creating child-editors. Dont forget to call
 *          `super.updatePointer(newPointer)`
 *
 * and optionally an `updateErrors(errors)`-method to handle new (or removed) errors.
 *
 * Convenience methods are
 *
 *      - `getData()` to fetch the associated data of the current _pointer_
 *      - `setData(newValue)` to update the associated data of the current _pointer_
 *      - `getSchema()` returning the json-schema of the current _pointer_
 *      - `getErrors()` returning a list of current errors
 *      - `toElement()` gives you the root dom-node for this editor (aka render target)
 *      - `focus()` and `blur()` to manage the selection state of the current input (requires correct placement of _id_)
 *
 * @param {String} pointer          - pointer referencing the current data and schema
 * @param {Controller} controller   - editron controller instance
 * @param {Object} options          - resolved options object
 */
export default class AbstractEditor implements Editor {
    pointer: JSONPointer;
    controller: Controller;
    options: any;
    errors: Array<any>;
    dom: HTMLElement;
    _addError: Observer;
    _clearErrors: Function;
    static editorOf(pointer: JSONPointer, controller: Controller, options: any): void;
    constructor(pointer: JSONPointer, controller: Controller, options: any);
    update(): void;
    updatePointer(newPointer: JSONPointer): [JSONPointer, JSONPointer];
    getData(): any;
    setData(data: JSONData): void;
    getErrors(): any[];
    getSchema(): JSONSchema;
    getPointer(): JSONPointer;
    focus(): void;
    blur(): void;
    toElement(): HTMLElement;
    destroy(): void;
    setErrors(errors: any): void;
}
