import m from "mithril";
import Sortable from "sortablejs";
import { ValidationError } from "../../types";
import { JSONPointer } from "../../types";
import Controller from "../../Controller";
export declare type Node = {
    pointer: JSONPointer;
    title: string;
    icon?: string;
    sortable: boolean;
    sortableGroup?: string;
    children: Array<Node>;
};
export declare function buildTree(pointer: JSONPointer, data: any, controller: Controller, depth?: number): Node;
export declare type Attrs = {
    withHandle?: boolean;
    controller: Controller;
    node: Node;
    errors: Array<ValidationError>;
    currentSelection: JSONPointer;
    onSelect: (pointer: JSONPointer) => void;
};
export declare type State = {
    sortable: Sortable;
};
declare const MinimapComponent: m.Component<Attrs>;
export default MinimapComponent;
