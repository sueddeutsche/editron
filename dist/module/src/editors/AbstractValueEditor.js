import m from "mithril";
const convert = {
    boolean(value) {
        if (value === "true") {
            return true;
        }
        else if (value === "false") {
            return false;
        }
        return value;
    },
    integer(value) {
        const converted = parseInt(value);
        if (isNaN(converted) === false) {
            return converted;
        }
        return value;
    },
    number(value) {
        const converted = parseFloat(value);
        if (isNaN(converted) === false) {
            return converted;
        }
        return value;
    }
};
/**
 * Convenience class, which registers required events and base methods for value-editors (not object, array)
 */
export default class AbstractValueEditor {
    /**
     * options
     *    - editorValueType:String - custom type of editor value (added as classname)
     *    - editorElementProperties:Object - add custom properties to main DOM-element
     *    - viewModel:Object - viewModel which extends base viewmodel
     *
     * @param pointer - json pointer to value
     * @param editron - json editor editron
     * @param options
     */
    constructor(pointer, editron, options) {
        this.notifyNestedChanges = false;
        this.editron = editron;
        this.options = options;
        this.pointer = pointer;
        this.notifyNestedChanges = options.notifyNestedChanges || this.notifyNestedChanges;
        const schema = editron.service("schema").get(pointer);
        options = {
            viewModel: null,
            title: null,
            description: null,
            editorValueType: schema.enum ? schema.format === "radio" ? schema.format : "select" : schema.type,
            editorElementProperties: null,
            ...options
        };
        // create main DOM-element for view-generation
        this.dom = editron.createElement(`.ed-value.ed-value--${options.editorValueType}`, { ...options.attrs });
        if (schema.format) {
            this.dom.classList.add(`.ed-${options.editorValueType}--${schema.type}`);
        }
        // use this model to generate the view. may be customized with `options.viewModel`
        this.viewModel = {
            pointer,
            title: options.title,
            description: options.description,
            value: editron.service("data").get(pointer),
            instantUpdate: options.instantUpdate,
            schema,
            options,
            errors: editron.service("validation").getErrorsAndWarnings(pointer),
            theme: schema.theme,
            onfocus: () => editron.service("location").setCurrent(pointer),
            onblur: () => editron.service("location").blur(pointer),
            onchange: value => this.setValue(convert[schema.type] ? convert[schema.type](value) : value),
            ...options.viewModel
        };
    }
    static editorOf(pointer, editron) {
        const schema = editron.service("schema").get(pointer);
        return schema.type !== "object" && schema.type !== "array";
    }
    update(event) {
        if (this.viewModel == null) {
            console.log("%c abort update VALUE", "background: yellow;", event);
            return;
        }
        switch (event.type) {
            case "pointer": {
                const pointer = event.value;
                // this.dom.setAttribute("name", `editor-${pointer}`);
                this.viewModel.pointer = pointer;
                this.viewModel.onfocus = () => this.editron.service("location").setCurrent(pointer);
                break;
            }
            case "data:update":
                this.viewModel.value = this.editron.service("data").get(this.getPointer());
                this.viewModel.disabled = !this.editron.isActive();
                break;
            case "validation:errors":
                this.viewModel.errors = event.value;
                break;
            case "active":
                this.viewModel.disabled = event.value === false;
                if (this.viewModel.options) {
                    this.viewModel.options.disabled = this.viewModel.disabled;
                }
                break;
            default:
                console.log("unknown event type", event);
        }
        this.render();
    }
    focus() {
        this.editron.service("location").setCurrent(this.pointer);
    }
    blur() {
        this.editron.service("location").blur(this.pointer);
    }
    // do not trigger rendering here. data-observer will notify change event
    setValue(value) {
        this.editron.service("data").set(this.pointer, value);
    }
    getValue() {
        return this.editron.service("data").get(this.pointer);
    }
    // update view
    render() {
        m.render(this.dom, m("b", "Overwrite AbstractValueEditor.render() to generate view"));
    }
    getPointer() {
        return this.pointer;
    }
    // return main dom element
    getElement() {
        return this.dom;
    }
    // destroy this editor
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        // destroy this editor only once
        m.render(this.dom, m("i"));
        this.viewModel = null;
        this.dom = null;
    }
}
