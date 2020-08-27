import ActionsView, { Action, renderAction } from "../../components/actions";
import arrayUtils from "../../utils/array";
import Controller from "../../Controller";
import gp from "gson-pointer";
import Header from "../../components/header";
import m from "mithril";
import { Editor } from "../Editor";
import { JSONPointer, EditronConfigAttrs } from "../../types";



export const EditorTarget = ".ed-item";



export type ViewModel = {
    actions?: Array<Action>;
    attrs?: EditronConfigAttrs;
    disabled: boolean;
    header: boolean;
    index: number;
    insert?: Action;
    length: number;
    pointer: JSONPointer;
    showIndex: boolean;
    title?: string;
}


export type Options = {
    add: boolean;
    attrs?: EditronConfigAttrs;
    clone: boolean;
    disabled: boolean;
    header: boolean;
    insert: boolean;
    length: number;
    maxItems: number;
    minItems: number;
    move: boolean;
    passActions: boolean;
    remove: boolean;
    showIndex: boolean;
    title?: string;
}


export type ChildEditorOptions = {
    actions?: Array<Action>;
}


export default class ArrayItemEditor {
    $element: HTMLElement;
    controller: Controller;
    editor: Editor;
    viewModel: ViewModel;
    /** pass actions to child editor */
    passActions: boolean;
    /** this items array index */
    index: number;
    /** json-pointer to array */
    parentPointer: JSONPointer;


    constructor(pointer: JSONPointer, controller: Controller, options: Options) {
        // eslint-disable-next-line max-len
        this.$element = controller.createElement(".ed-child", options.attrs);
        this.controller = controller;
        this.passActions = options?.passActions === true;

        this.viewModel = {
            ...options,
            insert: undefined,
            pointer,
            length: options.length,
            index: ArrayItemEditor.getIndex(pointer),
            actions: this.createActions(options)
        };

        if (options?.insert) {
            this.viewModel.insert = {
                icon: "add",
                title: "insert",
                disabled: () => options.disabled,
                action: this.add.bind(this)
            };
        }

        this.render();

        const editorOptions: ChildEditorOptions = {};
        if (this.passActions) {
            editorOptions.actions = this.viewModel.actions;
        }

        const $target = this.$element.querySelector(EditorTarget) as HTMLElement;
        this.editor = controller.createEditor(pointer, $target, editorOptions);

        this.updatePointer(pointer);
    }

    createActions(controls): Array<Action> {
        const { move, remove, clone, add, minItems, maxItems } = controls;
        const actions = [];

        if (move) {
            actions.push({
                icon: "arrow_upward",
                title: "move up",
                disabled: () => this.index === 0,
                action: () => this.move(this.index - 1)
            });

            actions.push({
                icon: "arrow_downward",
                title: "move down",
                disabled: () => this.index >= this.getLength() - 1,
                action: () => this.move(this.index + 1)
            });
        }

        if (remove) {
            actions.push({
                icon: "delete",
                title: "delete",
                disabled: () => this.getLength() > minItems,
                action: () => this.remove()
            });
        }

        if (clone) {
            actions.push({
                icon: "content_copy",
                title: "duplicate",
                disabled: () => this.getLength() < maxItems,
                action: () => this.clone()
            });
        }

        if (add) {
            actions.push({
                icon: "add",
                title: "add",
                disabled: () => this.getLength() < maxItems,
                action: () => this.add()
            });
        }

        return actions;
    }

    add(): void {
        arrayUtils.addItem(this.parentPointer, this.controller, this.index + 1);
    }

    clone(): void {
        arrayUtils.cloneItem(this.parentPointer, this.controller, this.index);
    }

    remove(): void {
        arrayUtils.removeItem(this.parentPointer, this.controller, this.index);
    }

    move(to: number): void {
        arrayUtils.moveItem(this.parentPointer, this.controller, this.index, to);
    }

    getLength(): number {
        return this.controller.service("data").get(this.parentPointer).length;
    }

    disable(isDisabled = false) {
        if (this.viewModel.disabled !== isDisabled) {
            this.viewModel.disabled = isDisabled;
            this.render();
        }
    }

    updatePointer(newPointer): void {
        this.index = ArrayItemEditor.getIndex(newPointer);
        this.parentPointer = gp.join(newPointer, "..", true);
        this.viewModel.index = ArrayItemEditor.getIndex(newPointer);
        this.viewModel.pointer = newPointer;
        this.viewModel.length = this.getLength();
        this.render();
        // @todo improve missing update of passed header actions
        // @ts-ignore
        this.passActions && this.editor?.render && this.editor.render();
    }

    getElement(): HTMLElement {
        return this.$element;
    }

    getPointer(): JSONPointer {
        return this.viewModel.pointer;
    }

    destroy(): void {
        if (this.viewModel == null) {
            return;
        }
        this.viewModel = null;
        this.controller.destroyEditor(this.editor);
        this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
    }

    render(): void {
        const { showIndex, title, length, disabled, insert, header, actions } = this.viewModel;

        m.render(this.$element, [
            // actions besides child-editor
            m(ActionsView, { disabled, actions }),
            // @todo consider to remove this option
            // optional array-item header (replacing child-header)
            header && m(Header, { title: title, actions }),
            // TARGET CONTAINER FOR EDITOR
            m(EditorTarget, {
                "data-index": `${this.index + 1} / ${length}`,
                "class": [
                    disabled ? "is-disabled" : "",
                    showIndex ? "with-index" : ""
                ].join(" ").trim()
            }),

            insert && m(".ed-separator.mmf-row", renderAction(insert))
        ]);
    }

    static getIndex(pointer: JSONPointer): number {
        const parentPointer = gp.join(pointer, "..");
        return parseInt(pointer.replace(`${parentPointer}/`, ""));
    }
}
