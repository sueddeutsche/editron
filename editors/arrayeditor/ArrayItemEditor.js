const m = require("mithril");
const gp = require("gson-pointer");
const ArrayItemView = require("./ArrayItemView");
const arrayUtils = require("../../utils/array");


class ArrayItemEditor {

    constructor(pointer, controller, options = {}) {
        // eslint-disable-next-line max-len
        this.$element = controller.createElement(".editron-container__child.editron-container__child--array-item", options.attrs);
        this.controller = controller;

        this.onAdd = () => this.add();
        this.onRemove = () => this.remove();

        this.viewModel = Object.assign({
            onadd: this.onAdd,
            onremove: this.onRemove,
            onmove: (index) => this.move(index)
        }, options);

        this.render();

        const $target = this.$element.querySelector(ArrayItemView.editorTarget);
        this.editor = controller.createEditor(pointer, $target, {
            ondelete: this.onRemove
        });

        this.updatePointer(pointer);
    }

    render() {
        m.render(this.$element, m(ArrayItemView, this.viewModel));
    }

    add() {
        arrayUtils.addItem(this.parentPointer, this.controller, this.viewModel.index + 1);
    }

    remove() {
        arrayUtils.removeItem(this.parentPointer, this.controller, this.viewModel.index);
    }

    move(to) {
        arrayUtils.moveItem(this.parentPointer, this.controller, this.viewModel.index, to);
    }

    updatePointer(newPointer) {
        this.parentPointer = gp.join(newPointer, "..");
        this.viewModel.index = ArrayItemEditor.getIndex(newPointer);
        this.viewModel.pointer = newPointer;
        this.viewModel.length = this.controller.data().get(this.parentPointer).length;
        this.render();
        this.editor && this.editor.updatePointer(newPointer);
    }

    toElement() {
        return this.$element;
    }

    getPointer() {
        return this.viewModel.pointer;
    }

    destroy() {
        if (this.viewModel) {
            this.viewModel = null;
            this.editor && this.editor.destroy();
            this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
        }
    }

    static getIndex(pointer) {
        const parentPointer = gp.join(pointer, "..");
        return parseInt(pointer.replace(`${parentPointer}/`, ""));
    }
}


module.exports = ArrayItemEditor;
