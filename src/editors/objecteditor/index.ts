import m from "mithril";
import TextareaForm from "mithril-material-forms/components/textareaform";
import OverlayService from "../../services/OverlayService";
import Container, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { JSONPointer, JSONData } from "../../types";
import Controller from "../../Controller";
import { Editor, EditorUpdateEvent } from "../Editor";
import AbstractEditor from "../AbstractEditor";
import { ValidationError } from "../../types";


function showJSON(controller: Controller, data: JSONData, title: string) {
    const element = controller.createElement(".overlay__item.overlay__item--json");
    OverlayService.open(element, { ok: true, save: false });
    // render textarea after it is injected into dom, to correctly update textarea size
    m.render(element, m(TextareaForm, { title, value: JSON.stringify(data, null, 4) }));
}


export type Options = {
    attrs?: { [p: string]: any };
    /** icon to display in object-header */
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
    attrs: {
        [p: string]: any
    };
    collapsed?: boolean;
    description?: string;
    disabled?: boolean;
    errors: Array<any>;
    hideTitle?: boolean;
    icon?: string;
    oncollapse?: Function;
    ondelete?: Function;
    pointer: JSONPointer;
    title?: string;
}


export default class ObjectEditor extends AbstractEditor {
    viewModel: ViewModel;
    options: Options;
    childEditors: Array<Editor>;
    $children: HTMLElement;

    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type === "object";
    }

    constructor(pointer: JSONPointer, controller: Controller, options: Options = {}) {
        super(pointer, controller, options);

        // add id to element, since no other input-form is associated with this editor...
        // @todo ...except another editron-instance
        options.attrs = { ...options.attrs };

        this.childEditors = [];
        this.viewModel = {
            pointer,
            errors: [],
            ...options,
            attrs: options.attrs || {},
        };

        if (options.collapsed != null) {
            this.viewModel.oncollapse = () => {
                this.viewModel.collapsed = !this.viewModel.collapsed;
                this.dom.classList.toggle("hidden", this.viewModel.collapsed === true);
                this.render(); // redraw container, to update header collapse-icon
            }
            this.dom.classList.add("collapsible");
            this.dom.classList.toggle("hidden", this.viewModel.collapsed === true);
        }

        if (options.addDelete) {
            this.viewModel.ondelete = this.delete;
        }

        this.render();
        this.$children = this.dom.querySelector(CHILD_CONTAINER_SELECTOR);
        this.update({ type: "data:update", value: null });
    }

    update(event: EditorUpdateEvent) {
        if (this.viewModel == null) {
            return;
        }

        switch (event.type) {
            case "data:update":
                const data = this.getData();
                // destroy child editor
                this.childEditors.forEach(editor => this.controller.destroyEditor(editor));
                this.childEditors.length = 0;
                // clear html
                this.$children.innerHTML = "";
                if (data == null) {
                    break;
                }
                // rebuild children
                Object.keys(data).forEach(property => {
                    this.childEditors.push(this.controller.createEditor(`${this.pointer}/${property}`, this.$children));
                });
                break;

            case "validation:errors":
                const errors = event.value;
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
                break;

            case "pointer":
                this.viewModel.pointer = event.value;
                break;

            case "active":
                /** de/activate this editors user-interaction */
                this.viewModel.disabled = !event.value;
                break;
        }

        this.render();
    }

    /** deletes this object from data */
    delete() {
        this.controller.service("data").delete(this.pointer)
    }

    /** deletes a property from this object */
    deleteProperty(property: string): void {
        const data = this.controller.service("data").get(this.pointer);
        delete data[property];
        this.controller.service("data").set(this.pointer, data);
    }

    /** displays the properties json-value */
    showProperty(property: string): void {
        const propertyData = this.controller.service("data").get(`${this.pointer}/${property}`);
        showJSON(this.controller, propertyData, property);
    }

    render(): void {
        m.render(this.dom, m(Container, this.viewModel));
    }

    /** destroy editor, view and event-listeners */
    destroy(): void {
        if (this.viewModel == null) {
            return;
        }

        super.destroy();
        m.render(this.dom, m("i"));
        this.childEditors.forEach(ed => this.controller.destroyEditor(ed));
        this.childEditors.length = 0;
        this.$children.innerHTML = "";
        this.viewModel = null;
    }
}
