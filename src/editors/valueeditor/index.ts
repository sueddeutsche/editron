import m from "mithril";
import View from "./View";
import AbstractValueEditor from "../AbstractValueEditor";
import Controller from "../../Controller";
import { JSONPointer } from "../../types";


export default class ValueEditor extends AbstractValueEditor {

    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type !== "object" && schema.type !== "array";
    }

    constructor(pointer: JSONPointer, controller: Controller, options = {}) {
        super(pointer, controller, options);
        this.render();
    }

    render() {
        m.render(this.$element, m(View, this.viewModel));
    }
}
