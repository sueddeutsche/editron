import ArrayItem from "./ArrayItem";
import diffpatch from "../../services/utils/diffpatch";
import m from "mithril";
import View, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import AbstractEditor from "../AbstractEditor";
import arrayUtils from "../../utils/array";
import { translate as _ } from "../../utils/i18n";
export const defaultOptions = {
    add: true,
    addTitle: "add",
    clone: true,
    insert: false,
    insertTitle: "insert",
    move: true,
    remove: true,
    showIndex: false,
    header: false,
    passActions: false,
};
export default class ArrayEditor extends AbstractEditor {
    constructor(pointer, controller, options) {
        var _a, _b;
        super(pointer, controller, options);
        this.children = [];
        this.dom.classList.add("with-insert-button");
        const schema = this.getSchema();
        this.childOptions = {
            ...defaultOptions,
            moveUpTitle: _("array:button:moveup"),
            moveDownTitle: _("array:button:movedown"),
            removeTitle: _("array:button:remove"),
            cloneTitle: _("array:button:clone"),
            ...options,
            attrs: undefined,
            ...options === null || options === void 0 ? void 0 : options.array,
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
            actions: (_a = options.actions) !== null && _a !== void 0 ? _a : [],
            insertAction: {
                icon: "add",
                title: this.childOptions.addTitle,
                disabled: () => this.getLength() < schema.maxItems,
                action: () => arrayUtils.addItem(this.pointer, this.controller, this.getLength())
            },
            ...options
        };
        if (((_b = options.array) === null || _b === void 0 ? void 0 : _b.collapsed) != null) {
            let collapsed = options.array.collapsed === true;
            this.dom.classList.add("is-collapsible");
            this.dom.classList.toggle("is-collapsed", collapsed);
            const collapsedIcon = "visibility_off"; // "keyboard_arrow_right";
            const collapseIcon = "visibility"; // "keyboard_arrow_down"
            const collapseAction = {
                icon: collapsed ? collapsedIcon : collapseIcon,
                classNames: "ed-action--collapse",
                disabled: () => this.viewModel.disabled,
                action: () => {
                    collapsed = !collapsed;
                    collapseAction.icon = collapsed ? collapsedIcon : collapseIcon,
                        this.dom.classList.toggle("is-collapsed", collapsed);
                    this.render(); // redraw container, to update header collapse-icon
                }
            };
            this.viewModel.actions.push(collapseAction);
        }
        this.render();
        this.$items = this.dom.querySelector(CHILD_CONTAINER_SELECTOR);
        this.rebuildChildren();
    }
    static editorOf(pointer, controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type === "array";
    }
    createArrayItem(index) {
        return new ArrayItem(`${this.pointer}/${index}`, this.controller, {
            title: `${index}`,
            ...this.childOptions
        });
    }
    getLength() {
        return this.getData().length;
    }
    update(event) {
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
                this.viewModel.errors = event.value;
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
    applyPatches(patch) {
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
            }
            else if (i + 1 < $items.children.length) {
                // move node to correct position
                $items.insertBefore(children[i].getElement(), $items.children[i + 1]);
            }
            else {
                // remaining nodes may be simply appended
                $items.appendChild(children[i].getElement());
            }
        }
    }
    rebuildChildren() {
        const { children, $items } = this;
        const data = this.getData();
        children.forEach((editor) => editor.destroy());
        children.length = 0;
        $items.innerHTML = "";
        // recreate child editors
        data.forEach((item, index) => {
            const childEditor = this.createArrayItem(index);
            $items.appendChild(childEditor.getElement());
            children.push(childEditor);
        });
    }
    render() {
        m.render(this.dom, m(View, this.viewModel));
    }
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        this.children.forEach((editor) => editor.destroy());
        this.viewModel = null;
        m.render(this.dom, m("i"));
    }
}
