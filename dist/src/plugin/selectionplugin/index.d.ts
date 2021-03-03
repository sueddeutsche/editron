import Editron from "../../Editron";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
export declare type SelectionPluginOptions = {
    /** onSelect-hook that will get called, when a selectable editor has been selected */
    onSelect({ pointer, editor, options }: {
        pointer: any;
        editor: any;
        options: any;
    }): void;
    /** onDeselect-hook that will get called, when a selectable editor was deselected */
    onDeselect({ pointer, editor, options }: {
        pointer: any;
        editor: any;
        options: any;
    }): void;
};
interface ModifiedEditor extends Editor {
    __selectionPlugin?: {
        select: (event: MouseEvent) => void;
        options: Record<string, any>;
    };
}
/**
 * The SelectionPlugin will add a selection api for editors, that have a
 * json-schema option set to `selectable: true`, e.g.:
 *
 * ```js
 * {
 *   type: "object",
 *   "editron:ui": {
 *     selectable: true
 *   }
 * }
 * ```
 */
export default class SelectionPlugin implements Plugin {
    id: string;
    dom: HTMLElement;
    current: Editor;
    editron: Editron;
    currentSelection: ModifiedEditor;
    onSelect: SelectionPluginOptions["onSelect"];
    onDeselect: SelectionPluginOptions["onDeselect"];
    constructor(options: SelectionPluginOptions);
    initialize(editron: Editron): void;
    deselect(): void;
    select(editor: ModifiedEditor): void;
    onCreateEditor(pointer: any, editor: ModifiedEditor, options?: any): void;
    onDestroyEditor(pointer: any, editor: ModifiedEditor): void;
    destroy(): void;
}
export {};
