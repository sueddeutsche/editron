import { JSONPointer } from "../../types";
import Controller from "../../Controller";
import { Editor } from "../Editor";
export declare type Options = {
    id?: string;
    attrs?: object;
    icon?: string;
    hideTitle?: boolean;
    title?: string;
    description?: string;
    addDelete?: boolean;
};
export declare type ViewModel = {
    pointer: JSONPointer;
    icon?: string;
    errors: Array<any>;
    attrs: {
        [p: string]: any;
    };
    hideTitle?: boolean;
    title?: string;
    description?: string;
    disabled?: boolean;
    ondelete?: Function;
};
export default class ObjectEditor implements Editor {
    viewModel: ViewModel;
    private $element;
    pointer: JSONPointer;
    options: any;
    controller: any;
    childEditors: Array<any>;
    $children: HTMLElement;
    static editorOf(pointer: JSONPointer, controller: Controller): boolean;
    constructor(pointer: JSONPointer, controller: Controller, options?: Options);
    updatePointer(pointer: JSONPointer): void;
    /** de/activate this editors user-interaction */
    setActive(active?: boolean): void;
    update(): void;
    rebuildChildren(): void;
    deleteProperty(property: any): void;
    showProperty(property: any): void;
    setErrors(errors?: any[]): void;
    render(): void;
    toElement(): HTMLElement;
    getPointer(): JSONPointer;
    /** destroy editor, view and event-listeners */
    destroy(): void;
}
