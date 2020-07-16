import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../Editor";
export declare type Controls = {
    add?: boolean;
    remove?: boolean;
    move?: boolean;
    insert?: boolean;
    maxItems?: number;
    minItems?: number;
};
export declare type ViewModel = {
    pointer: string;
    attrs: object;
    errors: Array<any>;
    onAdd: Function;
    length: number;
    maxItems: number;
    minItems: number;
    controls: Controls;
};
export declare type Options = {
    id?: string;
    attrs?: object;
    controls?: Controls;
};
export default class ArrayEditor implements Editor {
    viewModel: any;
    $element: HTMLElement;
    controller: Controller;
    pointer: string;
    children: Array<any>;
    $items: HTMLElement;
    onAdd: Function;
    static editorOf(pointer: JSONPointer, controller: Controller): boolean;
    constructor(pointer: JSONPointer, controller: Controller, options?: Options);
    setActive(active?: boolean): void;
    update(): void;
    updatePointer(newPointer: JSONPointer): void;
    updateView(changeEvent: any): void;
    applyPatches(patch: any): void;
    rebuildChildren(): void;
    updateControls(): void;
    getPointer(): JSONPointer;
    setErrors(errors: any): void;
    render(): void;
    toElement(): HTMLElement;
    destroy(): void;
}
