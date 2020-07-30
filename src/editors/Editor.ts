import Controller from "../Controller";
import { JSONPointer, JSONData, ValidationError } from "../types";
import AbstractEditor from "./AbstractEditor";


export interface EditorPlugin {
    new (pointer: JSONPointer, controller: Controller, options?): Editor;
    prototype: Editor;
    editorOf(pointer: JSONPointer, controller: Controller, options?): boolean;
};


export interface Editor {

    // update is used as a convention, not enforced, nor required
    update(DataServiceEvent): void;

    /** change the pointer, this editor is associated with */
    updatePointer(newPointer: JSONPointer): void;

    /** if set, will receive a list of current validation-errors associated with json-pointer */
    updateErrors?(errors: Array<ValidationError>): void;

    /** returns the editors root element */
    toElement(): HTMLElement;

    /** destroys the editor */
    destroy(): void;

    getPointer(): JSONPointer;

    /** enable/disable editor */
    setActive(isActive: boolean): void;

    // render is used as a convention, not enforced, nor required
    // render(): void;
}
