import { JSONPointer } from "../../types";
import Controller from "../../Controller";
import { Editor, Options as EditorOptions, EditorUpdateEvent } from "../Editor";
import AbstractEditor from "../AbstractEditor";
import { Action } from "../../components/actions";
export declare type EditronSchemaOptions = {
    /** theme option, passed to value-editors */
    theme?: string;
    object?: {
        /** adds an user-action to delete this object */
        delete?: boolean;
        /** if set, will ad a collapse option with its initial collpased state set to given value */
        collapsed?: boolean;
        /** show arrow icon to controll visibility */
        collapseArrowIcon?: boolean;
        headerContent?: string;
    };
};
export declare type Options = EditorOptions & EditronSchemaOptions;
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
    headerContent?: string;
    oncollapse?: () => void;
    ondelete?: () => void;
    pointer: JSONPointer;
    title?: string;
    actions: Array<Action>;
};
export default class ObjectEditor extends AbstractEditor {
    viewModel: ViewModel;
    options: Options;
    childEditors: Array<Editor>;
    $children: HTMLElement;
    $headerChildren: HTMLElement;
    childOptions: {
        theme?: string;
    };
    static editorOf(pointer: JSONPointer, controller: Controller): boolean;
    constructor(pointer: JSONPointer, controller: Controller, options: Options);
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
