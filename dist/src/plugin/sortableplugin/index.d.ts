import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
import Sortable, { SortableEvent } from "sortablejs";
export { Sortable };
export declare type Options = {
    onAdd?: ({ pointer: string, controller: Controller, event: SortableEvent }: {
        pointer: any;
        controller: any;
        event: any;
    }) => void;
};
export declare function onAddSortable(pointer: JSONPointer, controller: Controller, event: SortableEvent): string;
export declare function onEndSortable(pointer: JSONPointer, controller: Controller, event: SortableEvent): void;
/** required settings in editron:ui config */
export declare type EditronSchemaOptions = {
    sortable?: {
        /** defines a group name for this array. If group names match, array items are interchangable.
         Defaults to json-pointer of array */
        group?: string;
        /** optional css selector to choose a drag-handle on array items */
        handle?: string;
    };
};
interface SortableEditor extends Editor {
    __sortablePlugin?: {
        options: EditronSchemaOptions["sortable"];
        sortable: Sortable;
        $children: HTMLElement;
    };
}
export default class SortablePlugin implements Plugin {
    id: string;
    controller: Controller;
    options: Options;
    constructor(options?: Options);
    initialize(controller: Controller): Plugin;
    onCreateEditor(pointer: any, editor: SortableEditor, options?: EditronSchemaOptions): void;
    onChangePointer(oldPointer: JSONPointer, newPointer: JSONPointer, editor: SortableEditor): void;
    onDestroyEditor(pointer: any, editor: SortableEditor): void;
}
