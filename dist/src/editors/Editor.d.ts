import Controller from "../Controller";
import { JSONPointer, ValidationError } from "../types";
export declare class Editor {
    /**
     * @note the static method is not available through typescript-interface, nor validated on implementing this class
     *
     * for the given input, returns true if this editor-class should be used for editing
     * @param pointer - current json-pointer that is looking for an widget
     * @param controller
     * @param options
     * @returns true, if this editor should be instantiated for json-pointer
     */
    static editorOf(pointer: JSONPointer, controller: Controller, options?: any): boolean;
    constructor(pointer: JSONPointer, controller: Controller, options: any);
    /** change the pointer, this editor is associated with */
    updatePointer(newPointer: JSONPointer): void;
    /** if set, will receive a list of current validation-errors associated with json-pointer */
    updateErrors?(errors: Array<ValidationError>): void;
    /** returns the editors root element */
    toElement(): HTMLElement;
    /** destroys the editor */
    destroy(): void;
}
