import AbstractValueEditor from "../AbstractValueEditor";
import Editron from "../../Editron";
import { JSONPointer } from "../../types";
import { Options } from "../Editor";
export declare type EditronSchemaOptions = {
    /** invert label, input order for checkbox- or select-inputs */
    invertOrder?: boolean;
    /** set to true, if each keystroke should trigger a change event */
    instantUpdate?: boolean;
    /** theme of form-styles. Depending on the mithril-material-forms styles imported. e.g. "the-material" */
    theme?: string;
};
export default class ValueEditor extends AbstractValueEditor {
    static editorOf(pointer: JSONPointer, editron: Editron): boolean;
    constructor(pointer: JSONPointer, editron: Editron, options: Options);
    render(): void;
}
