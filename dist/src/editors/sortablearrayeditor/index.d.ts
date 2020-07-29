import AbstractEditor from "../AbstractEditor";
import { JSONPointer } from "../../types";
import Sortable from 'sortablejs';
import Controller from "../../Controller";
export declare type ViewModel = {
    pointer: string;
    attrs: object;
    length: number;
    errors: Array<any>;
    onAdd: Function;
    maxItems: number;
    minItems: number;
};
export default class SortableEditor extends AbstractEditor {
    static editorOf(pointer: any, controller: any, options: any): boolean;
    viewModel: ViewModel;
    /** DOM element, containing array items, which wrap item-editors */
    $items: HTMLElement;
    children: any[];
    sortable: Sortable;
    constructor(pointer: any, controller: Controller, options: any);
    updatePointer(newPointer: JSONPointer): [string, string];
    update(): void;
    /**
     * Destroy and create all item editors, each wrapped by a controllable array-item
     */
    updateItems(): void;
    destroy(): void;
    setActive(active?: boolean): void;
    render(): void;
}
