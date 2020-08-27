import ArrayItem, { Options as ArrayItemOptions } from "./ArrayItem";
import { Action } from "../../components/actions";
import Controller from "../../Controller";
import diffpatch from "../../services/utils/diffpatch";
import m from "mithril";
import View, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { JSONPointer } from "../../types";
import { EditorUpdateEvent, Options as EditorOptions } from "../Editor";
import AbstractEditor from "../AbstractEditor";
import { ValidationError } from "../../types";
import { Patch } from "../../services/utils/createDiff";
import arrayUtils from "../../utils/array";


/** type definitions for json-schema array-options (editron:ui) */
export type EditronSchemaOptions = EditorOptions & {
    array?: {
        /** show action to insert item another item */
        add?: boolean;
        /** clone an item */
        clone?: boolean;
        /** show item-header in array item */
        header?: boolean;
        /** add an insert button between items */
        insert?: boolean;
        /** show move up and down actions */
        move?: boolean;
        /** pass actions to child-editor (must be treated and rendered in child-editor) */
        passActions?: boolean;
        /** show a remove item action */
        remove?: boolean;
        /** show the index of the element */
        showIndex?: boolean;
    }
}

export const defaultOptions = {
    add: true,
    clone: true,
    insert: false,
    move: true,
    remove: true,
    showIndex: false,
    header: false,
    passActions: false,
};


export type ViewModel = {
    attrs: any;
    disabled: boolean;
    errors: Array<ValidationError>;
    pointer: string;
    title?: string;
    description?: string;
    icon?: string;
    actions: Array<Action>;
}


export type Options = EditronSchemaOptions & {
    attrs?: any;
}


export default class ArrayEditor extends AbstractEditor {
    /** parent container for array children */
    $items: HTMLElement;
    children: Array<ArrayItem> = [];
    controller: Controller;
    pointer: JSONPointer;
    viewModel: ViewModel;
    /** options template for array child creation */
    childOptions: ArrayItemOptions;

    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type === "array";
    }

    constructor(pointer: JSONPointer, controller: Controller, options: Options) {
        super(pointer, controller, options);
        this.dom.classList.add("with-insert-button");

        const schema = this.getSchema();

        this.childOptions = {
            ...defaultOptions,
            ...options,
            ...options?.array,
            length: this.getLength(),
            disabled: false,
            maxItems: schema.maxItems || Infinity,
            minItems: schema.minItems || 0
        };

        this.viewModel = {
            attrs: {},
            disabled: options.disabled === true,
            errors: controller.service("validation").getErrorsAndWarnings(pointer),
            pointer,
            actions: [{
                icon: "add",
                title: "add",
                disabled: () => this.getLength() < schema.maxItems,
                action: () => arrayUtils.addItem(this.pointer, this.controller, 0)
            }],
            ...options
        };

        this.render();
        this.$items = this.dom.querySelector(CHILD_CONTAINER_SELECTOR);
        this.rebuildChildren();
    }

    createArrayItem(index: number): ArrayItem {
        return new ArrayItem(`${this.pointer}/${index}`, this.controller, {
            title: `${index}`,
            ...this.childOptions
        });
    }

    getLength(): number {
        return this.getData().length;
    }

    update(event: EditorUpdateEvent) {
        if (this.viewModel == null) {
            console.log("%c abort update ARRAY", "background: yellow;", event);
            return;
        }

        switch (event.type) {
            case "data:update":
                this.applyPatches(event.value.patch);
                this.childOptions.length = this.getLength();
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
                this.childOptions.disabled = disabled;
                this.children.forEach(child => child.disable(disabled));
                break;
            }
        }

        this.render();
    }

    applyPatches(patch: Patch): void {
        const { pointer, controller, children, $items } = this;

        // fetch a copy of the original list
        const originalChildren = Array.from(children);
        // and patch the current list
        diffpatch.patch(children, patch);

        // search for inserted children
        children.forEach((child, index) => {
            if (child instanceof ArrayItem === false) {
                const newChild = this.createArrayItem(index);
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
        const { children, $items } = this;
        const data = this.getData();
        children.forEach((editor: ArrayItem) => editor.destroy());
        children.length = 0;
        $items.innerHTML = "";
        // recreate child editors
        data.forEach((item, index) => {
            const childEditor = this.createArrayItem(index);
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
        this.children.forEach((editor: ArrayItem) => editor.destroy());
        this.viewModel = null;
        m.render(this.dom, m("i"));
    }
}
