import m from "mithril";
import View from "./View";
import AbstractValueEditor from "../AbstractValueEditor";
export default class ValueEditor extends AbstractValueEditor {
    static editorOf(pointer, controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type !== "object" && schema.type !== "array";
    }
    constructor(pointer, controller, options) {
        super(pointer, controller, options);
        this.render();
    }
    render() {
        m.render(this.dom, m(View, this.viewModel));
    }
}
