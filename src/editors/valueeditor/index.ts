import m from "mithril";
import View from "./View";
import AbstractValueEditor from "../AbstractValueEditor";
import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Options } from "../Editor";


export type EditronSchemaOptions = {
    /** invert label, input order for checkbox- or select-inputs */
    invertOrder?: boolean;
    /** theme of form-styles. Depending on the mithril-material-forms styles imported. e.g. "the-material" */
    theme?: string;
}


export default class ValueEditor extends AbstractValueEditor {

    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type !== "object" && schema.type !== "array";
    }

    constructor(pointer: JSONPointer, controller: Controller, options: Options) {
        super(pointer, controller, options);
        this.render();
    }

    render() {
        m.render(this.dom, m(View, this.viewModel));
    }
}
