const getID = require("./getID");


/**
 * Return true, if the given element may blur in the requested direction
 * @param  {HTMLElement} element
 * @param  {"up"|"down"|"left"|"right"} direction
 * @return {Boolean} may blur
 */
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

    if (element.tagName === "INPUT") {
        if (direction === "up" || direction === "down") {
            return true;
        }
        if (direction === "left" && element.selectionStart === 0) {
            return true;
        }
        if (direction === "right" && element.value.length === element.selectionEnd) {
            return true;
        }
        return false;
    }

    if (element.tagName === "TEXTAREA") {
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
 * Return the current active element or false
 * @param  {Controller} controller
 * @param  {HTMLElement} parent
 * @return {HTMLElement|false}
 */
function getActiveInput(controller, parent = document) {
    const currentPointer = controller.location().getCurrent();
    const currentId = `#${getID(currentPointer)}`;
    if (currentId === "#") {
        console.log("abort empty selection", currentPointer, "active element", document.activeElement);
        return false;
    }

    const activeInput = parent.querySelector(currentId);
    if (activeInput == null) { return false; }
    if (activeInput !== document.activeElement) {
        console.log("selection: active input is not the same as current editor", activeInput, document.activeElement);
    }
    return activeInput;
}


function getAvailableInputs(parent) {
    return [...parent.querySelectorAll("input,textarea,select")];
}


/**
 * Return the next input-element or false
 * @param  {Controller} controller
 * @param  {"up"|"down"|"left"|"right"} direction
 * @param  {HTMLElement} options.parent
 * @return {HTMLElement|false}
 */
function getNextInput(controller, direction = "down", { parent = document } = {}) {
    const activeElement = getActiveInput(controller, parent);
    const allElements = getAvailableInputs(parent);
    const dir = (direction === "down" || direction === "right") ? 1 : -1;
    const currentIndex = allElements.indexOf(activeElement);
    if (currentIndex === -1) {
        return false;
    }

    const nextElement = allElements[currentIndex + dir];
    if (nextElement && nextElement.focus) {
        return nextElement;
    }

    return false;
}


/**
 * move the focus from current element to next visible input-element
 * inputs being (textarea, input and select with an id-attribute containing a json-pointer-id)
 *
 * @param  {Controller}  controller
 * @param  {"up"|"down"|"left"|"right"} direction
 * @param  {Object} options
 * @param  {Boolean} options.force    ignores movement restrictions (e.g. navigation in textarea)
 * @param  {HTMLElement} options.parent    scan only in given parentNode
 * @returns {Boolean} true - if there was a new target was found or the move prevented
 */
function focusNextInput(controller, direction = "down", options = {}) {
    const { force = false, parent = document } = options;
    const activeElement = getActiveInput(controller, parent);

    if (force === false && mayBlur(activeElement, direction) === false) {
        // console.log("prevent blur of", activeElement);
        return true;
    }

    const nextElement = getNextInput(controller, direction, options);
    if (nextElement) {
        nextElement.focus();
        return true;
    }

    return false;
}


module.exports = {
    focusNextInput,
    getNextInput,
    getAvailableInputs,
    getActiveInput,
    mayBlur
};
