export default class SelectionPlugin {
    constructor(options) {
        this.id = "selection-plugin";
        // this.onDelegation = options.onDelegation;
        this.dom = document.createElement("div");
        this.onSelect = options.onSelect;
        this.onDeselect = options.onDeselect;
    }
    initialize(controller) {
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
    select(event, editor) {
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
    onCreateEditor(pointer, editor, options) {
        if (options && options.selectable) {
            editor.__selectionPlugin = {
                options,
                select: event => this.select(event, editor)
            };
            editor.getElement().addEventListener("click", editor.__selectionPlugin.select);
        }
    }
    onDestroyEditor(pointer, editor) {
        if (editor.__selectionPlugin) {
            editor.getElement().removeEventListener("click", editor.__selectionPlugin.select);
            editor.__selectionPlugin = undefined;
            if (this.currentSelection === editor) {
                this.currentSelection = null;
            }
        }
    }
}
