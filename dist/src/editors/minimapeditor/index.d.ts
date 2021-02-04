import { Node } from "./View";
import { EditorUpdateEvent } from "../Editor";
import Controller from "../../Controller";
import { JSONPointer, ValidationError } from "../../types";
import { Event as LocationEvent } from "../../services/LocationService";
import AbstractEditor, { Options as EditorOptions } from "../AbstractEditor";
export declare type ViewModel = {
    controller: Controller;
    currentSelection: JSONPointer;
    errors: Array<ValidationError>;
    /** minimap tree structure of input-data */
    node: Node;
    /** called, when a minimap-item is selected */
    onSelect: (pointer: JSONPointer) => void;
    onAdd: (item: any) => void;
    onChange: (pointers: any, reordered: any, target: any) => void;
    onUpdate: () => void;
};
export declare type Options = EditorOptions & {
    minimap?: {
        use?: boolean;
        depth?: number;
    };
};
export default class MinimapEditor extends AbstractEditor {
    viewModel: ViewModel;
    options: Options;
    notifyNestedChanges: boolean;
    static editorOf(pointer: JSONPointer, controller: Controller, options?: Options): boolean;
    constructor(pointer: any, controller: any, options: any);
    update(event: EditorUpdateEvent): void;
    render(): void;
    updateLocation(event: LocationEvent): void;
    destroy(): void;
}
