import ArrayItem, { Options as ArrayItemOptions } from "./ArrayItem";
import { Action } from "../../components/actions";
import Editron from "../../Editron";
import { JSONPointer } from "../../types";
import { EditorUpdateEvent, Options as EditorOptions } from "../Editor";
import AbstractEditor from "../AbstractEditor";
import { ValidationError } from "../../types";
import { Patch } from "../../services/utils/createDiff";
/** type definitions for json-schema array-options (editron:ui) */
export declare type EditronSchemaOptions = {
    array?: {
        /** show action to insert item another item */
        add?: boolean;
        /** button text of add-action */
        addTitle?: string;
        /** clone an item */
        clone?: boolean;
        /** if set, will ad a collapse option with its initial collpased state set to given value */
        collapsed?: boolean;
        /** show item-header in array item */
        header?: boolean;
        /** add an insert button between items */
        insert?: boolean;
        /** button text of add-action */
        insertTitle?: string;
        /** show move up and down actions */
        move?: boolean;
        /** pass actions to child-editor (must be treated and rendered in child-editor) */
        passActions?: boolean;
        /** show a remove item action */
        remove?: boolean;
        /** show the index of the element */
        showIndex?: boolean;
    };
};
export declare const defaultOptions: {
    add: boolean;
    addTitle: string;
    clone: boolean;
    insert: boolean;
    insertTitle: string;
    move: boolean;
    remove: boolean;
    showIndex: boolean;
    header: boolean;
    passActions: boolean;
};
export declare type Options = EditorOptions & EditronSchemaOptions;
export declare type ViewModel = {
    attrs: any;
    disabled: boolean;
    errors: Array<ValidationError>;
    pointer: string;
    title?: string;
    description?: string;
    icon?: string;
    actions: Array<Action>;
    insertAction: Action;
};
export default class ArrayEditor extends AbstractEditor {
    /** parent container for array children */
    $items: HTMLElement;
    children: Array<ArrayItem>;
    editron: Editron;
    pointer: JSONPointer;
    viewModel: ViewModel;
    /** options template for array child creation */
    childOptions: ArrayItemOptions;
    static editorOf(pointer: JSONPointer, editron: Editron): boolean;
    constructor(pointer: JSONPointer, editron: Editron, options: Options);
    createArrayItem(index: number): ArrayItem;
    getLength(): number;
    update(event: EditorUpdateEvent): void;
    applyPatches(patch: Patch): void;
    rebuildChildren(): void;
    render(): void;
    destroy(): void;
}
