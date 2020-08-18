import Controller from "../../Controller";
import { Option } from "mithril-material-forms/components/select";
import { Editor, EditorUpdateEvent } from "../Editor";
import { JSONSchema, JSONPointer } from "../../types";
import AbstractEditor from "../AbstractEditor";
export declare type ViewModel = {
    description?: string;
    disabled?: boolean;
    onchange: (value: string) => void;
    options: Array<Option>;
    pointer: JSONPointer;
    title?: string;
    value?: any;
};
export declare type Options = {
    renderOneOf?: boolean;
};
export default class OneOfEditor extends AbstractEditor {
    /** catch inner changes (changes are compared by a diff which may not notify parent pointer) */
    $childContainer: HTMLElement;
    childEditor: Editor;
    childSchema: JSONSchema;
    controller: Controller;
    dom: HTMLElement;
    notifyNestedChanges: boolean;
    pointer: JSONPointer;
    schema: JSONSchema;
    viewModel: ViewModel;
    static editorOf(pointer: JSONPointer, controller: Controller, options: Options): boolean;
    constructor(pointer: JSONPointer, controller: Controller, options: Options);
    changeChild(schema: any): void;
    getIndexOf(currentSchema: any): number;
    update(event: EditorUpdateEvent): void;
    rebuild(): void;
    render(): void;
    destroy(): void;
}
