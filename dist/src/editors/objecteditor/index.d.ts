import { JSONPointer } from "../../types";
import Controller from "../../Controller";
import { Editor, EditorUpdateEvent } from "../Editor";
import AbstractEditor from "../AbstractEditor";
export declare type Options = {
    attrs?: {
        [p: string]: any;
    };
    /** icon to display in object-header */
    icon?: string;
    /** hide the title */
    hideTitle?: boolean;
    /** object title from json-schema */
    title?: string;
    /** object description from json-schema */
    description?: string;
    /** adds an user-action to delete this object */
    addDelete?: boolean;
    /** if set, will add a toggle-button to show/hide its properties. Set to true, to hide it by default */
    collapsed?: boolean;
};
export declare type ViewModel = {
    attrs: {
        [p: string]: any;
    };
    collapsed?: boolean;
    description?: string;
    disabled?: boolean;
    errors: Array<any>;
    hideTitle?: boolean;
    icon?: string;
    oncollapse?: () => void;
    ondelete?: () => void;
    pointer: JSONPointer;
    title?: string;
};
export default class ObjectEditor extends AbstractEditor {
    viewModel: ViewModel;
    options: Options;
    childEditors: Array<Editor>;
    $children: HTMLElement;
    static editorOf(pointer: JSONPointer, controller: Controller): boolean;
    constructor(pointer: JSONPointer, controller: Controller, options?: Options);
    update(event: EditorUpdateEvent): void;
    /** deletes this object from data */
    deleteObject(): void;
    /** deletes a property from this object */
    deleteProperty(property: string): void;
    /** displays the properties json-value */
    showProperty(property: string): void;
    render(): void;
    /** destroy editor, view and event-listeners */
    destroy(): void;
}
