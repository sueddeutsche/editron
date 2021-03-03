import Editron from "../Editron";
import { JSONPointer } from "../types";
declare const _default: {
    addItem(pointer: JSONPointer, editron: Editron, index: number): void;
    removeItem(pointer: JSONPointer, editron: Editron, index: number): void;
    cloneItem(pointer: JSONPointer, editron: Editron, index: number): void;
    moveItem(pointer: JSONPointer, editron: Editron, index: number, destinationIndex: number): void;
    moveElement(list: Array<any>, index: number, destinationIndex: number): void;
};
export default _default;
