const m = require("mithril");
const TextareaForm = require("mithril-material-forms/components/textareaform");
const OverlayService = require("../../services/OverlayService");
const View = require("../../components/container");


function showJSON(controller, data, title) {
    const element = controller.createElement(".overlay__item.overlay__item--json");
    OverlayService.open(element, { ok: true, save: false });
    // render textarea after it is injected into dom, to correctly update textarea size
    m.render(element, m(TextareaForm, { title, value: JSON.stringify(data, null, 4) }));
}


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
            attrs: {},
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

        controller
            .validator()
            .getErrorsAndWarnings(pointer)
            .forEach((error) => this.addError(error));

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
                }
            });
        }

        this.render();
    }

    deleteProperty(property) {
        console.log("DELETE PROPERTY", property);
        const data = this.controller.data().get(this.pointer);
        delete data[property];
        this.controller.data().set(this.pointer, data);
    }

    showProperty(property) {
        const propertyData = this.controller.data().get(`${this.pointer}/${property}`);
        showJSON(this.controller, propertyData, property);
    }

    addError(error) {
        // if we receive errors here, a property may be missing (which should go to schema.getTemplate) or additional,
        // but prohibited properties exist. For the latter, add an option to show and/or delete the property. Within
        // arrays this should come per default, as the may insert in add items...
        if (error.code === "no-additional-properties-error") {
            const message = error.message;
            const property = error.data.property;
            error = {
                severity: error.type || "error",
                message: m(".editron-error.editron-error--object-property",
                    m("span", m.trust(message)),
                    m("a.mmf-icon", { onclick: () => this.showProperty(property) }, "visibility"),
                    m("a.mmf-icon", { onclick: () => this.deleteProperty(property) }, "clear")
                )
            };
        }

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
