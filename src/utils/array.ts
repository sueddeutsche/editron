import Editron from "../Editron";
import { JSONPointer } from "../types";


export default {

    addItem(pointer: JSONPointer, editron: Editron, index: number): void {
        editron.addItemTo(pointer, index);
    },

    removeItem(pointer: JSONPointer, editron: Editron, index: number): void {
        const nextList = editron.service("data").get(pointer);
        nextList.splice(index, 1);
        editron.service("data").set(pointer, nextList);
    },

    cloneItem(pointer: JSONPointer, editron: Editron, index: number): void {
        const nextList = editron.service("data").get(pointer);
        const item = nextList[index];
        // copy value without control variables
        const clone = JSON.stringify(item, (key, value) => key !== "_id" ? value : undefined);
        nextList.splice(index, 0, JSON.parse(clone));
        editron.service("data").set(pointer, nextList);
    },

    moveItem(pointer: JSONPointer, editron: Editron, index: number, destinationIndex: number): void {
        if (destinationIndex < 0) {
            return;
        }

        const list = editron.service("data").get(pointer);
        if (list[index] == null || list[destinationIndex] == null) {
            return;
        }

        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
        editron.service("data").set(pointer, list);
    },

    moveElement(list: Array<any>, index: number, destinationIndex: number): void {
        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
    }
};
