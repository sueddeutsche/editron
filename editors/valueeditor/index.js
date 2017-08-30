const m = require("mithril");
const View = require("./View");
const AbstractValueEditor = require("../AbstractValueEditor");


class ValueEditor extends AbstractValueEditor {

    static editorOf(pointer, controller) {
        const schema = controller.schema().get(pointer);
        return schema.type !== "object" && schema.type !== "array";
    }

    constructor(pointer, controller, options = {}) {
        super(pointer, controller, options);
        this.render();
    }

    render() {
        // @fixme DOES NOT RERENDER
        // m.render(this.$element, m("i"));
        m.render(this.$element, m(View, this.viewModel));
    }
}


module.exports = ValueEditor;
