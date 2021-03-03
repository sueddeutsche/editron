import Editron from "../../Editron";
import { SelectFormAttrs } from "mithril-material-forms";
import { Editor, EditorUpdateEvent, Options as EditorOptions } from "../Editor";
import { JSONSchema, JSONPointer } from "../../types";
import AbstractEditor from "../AbstractEditor";
export declare type EditronSchemaOptions = {
    /** invert order of oneOf selection */
    invertOrder?: boolean;
    /** title of oneOf selection */
    title?: string;
    /** theme of oneOf selection */
    theme?: string;
};
export declare type ViewModel = {
    description?: string;
    disabled?: boolean;
    pointer: JSONPointer;
    title?: string;
};
export declare type Options = EditorOptions & {
    renderOneOf?: boolean;
    invertOrder?: boolean;
    title?: string;
};
export default class OneOfEditor extends AbstractEditor {
    $childContainer: HTMLElement;
    childEditor: Editor;
    childSchema: JSONSchema;
    editron: Editron;
    dom: HTMLElement;
    /** catch inner changes (changes are compared by a diff which may not notify parent pointer) */
    notifyNestedChanges: boolean;
    pointer: JSONPointer;
    schema: JSONSchema;
    viewModel: ViewModel;
    selectModel: SelectFormAttrs;
    static editorOf(pointer: JSONPointer, editron: Editron, options: Options): boolean;
    constructor(pointer: JSONPointer, editron: Editron, options: Options);
    changeChild(schema: any): void;
    getIndexOf(currentSchema: any): number;
    update(event: EditorUpdateEvent): void;
    rebuild(): void;
    render(): void;
    destroy(): void;
}
