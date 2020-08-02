import Controller from "../Controller";
import { JSONPointer } from "../types";


export default {

    addItem(pointer: JSONPointer, controller: Controller, index: number): void {
        controller.addItemTo(pointer, index);
    },

    removeItem(pointer: JSONPointer, controller: Controller, index: number): void {
        const nextList = controller.data().get(pointer);
        nextList.splice(index, 1);
        controller.data().set(pointer, nextList);
    },

    cloneItem(pointer: JSONPointer, controller: Controller, index: number): void {
        const nextList = controller.data().get(pointer);
        const item = nextList[index];
        nextList.splice(index, 0, JSON.parse(JSON.stringify(item)));
        controller.data().set(pointer, nextList);
    },

    moveItem(pointer: JSONPointer, controller: Controller, index: number, destinationIndex: number): void {
        if (destinationIndex < 0) {
            return;
        }

        const list = controller.data().get(pointer);
        if (list[index] == null || list[destinationIndex] == null) {
            return;
        }

        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
        controller.data().set(pointer, list);
    },

    moveElement(list: Array<any>, index: number, destinationIndex: number): void {
        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
    }
}
