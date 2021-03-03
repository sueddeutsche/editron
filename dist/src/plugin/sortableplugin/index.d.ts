import Editron from "../../Editron";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
import Sortable, { SortableEvent } from "sortablejs";
export { Sortable };
export declare type Options = {
    onAdd?: ({ pointer: string, editron: Editron, event: SortableEvent }: {
        pointer: any;
        editron: any;
        event: any;
    }) => void;
};
export declare function onAddSortable(pointer: JSONPointer, editron: Editron, event: SortableEvent): string;
export declare function onEndSortable(pointer: JSONPointer, editron: Editron, event: SortableEvent): void;
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
    editron: Editron;
    options: Options;
    constructor(options?: Options);
    initialize(editron: Editron): void;
    onCreateEditor(pointer: any, editor: SortableEditor, options?: EditronSchemaOptions): void;
    onChangePointer(oldPointer: JSONPointer, newPointer: JSONPointer, editor: SortableEditor): void;
    onDestroyEditor(pointer: any, editor: SortableEditor): void;
}
