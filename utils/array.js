module.exports = {
    addItem(pointer, controller, index) {
        controller.addItemTo(pointer, index);
    },
    removeItem(pointer, controller, index) {
        const nextList = controller.data().get(pointer);
        nextList.splice(index, 1);
        controller.data().set(pointer, nextList);
    },
    moveItem(pointer, controller, index, destinationIndex) {
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
    moveElement(list, index, destinationIndex) {
        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
    }
};
