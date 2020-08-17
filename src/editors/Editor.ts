import Controller from "../Controller";
import { JSONPointer, JSONData, ValidationError, UpdateEvent } from "../types";
import AbstractEditor from "./AbstractEditor";


export interface EditorPlugin {
    new (pointer: JSONPointer, controller: Controller, options?): Editor;
    prototype: Editor;
    editorOf(pointer: JSONPointer, controller: Controller, options?): boolean;
};


export interface Editor {

    /** update is used as a convention, not enforced, nor required */
    update<T>(event: UpdateEvent<T>): void;

    /** returns the editors root element */
    toElement(): HTMLElement;

    /** destroy editor-instance */
    destroy(): void;

    /** returns current json-pointer of editor */
    getPointer(): JSONPointer;

    // render is used as a convention, not enforced, nor required
    // render(): void;
}
