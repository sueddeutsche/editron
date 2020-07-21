import Controller from "../Controller";
import { JSONPointer, JSONData, ValidationError } from "../types";
import AbstractEditor from "./AbstractEditor";


export interface EditorPlugin {
    new (pointer: JSONPointer, controller: Controller, options?): Editor;
    prototype: Editor;
    editorOf(pointer: JSONPointer, controller: Controller, options?): boolean;
};


// export interface EditorPlugin {
//     /**
//      * for the given input, returns true if this editor-class should be used for editing
//      * @param pointer - current json-pointer that is looking for an widget
//      * @param controller
//      * @param options
//      * @returns true, if this editor should be instantiated for json-pointer
//      */
//     editorOf(pointer: JSONPointer, controller: Controller, options?): boolean;

//     (pointer: JSONPointer, controller: Controller, options?): Editor
// }


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

    // render is used as a convention, not enforced, nor required
    // render(): void;
}
