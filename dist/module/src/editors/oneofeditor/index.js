import m from "mithril";
import { SelectForm } from "mithril-material-forms";
import View, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import AbstractEditor, { getTypeClass } from "../AbstractEditor";
import { getEditronOptions } from "../../utils/UISchema";
export default class OneOfEditor extends AbstractEditor {
    constructor(pointer, controller, options) {
        super(pointer, controller, options);
        /** catch inner changes (changes are compared by a diff which may not notify parent pointer) */
        this.notifyNestedChanges = true;
        this.dom.classList.add(`ed-${getTypeClass(this.getSchema())}--oneof`);
        const childSchema = this.getSchema();
        // @special case. Our options lie in `schema.oneOfSchema`
        const schema = childSchema.oneOfSchema;
        // ensure requried titles are set
        schema.oneOf.forEach((oneOfSchema, index) => (oneOfSchema.title = oneOfSchema.title || `${index}.`));
        const oneOfOptions = getEditronOptions(schema) || {};
        console.log("options", oneOfOptions);
        this.schema = schema;
        this.childSchema = childSchema;
        this.viewModel = {
            pointer,
            title: schema.title,
            description: schema.description
        };
        this.selectModel = {
            ...oneOfOptions,
            id: pointer,
            description: undefined,
            options: schema.oneOf.map((oneOf, index) => ({ title: oneOf.title, value: index })),
            onchange: (oneOfIndex) => this.changeChild(schema.oneOf[oneOfIndex]),
            value: this.getIndexOf(childSchema),
        };
        this.render();
        this.$childContainer = this.dom.querySelector(CHILD_CONTAINER_SELECTOR);
        this.rebuild();
        this.render();
    }
    static editorOf(pointer, controller, options) {
        const schema = controller.service("schema").get(pointer);
        return schema.oneOfSchema && !schema.items && !options.renderOneOf;
    }
    changeChild(schema) {
        this.controller.destroyEditor(this.childEditor);
        const data = this.controller.service("schema").getTemplate(schema);
        this.controller.service("data").set(this.pointer, data);
    }
    getIndexOf(currentSchema) {
        for (let i = 0, l = this.schema.oneOf.length; i < l; i += 1) {
            if (this.schema.oneOf[i].title === currentSchema.title) {
                return i;
            }
        }
        return 0;
    }
    update(event) {
        switch (event.type) {
            case "data:update": {
                const currentSchema = this.getSchema();
                delete currentSchema.oneOfSchema; // is recreated each time
                if (currentSchema.title === this.childSchema.title) {
                    return;
                }
                this.selectModel.value = this.getIndexOf(currentSchema);
                this.childSchema = currentSchema;
                this.rebuild();
                break;
            }
            case "pointer":
                this.viewModel.pointer = event.value;
                this.selectModel.id = event.value;
                break;
            case "active":
                this.viewModel.disabled = event.value === false;
                this.selectModel.disabled = event.value === false;
                break;
        }
        this.render();
    }
    rebuild() {
        this.controller.destroyEditor(this.childEditor);
        this.$childContainer.innerHTML = "";
        this.childEditor = this.controller.createEditor(this.pointer, this.$childContainer, {
            // @attention this is very important or else we create an infinite loop through selectEditor
            renderOneOf: true
        });
    }
    render() {
        m.render(this.dom, m(View, this.viewModel, m(".ed-value.ed-value--oneof", m(SelectForm, this.selectModel))));
    }
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        this.viewModel = null;
        m.render(this.dom, "i");
        this.controller.destroyEditor(this.childEditor);
        this.controller.service("data").removeObserver(this.pointer, this.update);
    }
}
