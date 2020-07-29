import Controller from "../Controller";
import { JSONPointer, ValidationError } from "../types";
export interface EditorPlugin {
    new (pointer: JSONPointer, controller: Controller, options?: any): Editor;
    prototype: Editor;
    editorOf(pointer: JSONPointer, controller: Controller, options?: any): boolean;
}
export interface Editor {
    update(DataServiceEvent: any): void;
    /** change the pointer, this editor is associated with */
    updatePointer(newPointer: JSONPointer): void;
    /** if set, will receive a list of current validation-errors associated with json-pointer */
    updateErrors?(errors: Array<ValidationError>): void;
    /** returns the editors root element */
    toElement(): HTMLElement;
    /** destroys the editor */
    destroy(): void;
}
