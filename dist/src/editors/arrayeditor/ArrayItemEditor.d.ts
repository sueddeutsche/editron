import { JSONPointer, EditronConfigAttrs } from "../../types";
import Controller from "../../Controller";
export declare type Options = {
    index: number;
    pointer: JSONPointer;
    length: number;
    attrs?: EditronConfigAttrs;
    disabled?: boolean;
    onadd?: () => void;
    onremove?: () => void;
    onmove?: () => void;
};
export declare type ViewModel = {
    index: number;
    pointer: JSONPointer;
    length: number;
    disabled: boolean;
    onadd: () => void;
    onremove: () => void;
    onmove: () => void;
    attrs?: EditronConfigAttrs;
};
export default class ArrayItemEditor {
    $element: HTMLElement;
    controller: Controller;
    editor: any;
    parentPointer: JSONPointer;
    viewModel: ViewModel;
    constructor(pointer: JSONPointer, controller: Controller, options: any);
    render(): void;
    add(): void;
    remove(): void;
    move(to: any): void;
    updatePointer(newPointer: any): void;
    toElement(): HTMLElement;
    getPointer(): JSONPointer;
    destroy(): void;
    static getIndex(pointer: JSONPointer): number;
}
