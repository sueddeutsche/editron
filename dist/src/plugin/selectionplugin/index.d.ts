import Controller from "../../Controller";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
export declare type Options = {
    onSelect({ pointer, editor, options }: {
        pointer: any;
        editor: any;
        options: any;
    }): void;
    onDeselect({ pointer, editor, options }: {
        pointer: any;
        editor: any;
        options: any;
    }): void;
};
interface ModifiedEditor extends Editor {
    __selectionPlugin?: {
        select: (editor: any) => void;
        options: any;
    };
}
export default class SelectionPlugin implements Plugin {
    id: string;
    dom: HTMLElement;
    current: Editor;
    controller: Controller;
    currentSelection: ModifiedEditor;
    onSelect: Options["onSelect"];
    onDeselect: Options["onDeselect"];
    constructor(options: Options);
    initialize(controller: Controller): Plugin;
    deselect(): void;
    select(event: any, editor: ModifiedEditor): void;
    onCreateEditor(pointer: any, editor: ModifiedEditor, options?: any): void;
    onDestroyEditor(pointer: any, editor: ModifiedEditor): void;
}
export {};
