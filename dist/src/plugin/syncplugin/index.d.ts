import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
declare type Options = {};
interface SyncEditor extends Editor {
    __syncPlugin?: {
        options: any;
    };
}
export default class SyncPlugin implements Plugin {
    id: string;
    dom: HTMLElement;
    current: Editor;
    controller: Controller;
    currentSelection: SyncEditor;
    constructor(options: Options);
    initialize(controller: Controller): Plugin;
    onCreateEditor(pointer: JSONPointer, editor: SyncEditor, options?: any): void;
    onDestroyEditor(pointer: any, editor: SyncEditor): void;
}
export {};
