import ArrayItemWrapper from "./ArrayItemWrapper";
import { Action } from "../../components/actions";
import Controller from "../../Controller";
import diffpatch from "../../services/utils/diffpatch";
import m from "mithril";
import View, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { JSONPointer } from "../../types";
import { EditorUpdateEvent } from "../Editor";
import AbstractEditor from "../AbstractEditor";
import { ValidationError } from "../../types";
import { Patch } from "../../services/utils/createDiff";
import arrayUtils from "../../utils/array";


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
    length: number;
}

export type ViewModel = {
    attrs: any;
    disabled: boolean;
    errors: Array<ValidationError>;
    pointer: string;
    title?: string;
    description?: string;
    icon?: string;
}

export type ArrayItemModel = {
    pointer: JSONPointer;
    index: number;
    actions: Array<Action>;
}

export type Options = {
    attrs?: any;
    controls?: Controls;
}


export default class ArrayEditor extends AbstractEditor {
    $items: HTMLElement;
    children: Array<ArrayItemWrapper> = [];
    controller: Controller;
    onAdd: (index: number) => void;
    pointer: JSONPointer;

    viewModel: ViewModel;
    actions: Array<Action> = [];


    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type === "array";
    }

    constructor(pointer: JSONPointer, controller: Controller, options: Options = {}) {
        super(pointer, controller, options);
        this.dom.classList.add("with-insert-button");
        this.onAdd = (index = 0) => {
            if (!this.viewModel.disabled) {
                controller.addItemTo(this.pointer, index);
            }
        };

        const schema = this.getSchema();
        const data = this.getData();
        const { maxItems, minItems } = schema;
        const { add = true, clone = true, remove = true, move = true } = options.controls ?? {};

        if (move) {
            this.actions.push({
                icon: "arrow_upward",
                title: "move up",
                disabled: (pointer, index) => index === 0,
                action: (pointer, index) => this.move(index, index - 1)
            });

            this.actions.push({
                icon: "arrow_downward",
                title: "move down",
                disabled: (pointer, index) => index >= this.getLength() - 1,
                action: (pointer, index) => this.move(index, index + 1)
            });
        }

        if (remove) {
            this.actions.push({
                icon: "delete",
                title: "delete",
                disabled: () => this.getLength() > minItems,
                action: (pointer, index) => this.remove(index)
            });
        }

        if (clone) {
            this.actions.push({
                icon: "content_copy",
                title: "duplicate",
                disabled: () => this.getLength() < maxItems,
                action: (pointer, index) => this.clone(index)
            });
        }

        if (add) {
            this.actions.push({
                icon: "add",
                title: "add",
                disabled: () => this.getLength() < maxItems,
                action: (pointer, index) => this.add(index)
            });
        }

        this.viewModel = {
            attrs: {},
            disabled: false,
            errors: controller.service("validation").getErrorsAndWarnings(pointer),
            pointer,
            ...options
        };

        this.render();
        this.$items = this.dom.querySelector(CHILD_CONTAINER_SELECTOR);
        this.rebuildChildren();
    }

    add(index: number): void {
        arrayUtils.addItem(this.pointer, this.controller, index + 1);
    }

    clone(index: number): void {
        arrayUtils.cloneItem(this.pointer, this.controller, index);
    }

    remove(index: number): void {
        arrayUtils.removeItem(this.pointer, this.controller, index);
    }

    move(index: number, to: number): void {
        arrayUtils.moveItem(this.pointer, this.controller, index, to);
    }

    getLength(): number {
        return this.getData().length;
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
                break;

            case "validation:errors":
                this.viewModel.errors = event.value as Array<ValidationError>;
                break;

            case "pointer":
                this.viewModel.pointer = event.value;
                this.children.forEach((child, index) => child.updatePointer(`${event.value}/${index}`));
                break;

            case "active": {
                const disabled = event.value === false;
                // this.viewModel.disabled = disabled;
                // this.viewModel.controls.disabled = disabled;
                this.children.forEach(child => child.disable(disabled));
                break;
            }
        }

        this.render();
    }

    applyPatches(patch: Patch): void {
        console.log("array apply patch", this.pointer, patch);
        const { pointer, controller, viewModel, children, $items } = this;

        // fetch a copy of the original list
        const originalChildren = Array.from(children);
        // and patch the current list
        diffpatch.patch(children, patch);

        // search for inserted children
        children.forEach((child, index) => {
            if (child instanceof ArrayItemWrapper === false) {
                const newChild = new ArrayItemWrapper(`${pointer}/${index}`, controller, { index, actions: this.actions });
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
        const { pointer, controller, children, $items } = this;
        const data = this.getData();
        children.forEach((editor: ArrayItemWrapper) => editor.destroy());
        children.length = 0;
        $items.innerHTML = "";
        // recreate child editors
        data.forEach((item, index) => {
            const childEditor = new ArrayItemWrapper(`${pointer}/${index}`, controller, {
                actions: this.actions
            });
            $items.appendChild(childEditor.getElement());
            children.push(childEditor);
        });
    }

    render(): void {
        // this.children.forEach(child => child.render());
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
