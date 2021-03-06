import m from "mithril";
import Editron from "../../Editron";
import AbstractEditor, { Options as EditorOptions } from "../../editors/AbstractEditor";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Button } from "mithril-material-forms";
import { Plugin } from "../index";
import OverlayService from "../../services/OverlayService";
import { translate } from "../../utils/i18n";


class AbstractDelegationEditor extends AbstractEditor {

    options: EditronSchemaOptions & EditorOptions;

    static editorOf(pointer: JSONPointer, editron: Editron, options) {
        return options.delegate != null && options.isDelegated !== true;
    }


    constructor(pointer: JSONPointer, editron: Editron, options) {
        options.isDelegated = true;
        super(pointer, editron, options);
        this.render();
    }

    update(event) {
        console.log("update delegation pliugin", event);
    }

    delegate(pointer: JSONPointer, options) { // eslint-disable-line @typescript-eslint/no-unused-vars
        throw new Error("notify has not been implemented in 'DelegationEditor'");
    }

    render() {
        m.render(this.dom, m(`.editron-delegate.editron-delegate--${this.getSchema().type}`,
            m(Button,
                { onclick: () => this.delegate(this.pointer, this.options) },
                translate(this.options.delegate?.buttonText || "open")
            )
        ));
    }

    destroy() {
        m.render(this.dom, m("o"));
    }
}


export type DelegationEvent = {
    pointer: JSONPointer;
    editron: Editron;
    editor: Editor;
}

export enum DelegationTarget {
    Overlay = "overlay"
}


/** settings in editron:ui config */
export type EditronSchemaOptions = {
    delegate?: {
        /** set to "overlay", to open editor in overlay-panel */
        delegateTo?: DelegationTarget;
        /** button text for inline delegation. Defaults to "open" */
        buttonText?: string;
    }
}


export type Options = {
    onDelegation?: (event: DelegationEvent) => void;
}


export default class DelegationPlugin {
    id = "delegation-plugin";

    dom: HTMLElement;
    current: Editor;
    editron: Editron;
    onDelegation?: (event: DelegationEvent) => void;


    constructor(options: Options = {}) {
        this.onDelegation = options.onDelegation || this.onDelegation;
        this.dom = document.createElement("div");
    }

    initialize(editron: Editron): void {
        this.editron = editron;

        class DelegationEditor extends AbstractDelegationEditor {}
        DelegationEditor.prototype.delegate = this.delegate.bind(this);

        this.editron.registerEditor(DelegationEditor);
    }

    delegateToOverlay(editor: Editor): Promise<void> {
        return OverlayService
            .open(editor.getElement(), { abortButton: false })
            .then(() => this.editron.destroyEditor(editor));
    }

    delegate(pointer: JSONPointer, options: EditronSchemaOptions) {
        if (this.current) {
            this.editron.destroyEditor(this.current);
        }

        this.current = this.editron.createEditor(pointer, this.dom, { isDelegated: true });

        if (options?.delegate?.delegateTo === DelegationTarget.Overlay) {
            this.delegateToOverlay(this.current);
            return;
        }

        if (this.onDelegation) {
            this.onDelegation({
                editron: this.editron,
                pointer,
                editor: this.current
            });
        }
    }
}
