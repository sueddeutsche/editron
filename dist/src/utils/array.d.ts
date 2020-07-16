import Controller from "../Controller";
import { JSONPointer } from "../types";
declare const _default: {
    addItem(pointer: JSONPointer, controller: Controller, index: number): void;
    removeItem(pointer: JSONPointer, controller: Controller, index: number): void;
    moveItem(pointer: JSONPointer, controller: Controller, index: number, destinationIndex: number): void;
    moveElement(list: Array<any>, index: number, destinationIndex: number): void;
};
export default _default;
