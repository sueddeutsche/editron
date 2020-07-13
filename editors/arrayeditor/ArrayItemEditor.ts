import m from "mithril";
import gp from "gson-pointer";
import ArrayItemView, { EditorTarget } from "./ArrayItemView";
import arrayUtils from "../../utils/array";
import { JSONPointer, EditronConfigAttrs } from "../../src/types";
import Controller from "../../src/Controller";


export type Options = {
    index: number;
    pointer: JSONPointer;
    length: number;
    attrs?: EditronConfigAttrs;
    disabled?: boolean;
    onadd?: () => void;
    onremove?: () => void;
    onmove?: () => void;
}


export type ViewModel = {
    index: number;
    pointer: JSONPointer;
    length: number;
    disabled: boolean;
    onadd: () => void;
    onremove: () => void;
    onmove: () => void;
    attrs?: EditronConfigAttrs;
}


export default class ArrayItemEditor {
    $element: HTMLElement;
    controller: Controller;
    editor;
    parentPointer: JSONPointer;
    viewModel: ViewModel;

    constructor(pointer: JSONPointer, controller: Controller, options) {
        // eslint-disable-next-line max-len
        this.$element = controller.createElement(".editron-container__child.editron-container__child--array-item", options.attrs);
        this.controller = controller;

        const onadd = () => this.add();
        const onremove = () => this.remove();

        this.viewModel = {
            disabled: false,
            onadd,
            onremove,
            onmove: index => this.move(index),
            ...options
        };

        this.render();

        const $target = this.$element.querySelector(EditorTarget) as HTMLElement;
        this.editor = controller.createEditor(pointer, $target, {
            ondelete: onremove
        });

        this.updatePointer(pointer);
    }

    render(): void {
        m.render(this.$element, m(ArrayItemView, this.viewModel));
    }

    add(): void {
        arrayUtils.addItem(this.parentPointer, this.controller, this.viewModel.index + 1);
    }

    remove(): void {
        arrayUtils.removeItem(this.parentPointer, this.controller, this.viewModel.index);
    }

    move(to): void {
        arrayUtils.moveItem(this.parentPointer, this.controller, this.viewModel.index, to);
    }

    updatePointer(newPointer): void {
        this.parentPointer = gp.join(newPointer, "..", true);
        this.viewModel.index = ArrayItemEditor.getIndex(newPointer);
        this.viewModel.pointer = newPointer;
        this.viewModel.length = this.controller.data().get(this.parentPointer).length;
        this.render();
        this.editor && this.editor.updatePointer(newPointer);
    }

    toElement(): HTMLElement {
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
        this.editor && this.editor.destroy();
        this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
    }

    static getIndex(pointer: JSONPointer): number {
        const parentPointer = gp.join(pointer, "..");
        return parseInt(pointer.replace(`${parentPointer}/`, ""));
    }
}
