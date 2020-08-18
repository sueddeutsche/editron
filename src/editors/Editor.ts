import Controller from "../Controller";
import { JSONPointer, ValidationError } from "../types";
import { Patch } from "../services/utils/createDiff";


/** Editor Constructor API */
export interface EditorPlugin {
    new (pointer: JSONPointer, controller: Controller, options?): Editor;
    prototype: Editor;

    editorOf(pointer: JSONPointer, controller: Controller, options?): boolean;
}


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


export type UpdateDataEvent = {
    type: "data:update";
    value: { pointer: JSONPointer; patch: Patch };
}


export type UpdateErrorsEvent = { type: "validation:errors", value: Array<ValidationError> }


/** editor lifecycle events */
export type EditorUpdateEvent = UpdateDataEvent|SetEnabledEvent|ChangePointerEvent|UpdateErrorsEvent;


/** Editor Instance API */
export interface Editor {
    dom: HTMLElement;
    pointer: JSONPointer;
    notifyNestedChanges?: boolean;

    /** update is used as a convention, not enforced, nor required */
    update(event: EditorUpdateEvent): void;
    /** returns current json-pointer of editor */
    getPointer(): JSONPointer;
    /** returns the editors root element */
    getElement(): HTMLElement;
    /** destroy editor-instance */
    destroy(): void;
}
