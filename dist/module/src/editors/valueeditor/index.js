import m from "mithril";
import View from "./View";
import AbstractValueEditor from "../AbstractValueEditor";
export default class ValueEditor extends AbstractValueEditor {
    static editorOf(pointer, editron) {
        const schema = editron.service("schema").get(pointer);
        return schema.type !== "object" && schema.type !== "array";
    }
    constructor(pointer, editron, options) {
        super(pointer, editron, options);
        this.render();
    }
    render() {
        m.render(this.dom, m(View, this.viewModel));
    }
}
