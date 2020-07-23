import m from "mithril";
import TextareaForm from "mithril-material-forms/components/textareaform";
import OverlayService from "../../services/OverlayService";
import View, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { JSONPointer, JSONData } from "../../types";
import Controller from "../../Controller";
import { Editor } from "../Editor";
import AbstractEditor from "../AbstractEditor";


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
    /** hide the title */
    hideTitle?: boolean;
    /** object title from json-schema */
    title?: string;
    /** object description from json-schema */
    description?: string;
    /** adds an user-action to delete this object */
    addDelete?: boolean;
    /** if set, will add a toggle-button to show/hide its properties. Set to true, to hide it by default */
    collapsed?: boolean;
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
    oncollapse?: Function;
    collapsed?: boolean;
}


export default class ObjectEditor extends AbstractEditor {
    viewModel: ViewModel;
    // private $element: HTMLElement;
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
        super(pointer, controller, options);

        // add id to element, since no other input-form is associated with this editor...
        // @todo ...except another editron-instance
        options.attrs = { id: options.id, ...options.attrs };

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

        if (options.collapsed != null) {
            this.viewModel.oncollapse = () => {
                this.viewModel.collapsed = !this.viewModel.collapsed;
                this.render();
            }
        }

        if (options.addDelete) {
            this.viewModel.ondelete = () => controller.data().delete(pointer);
        }

        this.render();
        this.$children = this.dom.querySelector(CHILD_CONTAINER_SELECTOR);
        this.update();
    }

    updatePointer(pointer: JSONPointer) {
        const returnValue = super.updatePointer(pointer);

        if (this.viewModel == null) {
            return;
        }

        this.dom.id = pointer;
        this.options.attrs.id = pointer;

        this.viewModel.pointer = pointer;
        if (this.options.addDelete) {
            this.viewModel.ondelete = () => this.controller.data().delete(pointer);
        }

        this.childEditors.forEach(editor => editor.updatePointer(`${this.pointer}/${editor._property}`));
        this.render();

        return returnValue;
    }

    /** de/activate this editors user-interaction */
    setActive(active = true): void {
        this.viewModel.disabled = active === false;
        this.render();
    }

    update(): void {
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

    updateErrors(errors = []) {
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
        this.dom.classList.toggle("hidden", this.viewModel.collapsed === true);
        m.render(this.dom, m(View, this.viewModel));
    }

    /** destroy editor, view and event-listeners */
    destroy(): void {
        if (this.viewModel == null) {
            return;
        }

        super.destroy();
        m.render(this.dom, m("i"));

        this.childEditors.forEach(editor => editor.destroy());
        this.childEditors.length = 0;
        this.$children.innerHTML = "";
        this.viewModel = null;
    }
}
