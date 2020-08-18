import Controller from "../Controller";
import { JSONPointer, ValidationError } from "../types";
import { Patch } from "../services/utils/createDiff";
/** Editor Constructor API */
export interface EditorPlugin {
    new (pointer: JSONPointer, controller: Controller, options?: any): Editor;
    prototype: Editor;
    editorOf(pointer: JSONPointer, controller: Controller, options?: any): boolean;
}
export declare type SetEnabledEvent = {
    type: "active";
    /** true, if editor should be enabled */
    value: boolean;
};
export declare type ChangePointerEvent = {
    type: "pointer";
    /** new json-pointer value */
    value: JSONPointer;
};
export declare type UpdateDataEvent = {
    type: "data:update";
    value: {
        pointer: JSONPointer;
        patch: Patch;
    };
};
export declare type UpdateErrorsEvent = {
    type: "validation:errors";
    value: Array<ValidationError>;
};
/** editor lifecycle events */
export declare type EditorUpdateEvent = UpdateDataEvent | SetEnabledEvent | ChangePointerEvent | UpdateErrorsEvent;
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
