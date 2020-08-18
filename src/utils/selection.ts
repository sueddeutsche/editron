import Controller from "../Controller";


export type Direction = "up"|"down"|"left"|"right";

export type Blurable = {
    mayBlur(direction): boolean;
}

export type FocusableElement = HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement;

const isBlurable = (element): element is Blurable => (typeof element.mayBlur === "function");


/** returns true if one may trigger blur on the element via cursor movement **/
function mayBlur(element: FocusableElement|Blurable, direction: Direction): boolean {
    const dir = (direction === "down" || direction === "right") ? 1 : -1;

    if (isBlurable(element)) {
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
        const input = <HTMLInputElement>element;
        if (direction === "up" || direction === "down") {
            return true;
        }
        if (direction === "left" && input.selectionStart === 0) {
            return true;
        }
        if (direction === "right" && input.value.length === input.selectionEnd) {
            return true;
        }
        return false;
    }

    if (element.tagName === "TEXTAREA") {
        const input = <HTMLTextAreaElement>element;
        if (element.value === "") {
            return true;
        } else if (dir === -1 && input.selectionStart === 0) {
            return true;
        } else if (dir === 1 && input.value.length === input.selectionEnd) {
            return true;
        }
        return false;
    }

    return true;
}

/** returns the current active (editron) input element or false */
function getActiveInput(controller: Controller, parent: HTMLElement = document.body): FocusableElement|false {
    const currentPointer = controller.service("location").getCurrent();
    if (currentPointer === "#") {
        console.log("abort empty selection", currentPointer, "active element", document.activeElement);
        return false;
    }

    const activeInput = parent.querySelector(`[data-point="${currentPointer}"] label input`) as FocusableElement;
    if (activeInput == null) { return false; }
    if (activeInput !== document.activeElement) {
        console.log("selection: active input is not the same as current editor", activeInput, document.activeElement);
    }

    return activeInput;
}

/** returns a list of available editron input-elements (including textaras, select) */
function getAvailableInputs(parent: HTMLElement): Array<FocusableElement> {
    return Array.from(parent.querySelectorAll("input,textarea,select"));
}

/** returns the next input element in direction or false if it is last/first */
function getNextInput(controller: Controller, direction: Direction = "down", { parent = document.body } = {}) {
    const activeElement = getActiveInput(controller, parent);
    if (activeElement === false) {
        return false;
    }
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


type Options = {
    /** ignores movement restrictions (e.g. navigation in textarea) */
    force?: boolean;
    /** scan only in given parentNode */
    parent?: HTMLElement;
};

/**
 * move the focus from current element to next visible input-element
 * inputs being (textarea, input and select with an id-attribute containing a json-pointer-id)
 * @returns true - if there was a new target was found or the move prevented
 */
function focusNextInput(controller: Controller, direction: Direction = "down", options: Options = {}) {
    const { force = false, parent = document.body } = options;
    const activeElement = getActiveInput(controller, parent);
    if (activeElement === false) {
        return false;
    }

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


export default {
    focusNextInput,
    getNextInput,
    getAvailableInputs,
    getActiveInput,
    mayBlur
};
