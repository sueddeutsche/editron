import { Action } from "../../components/actions";
import Controller from "../../Controller";
import { Editor } from "../Editor";
import { JSONPointer, EditronConfigAttrs } from "../../types";
export declare type ActionsAttrs = {
    className?: string;
    disabled: boolean;
    actions: Array<Action>;
};
export declare const EditorTarget = ".ed-item";
export declare type ViewModel = {
    actions?: Array<Action>;
    attrs?: EditronConfigAttrs;
    disabled: boolean;
    header: boolean;
    index: number;
    insert?: Action;
    insertTitle: string;
    length: number;
    pointer: JSONPointer;
    showIndex: boolean;
    title?: string;
};
export declare type Options = {
    add: boolean;
    addTitle: string;
    attrs?: EditronConfigAttrs;
    clone: boolean;
    cloneTitle: string;
    disabled: boolean;
    header: boolean;
    insert: boolean;
    insertTitle: string;
    length: number;
    maxItems: number;
    minItems: number;
    move: boolean;
    moveUpTitle: string;
    moveDownTitle: string;
    passActions: boolean;
    remove: boolean;
    removeTitle: string;
    showIndex: boolean;
    title?: string;
};
export declare type ChildEditorOptions = {
    hideTitle: boolean;
    actions?: Array<Action>;
};
export default class ArrayItemEditor {
    $element: HTMLElement;
    controller: Controller;
    editor: Editor;
    viewModel: ViewModel;
    /** pass actions to child editor */
    passActions: boolean;
    /** this items array index */
    index: number;
    /** json-pointer to array */
    parentPointer: JSONPointer;
    constructor(pointer: JSONPointer, controller: Controller, options: Options);
    createActions(controls: any): Array<Action>;
    add(): void;
    clone(): void;
    remove(): void;
    move(to: number): void;
    getLength(): number;
    disable(isDisabled?: boolean): void;
    updatePointer(newPointer: any): void;
    getElement(): HTMLElement;
    getPointer(): JSONPointer;
    destroy(): void;
    render(): void;
    static getIndex(pointer: JSONPointer): number;
}
