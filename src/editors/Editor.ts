import Editron from "../Editron";
import { JSONPointer, ValidationError } from "../types";
import { Patch } from "../services/utils/createDiff";
import { Action } from "../components/actions";


export type Options = {
    /** object title from json-schema */
    title: string;
    /** hide the title */
    hideTitle?: boolean;
    /** if set to true, editor should not allow data-modification */
    disabled: boolean;
    /** object description from json-schema */
    description: string;
    /** json-pointer of this editor */
    pointer: JSONPointer;
    /** set of actions to be rendered with editor */
    actions?: Array<Action>;
    /** icon to display in object-header */
    icon?: string;
    /** optional root-element html attributes */
    attrs?: { [p: string]: any };
    /** theme options for value-editors */
    theme?: string;
}


/** Editor Constructor API */
export interface EditorPlugin {
    new (pointer: JSONPointer, editron: Editron, options: Options): Editor;
    prototype: Editor;

    editorOf(pointer: JSONPointer, editron: Editron, options: Options): boolean;
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
    /** the root dom element returned by getElement */
    dom: HTMLElement;
    /** the json-pointer of this editor. This updated from services */
    pointer: JSONPointer;
    /** set to true, to receive changes from child-data */
    notifyNestedChanges?: boolean;
    /** set to true, to receive errors from child-data */
    notifyNestedErrors?: boolean;

    /** update is used as a convention, not enforced, nor required */
    update(event: EditorUpdateEvent): void;
    /** returns current json-pointer of editor */
    getPointer(): JSONPointer;
    /** returns the editors root element */
    getElement(): HTMLElement;
    /** destroys editor-instance - this function not be called directly. Use `editron.destroyEditor(myEditor)` instead */
    destroy(): void;
}
