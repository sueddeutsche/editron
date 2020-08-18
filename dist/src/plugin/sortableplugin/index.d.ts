import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
import Sortable, { SortableEvent } from 'sortablejs';
export declare type Options = {};
interface SortableEditor extends Editor {
    __sortablePlugin?: {
        sortable: Sortable;
    };
}
export declare function onAddSortable(pointer: JSONPointer, controller: Controller, event: SortableEvent): void;
export declare function onEndSortable(pointer: JSONPointer, controller: Controller, event: SortableEvent): void;
export default class SortablePlugin implements Plugin {
    id: string;
    dom: HTMLElement;
    current: Editor;
    controller: Controller;
    constructor(options: Options);
    initialize(controller: Controller): Plugin;
    onCreateEditor(pointer: any, editor: SortableEditor, options?: any): void;
    onDestroyEditor(pointer: any, editor: SortableEditor): void;
}
export {};
