import { JSONPointer, JSONSchema, ValidationError } from "../types";
import Controller from "../Controller";
import { Editor, EditorUpdateEvent } from "./Editor";
export declare type ViewModel = {
    pointer: JSONPointer;
    title?: string;
    description?: string;
    disabled?: boolean;
    value?: any;
    instantUpdate?: boolean;
    invertOrder?: boolean;
    schema: JSONSchema;
    options: any;
    errors: Array<string | ValidationError>;
    onfocus: () => void;
    onblur: () => void;
    onchange: (value: any) => void;
};
/**
 * Convenience class, which registers required events and base methods for value-editors (not object, array)
 */
export default class AbstractValueEditor implements Editor {
    dom: HTMLElement;
    controller: Controller;
    notifyNestedChanges: boolean;
    options: any;
    pointer: JSONPointer;
    viewModel: ViewModel;
    static editorOf(pointer: JSONPointer, controller: Controller): boolean;
    /**
     * options
     *    - editorValueType:String - custom type of editor value (added as classname)
     *    - editorElementProperties:Object - add custom properties to main DOM-element
     *    - viewModel:Object - viewModel which extends base viewmodel
     *
     * @param pointer - json pointer to value
     * @param controller - json editor controller
     * @param options
     */
    constructor(pointer: JSONPointer, controller: Controller, options: any);
    update(event: EditorUpdateEvent): void;
    focus(): void;
    blur(): void;
    setValue(value: any): void;
    getValue(): any;
    render(): void;
    getPointer(): string;
    getElement(): HTMLElement;
    destroy(): void;
}
