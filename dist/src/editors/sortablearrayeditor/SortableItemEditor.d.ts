import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../Editor";
export default class SortableItemEditor {
    index: number;
    pointer: JSONPointer;
    dom: HTMLElement;
    controller: Controller;
    editor: Editor;
    $editor: HTMLElement;
    constructor(pointer: JSONPointer, controller: Controller, options?: any);
    render(): void;
    updatePointer(newPointer: JSONPointer): void;
    destroy(): void;
    toElement(): HTMLElement;
}
