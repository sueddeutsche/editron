const m = require("mithril");
const View = require("../../components/container");


class ObjectEditor {

    static editorOf(pointer, controller) {
        const schema = controller.schema().get(pointer);
        return schema.type === "object";
    }

    constructor(pointer, controller, options = {}) {
        // add id to element, since no other input-form is associated with this editor
        options.attrs = Object.assign({ id: options.id }, options.attrs);

        this.$element = controller.createElement(".editron-container.editron-container--object", options.attrs);
        this.pointer = pointer;
        this.options = options;
        this.controller = controller;
        this.childEditors = [];
        this.viewModel = Object.assign({
            pointer,
            icon: options.icon,
            errors: [],
            hideTitle: options.hideTitle,
            title: options.title,
            description: options.description
        }, options);

        if (options.addDelete) {
            this.viewModel.ondelete = () => controller.data().delete(pointer);
        }

        this.rebuildChildren = controller.data().observe(pointer, this.rebuildChildren.bind(this));
        this.addError = controller.validator().observe(pointer, this.addError.bind(this));
        this.clearErrors = controller.validator().on("beforeValidation", this.clearErrors.bind(this));

        this.render();
        this.$children = this.$element.querySelector(View.childContainerSelector);
        this.rebuildChildren();
    }

    updatePointer(pointer) {
        if (this.pointer === pointer || this.viewModel == null) {
            return;
        }

        this.controller.changePointer(pointer, this);

        const oldPointer = this.pointer;
        this.$element.id = pointer;
        // console.info(`object update pointer ${oldPointer} -> ${pointer}`);

        const controller = this.controller;
        this.options.attrs.id = pointer;
        this.pointer = pointer;
        this.viewModel.pointer = pointer;
        if (this.options.addDelete) {
            // console.log("Update ondelete", pointer);
            this.viewModel.ondelete = () => controller.data().delete(pointer);
        }
        controller.data().removeObserver(oldPointer, this.rebuildChildren);
        controller.validator().removeObserver(oldPointer, this.addError);
        controller.data().observe(pointer, this.rebuildChildren);
        controller.validator().observe(pointer, this.addError);

        this.childEditors.forEach((editor) => {
            editor.updatePointer(`${this.pointer}/${editor._property}`);
        });

        this.render();
    }

    update() {
        this.rebuildChildren();
    }

    rebuildChildren() {
        if (this.viewModel == null) {
            console.error("destroyed ObjectEditor receives an update event - this may be invoked through oneOf-Editor", this);
            return;
        }

        // fetch latest data
        const data = this.controller.data().get(this.pointer);
        // destroy child editor
        this.childEditors.forEach((editor) => editor.destroy());
        this.childEditors.length = 0;
        // clear html
        this.$children.innerHTML = "";
        // rebuild children
        if (data) {
            Object.keys(data).forEach((property) => {
                const editor = this.controller.createEditor(`${this.pointer}/${property}`, this.$children);
                if (editor) {
                    editor._property = property;
                    this.childEditors.push(editor);
                    // console.log("add editor", editor.pointer);
                }
            });
        }

        this.render();
    }

    addError(error) {
        this.viewModel.errors.push(error);
        this.render();
    }

    clearErrors() {
        this.viewModel.errors.length = 0;
        this.render();
    }

    render() {
        m.render(this.$element, m(View, this.viewModel));
    }

    toElement() {
        return this.$element;
    }

    getPointer() {
        return this.pointer;
    }

    destroy() {
        if (this.viewModel) {
            this.controller.removeEditor(this);

            m.render(this.$element, m("i"));
            this.controller.data().removeObserver(this.pointer, this.rebuildChildren);
            this.controller.validator().removeObserver(this.pointer, this.addError);
            this.controller.validator().off("beforeValidation", this.clearErrors);

            this.childEditors.forEach((editor) => editor.destroy());
            this.childEditors.length = 0;
            this.$children.innerHTML = "";
            this.viewModel = null;
        }
    }
}


module.exports = ObjectEditor;
