import m from "mithril";
import { TextareaForm } from "mithril-material-forms";
import OverlayService from "../../services/OverlayService";
import Container, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { CHILD_CONTAINER_SELECTOR as HEADER_CONTAINER_SELECTOR } from "../../components/header";
import AbstractEditor from "../AbstractEditor";
function showJSON(controller, data, title) {
    const element = controller.createElement(".overlay__item.overlay__item--json");
    OverlayService.open(element, { confirmButton: "ok" });
    // render textarea after it is injected into dom, to correctly update textarea size
    m.render(element, m(TextareaForm, { title, value: JSON.stringify(data, null, 4) }));
}
export default class ObjectEditor extends AbstractEditor {
    constructor(pointer, controller, options) {
        var _a, _b, _c, _d;
        super(pointer, controller, options);
        this.childEditors = [];
        this.viewModel = {
            pointer,
            errors: [],
            ...options,
            attrs: options.attrs || {},
            actions: [...options.actions || []]
        };
        if ((_a = options.object) === null || _a === void 0 ? void 0 : _a.delete) {
            this.viewModel.actions.push({
                icon: "delete",
                classNames: "ed-action--delete",
                disabled: () => this.viewModel.disabled,
                action: this.deleteObject.bind(this)
            });
        }
        this.childOptions = {};
        if (options.theme) {
            this.childOptions.theme = options.theme;
        }
        if (((_b = options.object) === null || _b === void 0 ? void 0 : _b.collapsed) != null) {
            // this.viewModel.collapsed = options.object.collapsed;
            this.dom.classList.add("is-collapsible");
            this.dom.classList.toggle("is-collapsed", this.viewModel.collapsed === true);
            const collapsedIcon = ((_c = options.object) === null || _c === void 0 ? void 0 : _c.collapseArrowIcon) ? "keyboard_arrow_right" : "visibility_off";
            const collapseIcon = ((_d = options.object) === null || _d === void 0 ? void 0 : _d.collapseArrowIcon) ? "keyboard_arrow_down" : "visibility";
            const action = {
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
    static editorOf(pointer, controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type === "object";
    }
    update(event) {
        if (this.viewModel == null) {
            console.log("%c abort update OBJECT", "background: yellow;", event);
            return;
        }
        switch (event.type) {
            case "data:update": {
                const { pointer, controller, childEditors, $headerChildren, $children } = this;
                const { headerContent } = this.viewModel;
                const data = this.getData();
                childEditors.forEach(editor => controller.destroyEditor(editor));
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
                    childEditors.push(controller.createEditor(childPointer, targetContainer, this.childOptions));
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
                        message: m(".ed-error.ed-error--object-property", m("span", m.trust(message)), m("a.mmf-icon.interactive", { onclick: () => this.showProperty(property) }, "visibility"), m("a.mmf-icon.interactive", { onclick: () => this.deleteProperty(property) }, "clear"))
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
    deleteProperty(property) {
        this.controller.service("data").delete(`${this.pointer}/${property}`);
    }
    /** displays the properties json-value */
    showProperty(property) {
        const propertyData = this.controller.service("data").get(`${this.pointer}/${property}`);
        showJSON(this.controller, propertyData, property);
    }
    render() {
        m.render(this.dom, m(Container, this.viewModel));
    }
    /** destroy editor, view and event-listeners */
    destroy() {
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
