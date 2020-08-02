import m from "mithril";
import Controller from "../../Controller";
import AbstractEditor from "../../editors/AbstractEditor";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Button } from "mithril-material-forms/index";
import { Plugin } from "../index";

// new Controller({
//     plugins: [
//         new DelegationPlugin({ options })
//     ]
// });


class AbstractDelegationEditor extends AbstractEditor {

    static editorOf(pointer: JSONPointer, controller: Controller, options) {
        return options.delegate != null && options.isDelegated !== true;
    }

    constructor(pointer: JSONPointer, controller: Controller, options) {
        options.isDelegated = true;
        super(pointer, controller, options);
        this.render();
    }

    updatePointer(newPointer: JSONPointer) {
        return super.updatePointer(newPointer);
    }

    delegate(pointer: JSONPointer) {
        throw new Error("notify has not been implemented in 'DelegationEditor'");
    }

    render() {
        m.render(this.dom, m(`.editron-delegate.editron-delegate--${this.getSchema().type}`,
            m(Button, { onclick: () => this.delegate(this.pointer) }, "edit")
        ));
    }

    update() { /* required */ }
    setActive() { /* always active */ }
}



export type Options = {
    onDelegation: ({ pointer: JSONPointer, controller: Controller, editor }) => void;
}


export default class DelegationPlugin {
    id = "delegation-plugin";

    dom: HTMLElement;
    current: Editor;
    controller: Controller;
    onDelegation: Options["onDelegation"];

    constructor(options: Options) {
        this.onDelegation = options.onDelegation;
        this.dom = document.createElement("div");
    }

    initialize(controller: Controller): Plugin {
        this.controller = controller;

        class DelegationEditor extends AbstractDelegationEditor {};
        DelegationEditor.prototype.delegate = this.delegate.bind(this);

        this.controller.editors.unshift(DelegationEditor);
        return this;
    }

    delegate(pointer: JSONPointer) {
        if (this.current) {
            this.current.destroy();
        }

        this.current = this.controller.createEditor(pointer, this.dom, { isDelegated: true });

        this.onDelegation({
            controller: this.controller,
            pointer,
            editor: this.current
        })
    }
}
