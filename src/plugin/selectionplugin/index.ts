import Controller from "../../Controller";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";


export type Options = {
    onSelect({ pointer, editor, options }): void;
    onDeselect({ pointer, editor, options }): void;
}

interface ModifiedEditor extends Editor {
    __selectionPlugin?: {
        select: (event: MouseEvent) => void;
        options: any;
    }
}


export default class SelectionPlugin implements Plugin {
    id = "selection-plugin";

    dom: HTMLElement;
    current: Editor;
    controller: Controller;
    // onDelegation: Options["onDelegation"];

    currentSelection: ModifiedEditor;
    onSelect: Options["onSelect"];
    onDeselect: Options["onDeselect"];

    constructor(options: Options) {
        // this.onDelegation = options.onDelegation;
        this.dom = document.createElement("div");
        this.onSelect = options.onSelect;
        this.onDeselect = options.onDeselect;
    }

    initialize(controller: Controller): Plugin {
        this.controller = controller;
        document.body.addEventListener("click", () => this.deselect());
        return this;
    }

    deselect() {
        if (this.currentSelection) {
            const editor = this.currentSelection;
            editor.getElement().classList.remove("selected");
            this.onDeselect({ pointer: editor.getPointer(), editor, options: editor.__selectionPlugin.options });
            this.currentSelection = null;
        }
    }

    select(event, editor: ModifiedEditor) {
        event.stopPropagation();
        if (this.currentSelection === editor) {
            return;
        }
        this.deselect();
        this.currentSelection = editor;
        this.currentSelection.getElement().classList.add("selected");
        // console.log("add class to ", this.currentSelection.getElement());
        this.onSelect({ pointer: editor.getPointer(), editor, options: editor.__selectionPlugin.options });
    }

    onCreateEditor(pointer, editor: ModifiedEditor, options?) {
        // only register editors, that are configured as selectable, for example
        // in a json-schema, e.g. { "editron:ui": { selectable: true } }
        if (options && options.selectable) {
            editor.__selectionPlugin = {
                options,
                select: event => this.select(event, editor)
            };
            editor.getElement().addEventListener("click", editor.__selectionPlugin.select);
        }
    }

    onDestroyEditor(pointer, editor: ModifiedEditor) {
        if (editor.__selectionPlugin) {
            editor.getElement().removeEventListener("click", editor.__selectionPlugin.select);
            editor.__selectionPlugin = undefined;

            if (this.currentSelection === editor) {
                this.currentSelection = null;
            }
        }
    }
}
