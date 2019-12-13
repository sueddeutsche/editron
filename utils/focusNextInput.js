const getID = require("./getID");


module.exports = function focusNextInput(controller, direction = 1) {
    const currentPointer = controller.location().getCurrent();

    const targets = [...document.querySelectorAll("input[id],textarea[id],select[id]")];
    const currentElement = document.getElementById(getID(currentPointer));
    const currentIndex = targets.indexOf(currentElement);
    if (currentIndex === -1) {
        console.log(`could not find current element id: '${getID(currentPointer)}' pointer: '${currentPointer}'`);
        return;
    }

    const nextElement = targets[currentIndex + direction];
    if (nextElement && nextElement.focus) {
        nextElement.focus();
    } else {
        console.log("no target element found");
    }
};
