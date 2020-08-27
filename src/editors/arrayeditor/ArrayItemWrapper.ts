import m from "mithril";
import gp from "gson-pointer";
import ArrayItemView, { EditorTarget } from "./ArrayItemView";
import { JSONPointer, EditronConfigAttrs } from "../../types";
import Controller from "../../Controller";
import { Editor } from "../Editor";
import { Action } from "../../components/actions";


export type __Options = {
    index: number;
    pointer: JSONPointer;
    length: number;
    attrs?: EditronConfigAttrs;
    actions?: Array<Action>;
    disabled?: boolean;
    onAdd?: () => void;
    onRemove?: () => void;
    onMove?: () => void;
    onClone?: () => void;
}


export type ViewModel = {
    index: number;
    pointer: JSONPointer;
    length: number;
    disabled: boolean;
    actions?: Array<Action>;
    attrs?: EditronConfigAttrs;
}


export type Options = {
    actions: Array<Action>;
    attrs?: EditronConfigAttrs;
    disabled?: boolean;
    index: number;
    length: number;
    pointer: JSONPointer;
}


export default class ArrayItemEditor {
    $element: HTMLElement;
    controller: Controller;
    editor: Editor;
    parentPointer: JSONPointer;
    viewModel: ViewModel;

    constructor(pointer: JSONPointer, controller: Controller, options) {
        // eslint-disable-next-line max-len
        this.$element = controller.createElement(".ed-child", options.attrs);
        this.controller = controller;

        this.viewModel = {
            ...options,
            pointer,
            index: ArrayItemEditor.getIndex(pointer),
        };

        this.render();

        const $target = this.$element.querySelector(EditorTarget) as HTMLElement;
        this.editor = controller.createEditor(pointer, $target);
        this.updatePointer(pointer);
    }

    disable(isDisabled = false) {
        if (this.viewModel.disabled !== isDisabled) {
            this.viewModel.disabled = isDisabled;
            this.render();
        }
    }

    updatePointer(newPointer): void {
        this.parentPointer = gp.join(newPointer, "..", true);
        this.viewModel.index = ArrayItemEditor.getIndex(newPointer);
        this.viewModel.pointer = newPointer;
        this.viewModel.length = this.controller.service("data").get(this.parentPointer).length;
        this.render();
    }

    getElement(): HTMLElement {
        return this.$element;
    }

    getPointer(): JSONPointer {
        return this.viewModel.pointer;
    }

    destroy(): void {
        if (this.viewModel == null) {
            return;
        }
        this.viewModel = null;
        this.controller.destroyEditor(this.editor);
        this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
    }

    render(): void {
        m.render(this.$element, m(ArrayItemView, this.viewModel));
    }

    static getIndex(pointer: JSONPointer): number {
        const parentPointer = gp.join(pointer, "..");
        return parseInt(pointer.replace(`${parentPointer}/`, ""));
    }
}
