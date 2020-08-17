import m from "mithril";
import gp from "gson-pointer";
import ArrayItemView, { EditorTarget } from "./ArrayItemView";
import arrayUtils from "../../utils/array";
import { JSONPointer, EditronConfigAttrs } from "../../types";
import Controller from "../../Controller";
import { Editor } from "../Editor";


export type Options = {
    index: number;
    pointer: JSONPointer;
    length: number;
    attrs?: EditronConfigAttrs;
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
    onAdd: () => void;
    onRemove: () => void;
    onMove: () => void;
    onClone: () => void;
    attrs?: EditronConfigAttrs;
}


export default class ArrayItemEditor {
    $element: HTMLElement;
    controller: Controller;
    editor: Editor;
    parentPointer: JSONPointer;
    viewModel: ViewModel;

    constructor(pointer: JSONPointer, controller: Controller, options) {
        // eslint-disable-next-line max-len
        this.$element = controller.createElement(".editron-container__child.editron-container__child--array-item", options.attrs);
        this.controller = controller;

        const onAdd = () => this.add();
        const onRemove = () => this.remove();

        this.viewModel = {
            disabled: false,
            onAdd,
            onRemove,
            onMove: index => this.move(index),
            onClone: () => this.clone(),
            ...options
        };

        this.render();

        const $target = this.$element.querySelector(EditorTarget) as HTMLElement;
        this.editor = controller.createEditor(pointer, $target, {
            ondelete: onRemove
        });

        this.updatePointer(pointer);
    }

    render(): void {
        m.render(this.$element, m(ArrayItemView, this.viewModel));
    }

    add(): void {
        arrayUtils.addItem(this.parentPointer, this.controller, this.viewModel.index + 1);
    }

    clone(): void {
        arrayUtils.cloneItem(this.parentPointer, this.controller, this.viewModel.index);
    }

    remove(): void {
        arrayUtils.removeItem(this.parentPointer, this.controller, this.viewModel.index);
    }

    move(to: number): void {
        arrayUtils.moveItem(this.parentPointer, this.controller, this.viewModel.index, to);
    }

    updatePointer(newPointer): void {
        this.parentPointer = gp.join(newPointer, "..", true);
        this.viewModel.index = ArrayItemEditor.getIndex(newPointer);
        this.viewModel.pointer = newPointer;
        this.viewModel.length = this.controller.service("data").get(this.parentPointer).length;
        this.render();
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
        this.controller.destroyEditor(this.editor);
        this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
    }

    static getIndex(pointer: JSONPointer): number {
        const parentPointer = gp.join(pointer, "..");
        return parseInt(pointer.replace(`${parentPointer}/`, ""));
    }
}
