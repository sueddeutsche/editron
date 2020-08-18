import ArrayItemWrapper from "./ArrayItemWrapper";
import Controller from "../../Controller";
import diffpatch from "../../services/utils/diffpatch";
import m from "mithril";
import View, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { JSONPointer, JSONSchema } from "../../types";
import { Editor, EditorUpdateEvent } from "../Editor";
import AbstractEditor from "../AbstractEditor";
import { ValidationError } from "../../types";
import { Patch } from "../../services/utils/createDiff";


export type Controls = {
    add?: boolean;
    clone?: boolean;
    disabled: boolean;
    insert?: boolean;
    maxItems?: number;
    minItems?: number;
    move?: boolean;
    remove?: boolean;
    showIndex: boolean;
}

export type ViewModel = {
    attrs: object;
    controls: Controls;
    disabled: boolean;
    errors: Array<ValidationError>;
    length: number;
    maxItems: number;
    minItems: number;
    onadd?: Function;
    pointer: string;
}

export type Options = {
    attrs?: object;
    controls?: Controls;
}


export default class ArrayEditor extends AbstractEditor {
    $items: HTMLElement;
    children: Array<ArrayItemWrapper> = [];
    controller: Controller;
    onAdd: Function;
    pointer: JSONPointer;
    viewModel: ViewModel;


    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.service("schema").get(pointer);
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
            attrs: {},
            disabled: false,
            errors: controller.service("validation").getErrorsAndWarnings(pointer),
            length: data.length,
            maxItems: schema.maxItems || Infinity,
            minItems: schema.minItems || 0,
            onadd: this.onAdd,
            pointer,
            ...options,

            controls: {
                add: false,
                clone: true,
                disabled: false,
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

    update(event: EditorUpdateEvent) {
        if (this.viewModel == null) {
            // @ts-ignore
            console.log("%c abort update ARRAY", "background: yellow;", event);
            return;
        }

        switch (event.type) {
            case "data:update":
                this.applyPatches(event.value.patch);
                this.updateControls();
                break;

            case "validation:errors":
                this.viewModel.errors = event.value as Array<ValidationError>;
                break;

            case "pointer":
                this.viewModel.pointer = event.value;
                this.children.forEach((child, index) => child.updatePointer(`${event.value}/${index}`));
                break;

            case "active":
                const disabled = event.value === false;
                this.viewModel.disabled = disabled;
                this.viewModel.controls.disabled = disabled;
                this.children.forEach(child => child.disable(disabled));
                break;
        }

        this.render();
    }

    applyPatches(patch: Patch): void {
        const { pointer, controller, viewModel, children, $items } = this;

        // fetch a copy of the original list
        const originalChildren = Array.from(children);
        // and patch the current list
        diffpatch.patch(children, patch);

        // search for inserted children
        children.forEach((child, index) => {
            if (child instanceof ArrayItemWrapper === false) {
                const newChild = new ArrayItemWrapper(`${pointer}/${index}`, controller, viewModel.controls);
                children[index] = newChild;
            }
        });

        // search for removed children (item wrappers)
        originalChildren.forEach(child => {
            if (children.indexOf(child) === -1) {
                child.destroy();
            }
        });

        // update view: move and inserts nodes
        const currentLocation = controller.service("location").getCurrent();
        const changePointer = {};

        for (let i = 0, l = children.length; i < l; i += 1) {
            const previousPointer = children[i].getPointer();
            const currentPointer = `${pointer}/${i}`;

            // update current location
            if (currentLocation.indexOf(previousPointer) === 0) {
                const editorLocation = currentLocation.replace(previousPointer, currentPointer);
                controller.service("location").setCurrent(editorLocation);
            }

            // update child views to match patched list
            if (previousPointer !== currentPointer) {
                changePointer[previousPointer] = currentPointer;
            }

            // this updates the array-item wrapper
            children[i].updatePointer(currentPointer);

            if ($items.children[i] === children[i].getElement()) {
                // skip moving node, already in place
                continue;
            } else if (i + 1 < $items.children.length) {
                // move node to correct position
                $items.insertBefore(children[i].getElement(), $items.children[i + 1]);
            } else {
                // remaining nodes may be simply appended
                $items.appendChild(children[i].getElement());
            }
        }
    }

    rebuildChildren(): void {
        const { pointer, controller, viewModel, children, $items } = this;
        const data = this.getData();
        children.forEach((editor: ArrayItemWrapper) => editor.destroy());
        children.length = 0;
        $items.innerHTML = "";
        // recreate child editors
        data.forEach((item, index) => {
            const childEditor = new ArrayItemWrapper(`${pointer}/${index}`, controller, viewModel.controls);
            $items.appendChild(childEditor.getElement());
            children.push(childEditor);
        });
    }

    updateControls(): void {
        const { dom, viewModel, children } = this;
        viewModel.length = children.length;
        viewModel.onadd = viewModel.maxItems > children.length ? this.onAdd : undefined;
        dom.classList.toggle("has-add-disabled", viewModel.maxItems <= children.length);
        dom.classList.toggle("has-remove-disabled", viewModel.minItems >= children.length);
    }

    render(): void {
        m.render(this.dom, m(View, this.viewModel));
    }

    destroy(): void {
        if (this.viewModel == null) {
            return;
        }
        this.children.forEach((editor: ArrayItemWrapper) => editor.destroy());
        this.viewModel = null;
        m.render(this.dom, m("i"));
    }
}
