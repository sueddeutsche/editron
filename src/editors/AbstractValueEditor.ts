import m from "mithril";
import getId from "../utils/getID";
import { JSONPointer, ValidationError } from "../types";
import Controller from "../Controller";


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
export default class AbstractValueEditor {
    pointer: JSONPointer;
    controller: Controller;
    $element: HTMLElement;
    viewModel;

    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.schema().get(pointer);
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
        this.pointer = pointer;
        this.controller = controller;

        const schema = controller.schema().get(pointer);

        options = Object.assign({
            viewModel: null,
            title: null,
            description: null,
            editorValueType: schema.enum ? "select" : schema.type,
            editorElementProperties: null
        }, options);

        // create main DOM-element for view-generation
        this.$element = controller.createElement(
            `.editron-value.editron-value--${options.editorValueType}`,
            Object.assign({
                name: getId(pointer)
            }, options.attrs)
        );

        // use this model to generate the view. may be customized with `options.viewModel`
        this.viewModel = Object.assign({
            pointer,
            id: getId(pointer),
            title: options.title,
            description: options.description,
            value: controller.data().get(pointer),
            instantUpdate: options.instantUpdate,
            schema,
            options,
            errors: controller.validator().getErrorsAndWarnings(pointer),
            onfocus: () => controller.location().setCurrent(pointer),
            onblur: () => controller.location().blur(pointer),
            onchange: value => {
                if (convert[schema.type]) {
                    value = convert[schema.type](value);
                }
                this.setValue(value);
            }
        }, options.viewModel);

        // in order to deregister callbacks in destroy(), bind all callbacks to this class
        this.update = controller.data().observe(pointer, this.update.bind(this));
        this.setErrors = controller.validator().observe(pointer, this.setErrors.bind(this));

        // this.render();
    }

    getPointer() {
        return this.pointer;
    }

    updatePointer(pointer) {
        if (pointer === this.pointer) {
            return;
        }

        this.controller.changePointer(pointer, this);

        const oldPointer = this.pointer;
        this.$element.setAttribute("name", `editor-${pointer}`);
        this.pointer = pointer;
        this.viewModel.pointer = pointer;
        this.viewModel.id = getId(pointer);
        this.viewModel.onfocus = () => this.controller.location().setCurrent(pointer);
        this.controller.data().removeObserver(oldPointer, this.update);
        this.controller.validator().removeObserver(oldPointer, this.setErrors);
        this.controller.data().observe(pointer, this.update);
        this.controller.validator().observe(pointer, this.setErrors);

        this.update();
    }

    setActive(active = true) {
        this.viewModel.disabled = active === false;
        if (this.viewModel.options) {
            this.viewModel.options.disabled = this.viewModel.disabled;
        }
        this.render();
    }

    // update display value in view
    update() {
        this.viewModel.value = this.controller.data().get(this.pointer);
        this.viewModel.disabled = !this.controller.isActive();
        this.render();
    }

    // updates value in data-store
    setValue(value) {
        this.controller.data().set(this.pointer, value);
        // do not trigger rendering here. data-observer will notify change event
    }

    // adds an error to view
    setErrors(errors: Array<ValidationError>) {
        console.log("set errors", errors);
        this.viewModel.errors = errors;
        this.render();
    }

    // update view
    render() {
        // this.$element.innerHTML = "<b>Overwrite AbstractValueEditor.render() to generate your view</b>";
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
        this.controller.removeInstance(this);
        // destroy this editor only once
        m.render(this.$element, m("i"));
        this.viewModel = null;
        this.controller.data().removeObserver(this.pointer, this.update);
        this.controller.validator().removeObserver(this.pointer, this.setErrors);
        this.$element = null;
    }
}
