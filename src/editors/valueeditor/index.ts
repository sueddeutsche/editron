import m from "mithril";
import View from "./View";
import AbstractValueEditor from "../AbstractValueEditor";
import Editron from "../../Editron";
import { JSONPointer } from "../../types";
import { Options } from "../Editor";


export type EditronSchemaOptions = {
    /** invert label, input order for checkbox- or select-inputs */
    invertOrder?: boolean;
    /** set to true, if each keystroke should trigger a change event */
    instantUpdate?: boolean;
    /** theme of form-styles. Depending on the mithril-material-forms styles imported. e.g. "the-material" */
    theme?: string;
}


export default class ValueEditor extends AbstractValueEditor {

    static editorOf(pointer: JSONPointer, editron: Editron) {
        const schema = editron.service("schema").get(pointer);
        return schema.type !== "object" && schema.type !== "array";
    }

    constructor(pointer: JSONPointer, editron: Editron, options: Options) {
        super(pointer, editron, options);
        this.render();
    }

    render() {
        m.render(this.dom, m(View, this.viewModel));
    }
}
