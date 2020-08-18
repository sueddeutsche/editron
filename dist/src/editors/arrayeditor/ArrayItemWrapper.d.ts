import { JSONPointer, EditronConfigAttrs } from "../../types";
import Controller from "../../Controller";
import { Editor } from "../Editor";
export declare type Options = {
    index: number;
    pointer: JSONPointer;
    length: number;
    attrs?: EditronConfigAttrs;
    disabled?: boolean;
    onAdd?: () => void;
    onRemove?: () => void;
    onMove?: () => void;
    onClone?: () => void;
};
export declare type ViewModel = {
    index: number;
    pointer: JSONPointer;
    length: number;
    disabled: boolean;
    onAdd: () => void;
    onRemove: () => void;
    onMove: () => void;
    onClone: () => void;
    attrs?: EditronConfigAttrs;
};
export default class ArrayItemEditor {
    $element: HTMLElement;
    controller: Controller;
    editor: Editor;
    parentPointer: JSONPointer;
    viewModel: ViewModel;
    constructor(pointer: JSONPointer, controller: Controller, options: any);
    disable(isDisabled?: boolean): void;
    render(): void;
    add(): void;
    clone(): void;
    remove(): void;
    move(to: number): void;
    updatePointer(newPointer: any): void;
    getElement(): HTMLElement;
    getPointer(): JSONPointer;
    destroy(): void;
    static getIndex(pointer: JSONPointer): number;
}
