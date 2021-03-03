import m from "mithril";
import Sortable from "sortablejs";
import { ValidationError } from "../../types";
import { JSONPointer } from "../../types";
import Editron from "../../Editron";
export declare type Node = {
    pointer: JSONPointer;
    title: string;
    icon?: string;
    collapsible: boolean;
    sortable: boolean;
    sortableGroup?: string;
    children: Array<Node>;
};
export declare function buildTree(pointer: JSONPointer, data: any, editron: Editron, depth?: number): Node;
export declare type Attrs = {
    withHandle?: boolean;
    editron: Editron;
    node: Node;
    errors: Array<ValidationError>;
    currentSelection: JSONPointer;
    onSelect: (pointer: JSONPointer) => void;
    onUpdate: () => void;
    includeRootNode?: boolean;
};
export declare type State = {
    sortable: Sortable;
};
declare const MinimapComponent: m.Component<Attrs>;
export default MinimapComponent;
