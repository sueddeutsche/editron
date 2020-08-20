import Controller from "../Controller";
import { JSONPointer } from "../types";


export default {

    addItem(pointer: JSONPointer, controller: Controller, index: number): void {
        controller.addItemTo(pointer, index);
    },

    removeItem(pointer: JSONPointer, controller: Controller, index: number): void {
        const nextList = controller.service("data").get(pointer);
        nextList.splice(index, 1);
        controller.service("data").set(pointer, nextList);
    },

    cloneItem(pointer: JSONPointer, controller: Controller, index: number): void {
        const nextList = controller.service("data").get(pointer);
        const item = nextList[index];
        // copy value without control variables
        const clone = JSON.stringify(item, (key, value) => key !== "_id" ? value : undefined);
        nextList.splice(index, 0, JSON.parse(clone));
        controller.service("data").set(pointer, nextList);
    },

    moveItem(pointer: JSONPointer, controller: Controller, index: number, destinationIndex: number): void {
        if (destinationIndex < 0) {
            return;
        }

        const list = controller.service("data").get(pointer);
        if (list[index] == null || list[destinationIndex] == null) {
            return;
        }

        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
        controller.service("data").set(pointer, list);
    },

    moveElement(list: Array<any>, index: number, destinationIndex: number): void {
        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
    }
};
