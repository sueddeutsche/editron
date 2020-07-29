import Controller from "../../Controller";
import { Option } from "mithril-material-forms/components/select";
import { Editor } from "../Editor";
import { JSONSchema, JSONPointer } from "../../types";
export declare type ViewModel = {
    description?: string;
    disabled?: boolean;
    id: string;
    onchange: (value: string) => void;
    options: Array<Option>;
    pointer: JSONPointer;
    title?: string;
    value?: any;
};
export declare type Options = {
    renderOneOf?: boolean;
};
export default class OneOfEditor implements Editor {
    $childContainer: HTMLElement;
    $element: HTMLElement;
    childEditor: any;
    childSchema: JSONSchema;
    controller: any;
    pointer: JSONPointer;
    schema: JSONSchema;
    viewModel: ViewModel;
    static editorOf(pointer: JSONPointer, controller: Controller, options: Options): boolean;
    constructor(pointer: JSONPointer, controller: Controller, options: Options);
    setActive(active?: boolean): void;
    changeChild(schema: any): void;
    getIndexOf(currentSchema: any): number;
    updatePointer(newPointer: JSONPointer): void;
    update(): void;
    rebuild(): void;
    render(): void;
    toElement(): HTMLElement;
    getPointer(): JSONPointer;
    destroy(): void;
}
