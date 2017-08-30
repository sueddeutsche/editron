const m = require("mithril");
const gp = require("gson-pointer");
const Select = require("mithril-material-forms/components/select");
const getId = require("../../utils/getID");
const View = require("../../components/container");


class OneOfEditor {
    static editorOf(pointer, controller, options) {
        const schema = controller.schema().get(pointer);
        return schema.oneOfSchema && !schema.items && !options.renderOneOf;
    }

    constructor(pointer, controller, options) {
        const childSchema = controller.schema().get(pointer);
        // @special case. Our options lie in `schema.oneOfSchema`
        const schema = childSchema.oneOfSchema;
        const attrs = gp.get(schema, "#/ui/attrs");

        this.schema = schema;
        this.childSchema = childSchema;

        // ensure requried titles are set
        schema.oneOf.forEach((oneOfSchema, index) => (oneOfSchema.title = oneOfSchema.title || `${index}.`));

        this.$element = controller.createElement(".editron-container.editron-container--oneof", attrs);
        this.controller = controller;
        this.pointer = pointer;
        this.viewModel = {
            id: getId(pointer),
            pointer,
            errors: [],
            options: schema.oneOf.map((oneOf, index) => ({ title: oneOf.title, value: index })),
            onchange: (oneOfIndex) => {
                this.changeChild(schema.oneOf[oneOfIndex]);
            },
            value: this.getIndexOf(childSchema),
            title: schema.title,
            description: schema.description
        };

        // use bubble=true to catch inner changes (changes are compared by a diff which may not notify parent pointer)
        this.update = controller.data().observe(pointer, this.update.bind(this), true);
        // this.addError = controller.validator().observe(pointer, this.addError.bind(this));
        // this.clearErrors = controller.validator().on("beforeValidation", this.clearErrors.bind(this));
        this.render();
        this.$childContainer = this.$element.querySelector(View.childContainerSelector);
        this.rebuild();
    }

    changeChild(schema) {
        this.childEditor && this.childEditor.destroy();
        const data = this.controller.schema().getTemplate(schema);
        this.controller.data().set(this.pointer, data);
    }

    getIndexOf(currentSchema) {
        for (let i = 0, l = this.schema.oneOf.length; i < l; i += 1) {
            if (this.schema.oneOf[i].title === currentSchema.title) {
                return i;
            }
        }
        return 0;
    }

    updatePointer(newPointer) {
        const oldPointer = this.getPointer();
        if (oldPointer === newPointer) {
            return;
        }

        this.controller.changePointer(newPointer, this);

        this.pointer = newPointer;
        this.viewModel.id = getId(newPointer);
        this.viewModel.pointer = newPointer;
        this.$element.id = newPointer;
        this.controller.data().removeObserver(oldPointer, this.update);
        this.controller.data().observe(newPointer, this.update, true);

        if (this.childEditor) {
            this.childEditor.updatePointer(newPointer);
        }

        this.render();
    }

    update() {
        const currentSchema = this.controller.schema().get(this.pointer);
        delete currentSchema.oneOfSchema; // is recreated each time
        if (currentSchema.title === this.childSchema.title) {
            return;
        }

        this.viewModel.value = this.getIndexOf(currentSchema);
        this.childSchema = currentSchema;
        this.rebuild();
    }

    rebuild() {
        this.childEditor && this.childEditor.destroy();
        this.$childContainer.innerHTML = "";
        this.childEditor = this.controller.createEditor(this.pointer, this.$childContainer, {
            // @attention this is very important or else we create an infinite loop through selectEditor
            renderOneOf: true
        });

        this.render();
    }

    render() {
        m.render(this.$element, m(View, this.viewModel,
            m(".editron-value",
                m(Select, this.viewModel)
            )
        ));
    }

    toElement() {
        return this.$element;
    }

    getPointer() {
        return this.pointer;
    }

    destroy() {
        if (this.viewModel) {
            this.controller.removeEditor(this);

            this.viewModel = null;
            m.render(this.$element, "i");
            this.controller.data().removeObserver(this.pointer, this.update);
        }
    }
}


module.exports = OneOfEditor;
