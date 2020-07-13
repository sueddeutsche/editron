import m from "mithril";
import TextareaForm from "mithril-material-forms/components/textareaform";
import OverlayService from "../../services/OverlayService";
import View from "../../components/container";
import { JSONPointer, JSONData } from "../../src/types";
import Controller from "../../src/Controller";


function showJSON(controller: Controller, data: JSONData, title: string) {
    const element = controller.createElement(".overlay__item.overlay__item--json");
    OverlayService.open(element, { ok: true, save: false });
    // render textarea after it is injected into dom, to correctly update textarea size
    m.render(element, m(TextareaForm, { title, value: JSON.stringify(data, null, 4) }));
}


export type Options = {
    id?: string;
    attrs?: object;
    icon?: string;
    hideTitle?: boolean;
    title?: string;
    description?: string;
    addDelete?: boolean;
}

export type ViewModel = {
    pointer: JSONPointer;
    icon?: string;
    errors: Array<any>;
    attrs: { [p: string]: any };
    hideTitle?: boolean;
    title?: string;
    description?: string;
    disabled?: boolean;
    ondelete?: Function;
}


export default class ObjectEditor {
    viewModel: ViewModel;
    private $element: HTMLElement;
    pointer: JSONPointer;
    options;
    controller;
    childEditors: Array<any>;
    $children: HTMLElement;

    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.schema().get(pointer);
        return schema.type === "object";
    }

    constructor(pointer: JSONPointer, controller: Controller, options: Options = {}) {
        // add id to element, since no other input-form is associated with this editor...
        // @todo ...except another editron-instance
        options.attrs = Object.assign({ id: options.id }, options.attrs);

        this.$element = controller.createElement(".editron-container.editron-container--object", options.attrs);
        this.pointer = pointer;
        this.options = options;
        this.controller = controller;
        this.childEditors = [];
        this.viewModel = {
            pointer,
            icon: options.icon,
            errors: [],
            attrs: {},
            hideTitle: options.hideTitle,
            title: options.title,
            description: options.description,
            ...options
        };

        if (options.addDelete) {
            this.viewModel.ondelete = () => controller.data().delete(pointer);
        }

        this.rebuildChildren = controller.data().observe(pointer, this.rebuildChildren.bind(this));
        this.setErrors = controller.validator().observe(pointer, this.setErrors.bind(this));

        this.setErrors(controller.validator().getErrorsAndWarnings(pointer));
        this.render();
        this.$children = this.$element.querySelector(View.childContainerSelector);
        this.rebuildChildren();
    }

    updatePointer(pointer: JSONPointer) {
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
            this.viewModel.ondelete = () => controller.data().delete(pointer);
        }
        controller.data().removeObserver(oldPointer, this.rebuildChildren);
        controller.validator().removeObserver(oldPointer, this.setErrors);
        controller.data().observe(pointer, this.rebuildChildren);
        controller.validator().observe(pointer, this.setErrors);
        this.childEditors.forEach(editor => editor.updatePointer(`${this.pointer}/${editor._property}`));

        this.render();
    }

    /** de/activate this editors user-interaction */
    setActive(active = true): void {
        this.viewModel.disabled = active === false;
        this.render();
    }

    update(): void {
        this.rebuildChildren();
    }

    rebuildChildren(): void {
        if (this.viewModel == null) {
            console.error(`destroyed ObjectEditor receives an update event
                - this may be invoked through oneOf-Editor`, this);
            return;
        }

        // fetch latest data
        const data = this.controller.data().get(this.pointer);
        // destroy child editor
        this.childEditors.forEach(editor => editor.destroy());
        this.childEditors.length = 0;
        // clear html
        this.$children.innerHTML = "";
        // rebuild children
        if (data) {
            Object.keys(data).forEach(property => {
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
        const data = this.controller.data().get(this.pointer);
        delete data[property];
        this.controller.data().set(this.pointer, data);
    }

    showProperty(property) {
        const propertyData = this.controller.data().get(`${this.pointer}/${property}`);
        showJSON(this.controller, propertyData, property);
    }

    setErrors(errors = []) {
        // if we receive errors here, a property may be missing (which should go to schema.getTemplate) or additional,
        // but prohibited properties exist. For the latter, add an option to show and/or delete the property. Within
        // arrays this should come per default, as the may insert in add items...
        this.viewModel.errors = errors.map(error => {
            if (error.code === "no-additional-properties-error") {
                const message = error.message;
                const property = error.data.property;
                return {
                    severity: error.type || "error",
                    message: m(".editron-error.editron-error--object-property",
                        m("span", m.trust(message)),
                        m("a.mmf-icon", { onclick: () => this.showProperty(property) }, "visibility"),
                        m("a.mmf-icon", { onclick: () => this.deleteProperty(property) }, "clear")
                    )
                };
            }
            return error;
        });
        this.render();
    }

    render(): void {
        m.render(this.$element, m(View, this.viewModel));
    }

    toElement(): HTMLElement {
        return this.$element;
    }

    getPointer(): JSONPointer {
        return this.pointer;
    }

    /** destroy editor, view and event-listeners */
    destroy(): void {
        if (this.viewModel == null) {
            return;
        }
        this.controller.removeInstance(this);

        m.render(this.$element, m("i"));
        this.controller.data().removeObserver(this.pointer, this.rebuildChildren);
        this.controller.validator().removeObserver(this.pointer, this.setErrors);

        this.childEditors.forEach(editor => editor.destroy());
        this.childEditors.length = 0;
        this.$children.innerHTML = "";
        this.viewModel = null;
    }
}
