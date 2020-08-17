import Controller from "../Controller";
import { JSONPointer, JSONData, ValidationError } from "../types";
import AbstractEditor from "./AbstractEditor";
import { UpdateDataEvent } from "../services/DataService";


export type SetEnabledEvent = {
    type: "active",
    /** true, if editor should be enabled */
    value: boolean
};


export type ChangePointerEvent = {
    type: "pointer",
    /** new json-pointer value */
    value: JSONPointer
};

export type UpdateErrorsEvent = { type: "validation:errors", value: Array<ValidationError> }


/** editor lifecycle events */
export type EditorUpdateEvent = UpdateDataEvent|SetEnabledEvent|ChangePointerEvent|UpdateErrorsEvent;


export interface EditorPlugin {
    new (pointer: JSONPointer, controller: Controller, options?): Editor;
    prototype: Editor;
    editorOf(pointer: JSONPointer, controller: Controller, options?): boolean;
};


export interface Editor {
    pointer: JSONPointer;
    notifyNestedChanges?: boolean;

    /** update is used as a convention, not enforced, nor required */
    update(event: EditorUpdateEvent): void;

    /** returns the editors root element */
    toElement(): HTMLElement;

    /** destroy editor-instance */
    destroy(): void;

    /** returns current json-pointer of editor */
    getPointer(): JSONPointer;

    // render is used as a convention, not enforced, nor required
    // render(): void;
}
