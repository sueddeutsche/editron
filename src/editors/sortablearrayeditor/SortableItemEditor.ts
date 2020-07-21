import m from "mithril";
import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../Editor";


export default class ArrayItemEditor {

    index: number;
    pointer: JSONPointer;
    dom: HTMLElement;
    controller: Controller;
    editor: Editor;
    $editor: HTMLElement;

    constructor(pointer: JSONPointer, controller: Controller, options?) {
        this.pointer = pointer;

        // eslint-disable-next-line max-len
        const className = ".editron-container__child.editron-container--sortable.editron-container__child--array-item";
        this.dom = controller.createElement(className, options?.attrs);
        // this.dom.setAttribute("key", pointer.split("/").pop());
        this.controller = controller;
        this.render();

        this.$editor = this.dom.querySelector(".editron-item");
        this.editor = controller.createEditor(this.pointer, this.$editor);
    }

    render() {
        m.render(this.dom, [
            m(".editron-handle"),
            m(".editron-item", {
                onmouseup: () => console.log("click", this.pointer)
            })
        ]);
    }

    updatePointer(newPointer: JSONPointer) {
        this.pointer = newPointer;
        // @ts-ignore
        return this.editor.updatePointer(newPointer);
    }

    destroy() {

    }

    toElement() {
        return this.dom;
    }
}
