/**
 * The SelectionPlugin will add a selection api for editors, that have a
 * json-schema option set to `selectable: true`, e.g.:
 *
 * ```js
 * {
 *   type: "object",
 *   "editron:ui": {
 *     selectable: true
 *   }
 * }
 * ```
 */
export default class SelectionPlugin {
    constructor(options) {
        this.id = "selection-plugin";
        this.dom = document.createElement("div");
        this.onSelect = options.onSelect;
        this.onDeselect = options.onDeselect;
    }
    initialize(editron) {
        this.editron = editron;
        this.deselect = this.deselect.bind(this);
        document.body.addEventListener("click", this.deselect);
    }
    deselect() {
        if (this.currentSelection == null) {
            return;
        }
        const editor = this.currentSelection;
        editor.getElement().classList.remove("selected");
        this.onDeselect({ pointer: editor.getPointer(), editor, options: editor.__selectionPlugin.options });
        this.currentSelection = null;
    }
    select(editor) {
        if (this.currentSelection === editor) {
            return;
        }
        this.deselect();
        this.currentSelection = editor;
        this.currentSelection.getElement().classList.add("selected");
        this.onSelect({ pointer: editor.getPointer(), editor, options: editor.__selectionPlugin.options });
    }
    onCreateEditor(pointer, editor, options) {
        // only register editors, that are configured as selectable, for example
        // in a json-schema, e.g. { "editron:ui": { selectable: true } }
        if ((options === null || options === void 0 ? void 0 : options.selectable) !== true) {
            return;
        }
        editor.__selectionPlugin = {
            options,
            select: event => {
                // prevent click events going to document.body (which runs deselect)
                event.stopPropagation();
                this.select(editor);
            }
        };
        editor.getElement().addEventListener("click", editor.__selectionPlugin.select);
    }
    onDestroyEditor(pointer, editor) {
        if (editor.__selectionPlugin == null) {
            return;
        }
        editor.getElement().removeEventListener("click", editor.__selectionPlugin.select);
        editor.__selectionPlugin = undefined;
        if (this.currentSelection === editor) {
            this.deselect();
        }
    }
    destroy() {
        document.body.removeEventListener("click", this.deselect);
    }
}
