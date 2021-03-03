import m from "mithril";
import { TextareaForm } from "mithril-material-forms";
import OverlayService from "../../services/OverlayService";
import Container, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { CHILD_CONTAINER_SELECTOR as HEADER_CONTAINER_SELECTOR } from "../../components/header";
import { JSONPointer, JSONData } from "../../types";
import Editron from "../../Editron";
import { Editor, Options as EditorOptions, EditorUpdateEvent } from "../Editor";
import AbstractEditor from "../AbstractEditor";
import { Action } from "../../components/actions";


function showJSON(editron: Editron, data: JSONData, title: string) {
    const element = editron.createElement(".overlay__item.overlay__item--json");
    OverlayService.open(element, { confirmButton: "ok" });
    // render textarea after it is injected into dom, to correctly update textarea size
    m.render(element, m(TextareaForm, { title, value: JSON.stringify(data, null, 4) }));
}


export type EditronSchemaOptions = {
    /** theme option, passed to value-editors */
    theme?: string;

    object?: {
        /** adds an user-action to delete this object */
        delete?: boolean;
        /** if set, will ad a collapse option with its initial collpased state set to given value */
        collapsed?: boolean;
        /** show arrow icon to controll visibility */
        collapseIcon?: string; // "keyboard_arrow_down"
        collapsedIcon?: string; // "keyboard_arrow_right"
        headerContent?: string;
    }
}


// export const defaultOptions = {
//     collapseIcon: "visibility_off",
//     collapsedIcon: "visibility"
// };


export type Options = EditorOptions & EditronSchemaOptions;


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
    headerContent?: string;
    oncollapse?: () => void;
    ondelete?: () => void;
    pointer: JSONPointer;
    title?: string;
    actions: Array<Action>;
}


export default class ObjectEditor extends AbstractEditor {
    viewModel: ViewModel;
    options: Options;
    childEditors: Array<Editor> = [];
    $children: HTMLElement;
    $headerChildren: HTMLElement;
    childOptions: { theme?: string, disabled?: boolean };


    static editorOf(pointer: JSONPointer, editron: Editron) {
        const schema = editron.service("schema").get(pointer);
        return schema.type === "object";
    }

    constructor(pointer: JSONPointer, editron: Editron, options: Options) {
        super(pointer, editron, options);

        this.viewModel = {
            pointer,
            errors: [],
            ...options,
            attrs: options.attrs || {},
            actions: [...options.actions || []]
        };

        if (options.object?.delete) {
            this.viewModel.actions.push({
                icon: "delete",
                classNames: "ed-action--delete",
                disabled: () => this.viewModel.disabled,
                action: this.deleteObject.bind(this)
            });
        }


        this.childOptions = {};
        if (options.disabled) {
            this.childOptions.disabled = true;
        }
        if (options.theme) {
            this.childOptions.theme = options.theme;
        }

        if (options.object?.collapsed != null) {
            this.dom.classList.add("is-collapsible");
            this.dom.classList.toggle("is-collapsed", this.viewModel.collapsed === true);

            const collapsedIcon = options.object?.collapseIcon || "visibility_off";
            const collapseIcon = options.object?.collapsedIcon || "visibility";

            const action: Action = {
                icon: this.viewModel.collapsed ? collapsedIcon : collapseIcon,
                classNames: "ed-action--collapse",
                disabled: () => this.viewModel.disabled,
                action: () => {
                    this.viewModel.collapsed = !this.viewModel.collapsed;
                    action.icon = this.viewModel.collapsed ? collapsedIcon : collapseIcon,
                    this.dom.classList.toggle("is-collapsed", this.viewModel.collapsed === true);
                    this.render(); // redraw container, to update header collapse-icon
                }
            };

            this.viewModel.actions.push(action);
        }

        this.render();
        this.$children = this.dom.querySelector(CHILD_CONTAINER_SELECTOR);
        this.$headerChildren = this.dom.querySelector(HEADER_CONTAINER_SELECTOR);
        this.update({ type: "data:update", value: null });
    }

    update(event: EditorUpdateEvent) {
        if (this.viewModel == null) {
            console.log("%c abort update OBJECT", "background: yellow;", event);
            return;
        }

        switch (event.type) {
            case "data:update": {
                const { pointer, editron, childEditors, $headerChildren, $children } = this;
                const { headerContent } = this.viewModel;
                const data = this.getData();
                childEditors.forEach(editor => editron.destroyEditor(editor));
                childEditors.length = 0;
                $children.innerHTML = "";
                if (data == null) {
                    break;
                }
                // rebuild children
                Object.keys(data)
                    .forEach(property => {
                        const childPointer = `${pointer}/${property}`;
                        const targetContainer = property === headerContent ? $headerChildren : $children;
                        childEditors.push(editron.createEditor(childPointer, targetContainer, this.childOptions));
                    });
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
        this.editron.service("data").delete(this.pointer);
    }

    /** deletes a property from this object */
    deleteProperty(property: string): void {
        this.editron.service("data").delete(`${this.pointer}/${property}`);
    }

    /** displays the properties json-value */
    showProperty(property: string): void {
        const propertyData = this.editron.service("data").get(`${this.pointer}/${property}`);
        showJSON(this.editron, propertyData, property);
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
        this.childEditors.forEach(ed => this.editron.destroyEditor(ed));
        this.childEditors.length = 0;
        this.$children.innerHTML = "";
        this.viewModel = null;
    }
}
