export default {
    addItem(pointer, controller, index) {
        controller.addItemTo(pointer, index);
    },
    removeItem(pointer, controller, index) {
        const nextList = controller.service("data").get(pointer);
        nextList.splice(index, 1);
        controller.service("data").set(pointer, nextList);
    },
    cloneItem(pointer, controller, index) {
        const nextList = controller.service("data").get(pointer);
        const item = nextList[index];
        // copy value without control variables
        const clone = JSON.stringify(item, (key, value) => key !== "_id" ? value : undefined);
        nextList.splice(index, 0, JSON.parse(clone));
        controller.service("data").set(pointer, nextList);
    },
    moveItem(pointer, controller, index, destinationIndex) {
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
    moveElement(list, index, destinationIndex) {
        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
    }
};
