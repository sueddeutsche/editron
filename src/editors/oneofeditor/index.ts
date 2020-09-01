import Controller from "../../Controller";
import m from "mithril";
import SelectForm, { Attrs as SelectFormAttrs } from "mithril-material-forms/components/selectform";
import View, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { Editor, EditorUpdateEvent, Options as EditorOptions } from "../Editor";
import { JSONSchema, JSONPointer } from "../../types";
import AbstractEditor, { getTypeClass } from "../AbstractEditor";
import { getEditronOptions } from "../../utils/UISchema";



export type EditronSchemaOptions = {
    /** invert order of oneOf selection */
    invertOrder?: boolean;
    /** title of oneOf selection */
    oneOfTitle?: string;
    /** description of oneOf selection */
    oneOfDescription?: string;
    /** theme of oneOf selection */
    theme?: string;
}

export type ViewModel = {
    description?: string;
    disabled?: boolean;
    pointer: JSONPointer;
    title?: string;
};

export type Options = EditorOptions & {
    renderOneOf?: boolean;
    invertOrder?: boolean;
    oneOfTitle?: string;
    oneOfDescription?: string;
};


export default class OneOfEditor extends AbstractEditor {
    $childContainer: HTMLElement;
    childEditor: Editor;
    childSchema: JSONSchema;
    controller: Controller;
    dom: HTMLElement;
    /** catch inner changes (changes are compared by a diff which may not notify parent pointer) */
    notifyNestedChanges = true;
    pointer: JSONPointer;
    schema: JSONSchema;
    viewModel: ViewModel;
    selectModel: SelectFormAttrs;


    static editorOf(pointer: JSONPointer, controller: Controller, options: Options) {
        const schema = controller.service("schema").get(pointer);
        return schema.oneOfSchema && !schema.items && !options.renderOneOf;
    }

    constructor(pointer: JSONPointer, controller: Controller, options: Options) {
        super(pointer, controller, options);
        this.dom.classList.add(`ed-${getTypeClass(this.getSchema())}--oneof`);

        const childSchema = this.getSchema();
        // @special case. Our options lie in `schema.oneOfSchema`
        const schema = childSchema.oneOfSchema;
        // ensure requried titles are set
        schema.oneOf.forEach((oneOfSchema, index) => (oneOfSchema.title = oneOfSchema.title || `${index}.`));

        const oneOfOptions = getEditronOptions(schema) || {};
        const { oneOfTitle, oneOfDescription } = oneOfOptions;

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
            title: oneOfTitle,
            description: oneOfDescription,
            options: schema.oneOf.map((oneOf, index) => ({ title: oneOf.title, value: index })),
            onchange: (oneOfIndex: string) => this.changeChild(schema.oneOf[oneOfIndex]),
            value: this.getIndexOf(childSchema),
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
            m(".ed-value.ed-value--oneof",
                m(SelectForm, this.selectModel)
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
