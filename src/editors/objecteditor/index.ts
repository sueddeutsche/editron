import m from "mithril";
import TextareaForm from "mithril-material-forms/components/textareaform";
import OverlayService from "../../services/OverlayService";
import Container, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { JSONPointer, JSONData } from "../../types";
import Controller from "../../Controller";
import { Editor, EditorUpdateEvent } from "../Editor";
import AbstractEditor from "../AbstractEditor";


function showJSON(controller: Controller, data: JSONData, title: string) {
    const element = controller.createElement(".overlay__item.overlay__item--json");
    OverlayService.open(element, { confirmButton: "ok" });
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
    oncollapse?: () => void;
    ondelete?: () => void;
    pointer: JSONPointer;
    title?: string;
}


export default class ObjectEditor extends AbstractEditor {
    viewModel: ViewModel;
    options: Options;
    childEditors: Array<Editor> = [];
    $children: HTMLElement;

    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type === "object";
    }

    constructor(pointer: JSONPointer, controller: Controller, options: Options = {}) {
        super(pointer, controller, options);

        this.viewModel = {
            pointer,
            errors: [],
            ...options,
            attrs: options.attrs || {}
        };

        if (options.collapsed != null) {
            this.viewModel.oncollapse = () => {
                this.viewModel.collapsed = !this.viewModel.collapsed;
                this.dom.classList.toggle("collapsed", this.viewModel.collapsed === true);
                this.render(); // redraw container, to update header collapse-icon
            };
            this.dom.classList.add("collapsible");
            this.dom.classList.toggle("collapsed", this.viewModel.collapsed === true);
        }

        if (options.addDelete) {
            this.viewModel.ondelete = this.deleteObject.bind(this);
        }

        this.render();
        this.$children = this.dom.querySelector(CHILD_CONTAINER_SELECTOR);
        this.update({ type: "data:update", value: null });
    }

    update(event: EditorUpdateEvent) {
        if (this.viewModel == null) {
            console.log("%c abort update OBJECT", "background: yellow;", event);
            return;
        }

        switch (event.type) {
            case "data:update": {
                const { pointer, controller, childEditors, $children } = this;
                const data = this.getData();
                childEditors.forEach(editor => controller.destroyEditor(editor));
                childEditors.length = 0;
                $children.innerHTML = "";
                if (data == null) {
                    break;
                }
                // rebuild children
                Object.keys(data)
                    .forEach(property =>
                        childEditors.push(controller.createEditor(`${pointer}/${property}`, $children))
                    );
                break;
            }

            // if we receive errors here, a property may be missing (which should go to schema.getTemplate)
            // or additional, but prohibited properties exist. For the latter, add an option to show and/or
            // delete the property
            case "validation:errors": {
                this.viewModel.errors = event.value.map(error => {
                    if (error.code !== "no-additional-properties-error") {
                        return error;
                    }
                    const message = error.message;
                    const property = error.data.property;
                    return {
                        severity: error.type || "error",
                        message: m(".ed-error.ed-error--object-property",
                            m("span", m.trust(message)),
                            m("a.mmf-icon.interactive", { onclick: () => this.showProperty(property) }, "visibility"),
                            m("a.mmf-icon.interactive", { onclick: () => this.deleteProperty(property) }, "clear")
                        )
                    };
                });
                break;
            }

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
    deleteObject() {
        this.controller.service("data").delete(this.pointer);
    }

    /** deletes a property from this object */
    deleteProperty(property: string): void {
        this.controller.service("data").delete(`${this.pointer}/${property}`);
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

        m.render(this.dom, m("i"));
        this.childEditors.forEach(ed => this.controller.destroyEditor(ed));
        this.childEditors.length = 0;
        this.$children.innerHTML = "";
        this.viewModel = null;
    }
}
