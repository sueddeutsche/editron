import { JSONPointer } from "../../types";
import Controller from "../../Controller";
import { Editor } from "../Editor";
import AbstractEditor from "../AbstractEditor";
import { ValidationError } from "../../types";
declare type ModifiedEditor = Editor & {
    _property?: string;
};
export declare type Options = {
    id?: string;
    attrs?: {
        id?: string;
        [p: string]: any;
    };
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
        id?: string;
        [p: string]: any;
    };
    errors: Array<any>;
    pointer: JSONPointer;
    collapsed?: boolean;
    description?: string;
    disabled?: boolean;
    hideTitle?: boolean;
    icon?: string;
    id?: string;
    oncollapse?: Function;
    ondelete?: Function;
    title?: string;
};
export default class ObjectEditor extends AbstractEditor {
    viewModel: ViewModel;
    options: Options;
    childEditors: Array<ModifiedEditor>;
    $children: HTMLElement;
    static editorOf(pointer: JSONPointer, controller: Controller): boolean;
    constructor(pointer: JSONPointer, controller: Controller, options?: Options);
    updatePointer(pointer: JSONPointer): [string, string];
    /** de/activate this editors user-interaction */
    setActive(active?: boolean): void;
    update(): void;
    /** deletes this object from data */
    delete(): void;
    /** deletes a property from this object */
    deleteProperty(property: string): void;
    /** displays the properties json-value */
    showProperty(property: string): void;
    updateErrors(errors?: Array<ValidationError>): void;
    render(): void;
    /** destroy editor, view and event-listeners */
    destroy(): void;
}
export {};
