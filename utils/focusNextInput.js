const getID = require("./getID");


function mayBlur(element, direction) {
    const dir = (direction === "down" || direction === "right") ? 1 : -1;

    if (element.mayBlur) {
        return element.mayBlur(direction);
    }

    if (element.tagName === "INPUT" && element.type === "number") {
        // there is no selection-indicator for numbers, so we cannot determine
        // if the motion is within the input-field. Must use input.type=text
        // for this to work
        return false;
    }

    if (element.tagName === "INPUT" && element.type === "checkbox") {
        return true;
    }

    if (element.tagName === "SELECT") {
        return false;
    }

    if (element.tagName === "TEXTAREA" || element.tagName === "INPUT") {
        if (element.value === "") {
            return true;
        } else if (dir === -1 && element.selectionStart === 0) {
            return true;
        } else if (dir === 1 && element.value.length === element.selectionEnd) {
            return true;
        }
        return false;
    }

    return true;
}


/**
 * move the focus from current element to next visible input-element
 * inputs being (textarea, input and select with an id-attribute containing a json-pointer-id)
 *
 * @param  {Controller}  controller
 * @param  {string}  direction      "up" | "left" | "down" | "right"
 * @param  {Boolean} force        ignores movement restrictions (e.g. navigation in textarea)
 * @returns {Boolean} true - if there was a new target was found or the move prevented
 */
module.exports = function focusNextInput(controller, direction = "down", force = false) {
    const currentPointer = controller.location().getCurrent();

    const dir = (direction === "down" || direction === "right") ? 1 : -1;
    const targets = [...document.querySelectorAll("input[id],textarea[id],select[id]")];
    const currentElement = document.getElementById(getID(currentPointer));
    const currentIndex = targets.indexOf(currentElement);
    if (currentIndex === -1) {
        console.log(`could not find current element id: '${getID(currentPointer)}' pointer: '${currentPointer}'`);
        return false;
    }

    if (force === false && mayBlur(currentElement, direction) === false) {
        console.log("prevent blur of", currentElement);
        return true;
    }

    const nextElement = targets[currentIndex + dir];
    if (nextElement && nextElement.focus) {
        nextElement.focus();
        console.log("focus", nextElement);
        return true;
    }

    return false;
};
