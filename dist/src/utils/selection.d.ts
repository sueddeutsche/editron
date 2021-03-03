import Editron from "../Editron";
export declare type Direction = "up" | "down" | "left" | "right";
export declare type Blurable = {
    mayBlur(direction: any): boolean;
};
export declare type FocusableElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
/** returns true if one may trigger blur on the element via cursor movement **/
declare function mayBlur(element: FocusableElement | Blurable, direction: Direction): boolean;
/** returns the current active (editron) input element or false */
declare function getActiveInput(editron: Editron, parent?: HTMLElement): FocusableElement | false;
/** returns a list of available editron input-elements (including textaras, select) */
declare function getAvailableInputs(parent: HTMLElement): Array<FocusableElement>;
/** returns the next input element in direction or false if it is last/first */
declare function getNextInput(editron: Editron, direction?: Direction, { parent }?: {
    parent?: HTMLElement;
}): false | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
declare type Options = {
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
declare function focusNextInput(editron: Editron, direction?: Direction, options?: Options): boolean;
declare const _default: {
    focusNextInput: typeof focusNextInput;
    getNextInput: typeof getNextInput;
    getAvailableInputs: typeof getAvailableInputs;
    getActiveInput: typeof getActiveInput;
    mayBlur: typeof mayBlur;
};
export default _default;
