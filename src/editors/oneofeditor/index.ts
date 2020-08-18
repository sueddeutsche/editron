import Controller from "../../Controller";
import m from "mithril";
import Select, { Option } from "mithril-material-forms/components/select";
import View, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { Editor, EditorUpdateEvent } from "../Editor";
import { JSONSchema, JSONPointer } from "../../types";
import AbstractEditor from "../AbstractEditor";


export type ViewModel = {
    description?: string;
    disabled?: boolean;
    onchange: (value: string) => void;
    options: Array<Option>;
    pointer: JSONPointer;
    title?: string;
    value?: any;
};


export type Options = {
    renderOneOf?: boolean;
};


export default class OneOfEditor extends AbstractEditor {
    /** catch inner changes (changes are compared by a diff which may not notify parent pointer) */
    $childContainer: HTMLElement;
    childEditor: Editor;
    childSchema: JSONSchema;
    controller: Controller;
    dom: HTMLElement;
    notifyNestedChanges = true;
    pointer: JSONPointer;
    schema: JSONSchema;
    viewModel: ViewModel;


    static editorOf(pointer: JSONPointer, controller: Controller, options: Options) {
        const schema = controller.service("schema").get(pointer);
        return schema.oneOfSchema && !schema.items && !options.renderOneOf;
    }

    constructor(pointer: JSONPointer, controller: Controller, options: Options) {
        super(pointer, controller, options);
        this.dom.classList.add("editron-container--oneof");

        const childSchema = this.getSchema();
        // @special case. Our options lie in `schema.oneOfSchema`
        const schema = childSchema.oneOfSchema;
        // ensure requried titles are set
        schema.oneOf.forEach((oneOfSchema, index) => (oneOfSchema.title = oneOfSchema.title || `${index}.`));

        this.schema = schema;
        this.childSchema = childSchema;
        this.viewModel = {
            pointer,
            options: schema.oneOf.map((oneOf, index) => ({ title: oneOf.title, value: index })),
            onchange: (oneOfIndex: string) => this.changeChild(schema.oneOf[oneOfIndex]),
            value: this.getIndexOf(childSchema),
            title: schema.title,
            description: schema.description
        };

        this.render();
        this.$childContainer = this.dom.querySelector(CHILD_CONTAINER_SELECTOR);
        this.rebuild();
        this.render();
    }

    changeChild(schema): void {
        this.controller.destroyEditor(this.childEditor);
        const data = this.controller.service("schema").getTemplate(schema);
        this.controller.service("data").set(this.pointer, data);
    }

    getIndexOf(currentSchema): number {
        for (let i = 0, l = this.schema.oneOf.length; i < l; i += 1) {
            if (this.schema.oneOf[i].title === currentSchema.title) {
                return i;
            }
        }
        return 0;
    }

    update(event: EditorUpdateEvent): void {
        switch(event.type) {
            case "data:update": {
                const currentSchema = this.getSchema();
                delete currentSchema.oneOfSchema; // is recreated each time
                if (currentSchema.title === this.childSchema.title) {
                    return;
                }
                this.viewModel.value = this.getIndexOf(currentSchema);
                this.childSchema = currentSchema;
                this.rebuild();
                break;
            }

            case "pointer":
                this.viewModel.pointer = event.value;
                break;

            case "active":
                this.viewModel.disabled = event.value === false;
                break;
        }

        this.render();
    }

    rebuild(): void {
        this.controller.destroyEditor(this.childEditor);
        this.$childContainer.innerHTML = "";
        this.childEditor = this.controller.createEditor(this.pointer, this.$childContainer, {
            // @attention this is very important or else we create an infinite loop through selectEditor
            renderOneOf: true
        });
    }

    render(): void {
        m.render(this.dom, m(View, this.viewModel,
            m(".editron-value",
                m(Select, this.viewModel)
            )
        ));
    }

    destroy(): void {
        if (this.viewModel == null) {
            return;
        }
        this.viewModel = null;
        m.render(this.dom, "i");
        this.controller.destroyEditor(this.childEditor);
        this.controller.service("data").removeObserver(this.pointer, this.update);
    }
}
