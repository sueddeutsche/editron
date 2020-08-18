import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
declare type Options = {};
interface RemoteDataEditor extends Editor {
    __remoteDataPlugin?: {
        options: any;
    };
}
export default class RemoteDataPlugin implements Plugin {
    id: string;
    dom: HTMLElement;
    current: Editor;
    controller: Controller;
    currentSelection: RemoteDataEditor;
    constructor(options: Options);
    initialize(controller: Controller): Plugin;
    setData(pointer: any, remote: any): Promise<void>;
    onCreateEditor(pointer: JSONPointer, editor: RemoteDataEditor, options?: any): void;
    onDestroyEditor(pointer: any, editor: RemoteDataEditor): void;
}
export {};
