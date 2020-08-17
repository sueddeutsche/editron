import m from "mithril";
import getId from "../utils/getID";
import { JSONPointer, JSONSchema, ValidationError } from "../types";
import Controller from "../Controller";
import { Editor } from "./Editor";


const convert = {

    boolean(value): boolean {
        if (value === "true") {
            return true;
        }
        if (value === "false") {
            return false;
        }
        return value;
    },

    integer(value): number {
        const converted = parseInt(value);
        if (isNaN(converted) === false) {
            return converted;
        }
        return value;
    },

    number(value): number {
        const converted = parseFloat(value);
        if (isNaN(converted) === false) {
            return converted;
        }
        return value;
    }
};


export type ViewModel = {
    pointer: JSONPointer;
    id: string;
    title?: string;
    description?: string;
    disabled?: boolean;
    value?;
    instantUpdate?: boolean;
    schema: JSONSchema;
    options;
    errors: Array<string|ValidationError>;
    onfocus: () => void;
    onblur: () => void;
    onchange: (value) => void;
}


/**
 * Convenience class, which registers required events and base methods for value-editors (not object, array)
 *
 * Usage
 * ```js
 *      MyValueEditor extends AbstractValueEditor {
 *          constructor(pointer, controller, options) {
 *              super(pointer, controller, options);
 *              this.render();
 *          }
 *          render() {
 *              m.render(this.$element, m(MyView, this.viewModel));
 *          }
 *      }
 * ```
 */
export default class AbstractValueEditor implements Editor {
    controller: Controller;
    $element: HTMLElement;
    viewModel: ViewModel;
    notifyNestedChanges = false;
    options;

    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type !== "object" && schema.type !== "array";
    }

    /**
     * #options
     *      - editorValueType:String - custom type of editor value (added as classname)
     *      - editorElementProperties:Object - add custom properties to main DOM-element
     *      - viewModel:Object - viewModel which extends base viewmodel
     *
     * @param  {String} pointer         - json pointer to value
     * @param  {Controller} controller  - json editor controller
     * @param  {Object} options
     */
    constructor(pointer: JSONPointer, controller: Controller, options) {
        this.controller = controller;
        this.options = options;
        this.notifyNestedChanges = options.notifyNestedChanges || this.notifyNestedChanges;

        const schema = controller.service("schema").get(pointer);

        options = {
            viewModel: null,
            title: null,
            description: null,
            editorValueType: schema.enum ? "select" : schema.type,
            editorElementProperties: null,
            ...options
        };

        // create main DOM-element for view-generation
        this.$element = controller.createElement(
            `.editron-value.editron-value--${options.editorValueType}`,
            { name: getId(pointer), ...options.attrs }
        );

        // use this model to generate the view. may be customized with `options.viewModel`
        this.viewModel = {
            pointer,
            id: getId(pointer),
            title: options.title,
            description: options.description,
            value: controller.service("data").get(pointer),
            instantUpdate: options.instantUpdate,
            schema,
            options,
            errors: controller.service("validation").getErrorsAndWarnings(pointer),
            onfocus: () => controller.service("location").setCurrent(pointer),
            onblur: () => controller.service("location").blur(pointer),
            onchange: value => {
                if (convert[schema.type]) {
                    value = convert[schema.type](value);
                }
                this.setValue(value);
            },
            ...options.viewModel
        };
    }

    getPointer() {
        return this.viewModel?.pointer;
    }

    // update display value in view
    // @ts-ignore
    update({ type, value }) {
        if (this.viewModel == null) {
            console.log("error - notification of destroyed editor", this);
            return;
        }

        switch (type) {
            case "pointer":
                const pointer = <string>value;
                this.$element.setAttribute("name", `editor-${pointer}`);
                this.viewModel.pointer = pointer;
                this.viewModel.id = getId(pointer);
                this.viewModel.onfocus = () => this.controller.service("location").setCurrent(pointer);

            case "data":
                this.viewModel.value = this.controller.service("data").get(this.getPointer());
                this.viewModel.disabled = !this.controller.isActive();
                break;

            case "error":
                const errors = value as Array<ValidationError>;
                break;

            case "active":
                const active = value;
                this.viewModel.disabled = active === false;
                if (this.viewModel.options) {
                    this.viewModel.options.disabled = this.viewModel.disabled;
                }
                break;

            default:
                console.log("unknown event type", type, event);
        }

        this.render();
    }

    // updates value in data-store
    // do not trigger rendering here. data-observer will notify change event
    setValue(value) {
        this.controller.service("data").set(this.getPointer(), value);
    }

    // update view
    render() {
        m.render(this.$element, m("b", "Overwrite AbstractValueEditor.render() to generate view"));
    }

    // return main dom element
    toElement() {
        return this.$element;
    }

    // destroy this editor
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        // destroy this editor only once
        m.render(this.$element, m("i"));
        this.viewModel = null;
        this.$element = null;
    }
}
