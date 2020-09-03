import AbstractValueEditor from "../AbstractValueEditor";
import Controller from "../../Controller";
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
    static editorOf(pointer: JSONPointer, controller: Controller): boolean;
    constructor(pointer: JSONPointer, controller: Controller, options: Options);
    render(): void;
}
