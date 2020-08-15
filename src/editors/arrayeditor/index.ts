import ArrayItemWrapper from "./ArrayItemWrapper";
import Controller from "../../Controller";
import diffpatch from "../../services/utils/diffpatch";
import m from "mithril";
import View, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { JSONPointer, JSONSchema } from "../../types";
import { Editor } from "../Editor";
import AbstractEditor from "../AbstractEditor";
import { ValidationError } from "../../types";


export type Controls = {
    add?: boolean;
    remove?: boolean;
    move?: boolean;
    clone?: boolean;
    insert?: boolean;
    maxItems?: number;
    minItems?: number;
}

export type ViewModel = {
    pointer: string;
    attrs: object;
    errors: Array<ValidationError>;
    onAdd: Function;
    length: number;
    maxItems: number;
    minItems: number;
    controls: Controls;
}

export type Options = {
    attrs?: object;
    controls?: Controls;
}


export default class ArrayEditor extends AbstractEditor {
    viewModel;
    controller: Controller;
    pointer: string;
    children: Array<ArrayItemWrapper> = [];
    $items: HTMLElement;
    onAdd: Function;

    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.schema().get(pointer);
        return schema.type === "array";
    }

    constructor(pointer: JSONPointer, controller: Controller, options: Options = {}) {
        super(pointer, controller, options);
        this.dom.classList.add("withAddButton");
        this.onAdd = (index = 0) => {
            if (!this.viewModel.disabled) {
                controller.addItemTo(this.pointer, index);
            }
        };

        const schema = this.getSchema();
        const data = this.getData();
        this.viewModel = {
            pointer,
            attrs: {},
            errors: controller.validator().getErrorsAndWarnings(pointer),
            onadd: this.onAdd,
            length: data.length,
            maxItems: schema.maxItems || Infinity,
            minItems: schema.minItems || 0,
            ...options,

            controls: {
                add: false,
                clone: true,
                remove: true,
                move: true,
                insert: true,
                showIndex: options["array:index"] === true,
                maxItems: schema.maxItems || Infinity,
                minItems: schema.minItems || 0,
                ...options.controls
            }
        };

        this.render();
        this.$items = this.dom.querySelector(CHILD_CONTAINER_SELECTOR);
        this.rebuildChildren();
        this.updateControls();
    }

    setActive(active = true): void {
        const disabled = active === false;
        this.viewModel.disabled = disabled;
        this.viewModel.controls.disabled = disabled;
        this.rebuildChildren();
        this.render();
    }

    updatePointer(newPointer: JSONPointer): void {
        if (this.pointer === newPointer) {
            return;
        }

        super.updatePointer(newPointer);
        this.viewModel.pointer = newPointer;
        this.children.forEach((child, index) => child.updatePointer(`${newPointer}/${index}`));
        this.render();
    }

    update(changeEvent): void {
        if (changeEvent?.patch) {
            this.applyPatches(changeEvent.patch);
        } else {
            this.rebuildChildren();
        }
        this.updateControls();
    }

    applyPatches(patch): void {
        // fetch a copy of the original list
        const originalChildren = Array.from(this.children);
        // and patch the current list
        diffpatch.patch(this.children, patch);

        // search for inserted children
        this.children.forEach((child, index) => {
            if (child instanceof ArrayItemWrapper === false) {
                const pointer = `${this.pointer}/${index}`;
                const newChild = new ArrayItemWrapper(pointer, this.controller, this.viewModel.controls);
                // @insert?
                this.children[index] = newChild;
            }
        });

        // search for removed children (item wrappers)
        originalChildren.forEach(child => {
            if (this.children.indexOf(child) === -1) {
                child.destroy();
            }
        });

        // update view: move and inserts nodes
        const currentLocation = this.controller.location().getCurrent();
        const changePointer = {};

        for (let i = 0, l = this.children.length; i < l; i += 1) {
            const previousPointer = this.children[i].getPointer();
            const currentPointer = `${this.pointer}/${i}`;

            // update current location
            if (currentLocation.indexOf(previousPointer) === 0) {
                const editorLocation = currentLocation.replace(previousPointer, currentPointer);
                this.controller.location().setCurrent(editorLocation);
            }

            // update child views to match patched list
            if (previousPointer !== currentPointer) {
                changePointer[previousPointer] = currentPointer;
            }

            // this updates the array-item wrapper
            this.children[i].updatePointer(currentPointer);

            if (this.$items.children[i] === this.children[i].toElement()) {
                // skip moving node, already in place
                continue;
            } else if (i + 1 < this.$items.children.length) {
                // move node to correct position
                this.$items.insertBefore(this.children[i].toElement(), this.$items.children[i + 1]);
            } else {
                // remaining nodes may be simply appended
                this.$items.appendChild(this.children[i].toElement());
            }
        }
    }

    rebuildChildren(): void {
        const data = this.getData();

        // delete all child editors
        this.children.forEach(editor => editor.destroy());
        this.children.length = 0;
        this.$items.innerHTML = "";

        // recreate child editors
        data.forEach((item, index) => {
            const childPointer = `${this.pointer}/${index}`;
            const childEditor = new ArrayItemWrapper(childPointer, this.controller, this.viewModel.controls);
            this.$items.appendChild(childEditor.toElement());
            this.children.push(childEditor);
        });
    }

    updateControls(): void {
        this.viewModel.length = this.children.length;
        this.viewModel.onadd = this.viewModel.maxItems > this.children.length ? this.onAdd : false;
        this.dom.classList.toggle("has-add-disabled", this.viewModel.maxItems <= this.children.length);
        this.dom.classList.toggle("has-remove-disabled", this.viewModel.minItems >= this.children.length);
    }

    getPointer(): JSONPointer {
        return this.pointer;
    }

    updateErrors(errors): void {
        this.viewModel.errors = errors;
        this.render();
    }

    render(): void {
        m.render(this.dom, m(View, this.viewModel));
    }

    destroy(): void {
        if (this.viewModel == null) {
            return;
        }

        super.destroy();
        this.children.forEach(editor => editor.destroy());
        this.viewModel = null;
        m.render(this.dom, m("i"));
    }
}
