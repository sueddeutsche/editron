import ArrayItemWrapper from "./ArrayItemWrapper";
import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { EditorUpdateEvent } from "../Editor";
import AbstractEditor from "../AbstractEditor";
import { ValidationError } from "../../types";
import { Patch } from "../../services/utils/createDiff";
export declare type Controls = {
    add?: boolean;
    clone?: boolean;
    disabled: boolean;
    insert?: boolean;
    maxItems?: number;
    minItems?: number;
    move?: boolean;
    remove?: boolean;
    showIndex: boolean;
};
export declare type ViewModel = {
    attrs: any;
    controls: Controls;
    disabled: boolean;
    errors: Array<ValidationError>;
    length: number;
    maxItems: number;
    minItems: number;
    onadd?: (index?: number) => void;
    pointer: string;
};
export declare type Options = {
    attrs?: any;
    controls?: Controls;
};
export default class ArrayEditor extends AbstractEditor {
    $items: HTMLElement;
    children: Array<ArrayItemWrapper>;
    controller: Controller;
    onAdd: (index: number) => void;
    pointer: JSONPointer;
    viewModel: ViewModel;
    static editorOf(pointer: JSONPointer, controller: Controller): boolean;
    constructor(pointer: JSONPointer, controller: Controller, options?: Options);
    update(event: EditorUpdateEvent): void;
    applyPatches(patch: Patch): void;
    rebuildChildren(): void;
    updateControls(): void;
    render(): void;
    destroy(): void;
}
