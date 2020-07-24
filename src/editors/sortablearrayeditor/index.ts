import m from "mithril";
import ContainerComponent, { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import AbstractEditor from "../AbstractEditor";
import { Editor, EditorPlugin } from "../Editor";
import { JSONPointer, JSONData, ValidationError } from "../../types";
import Sortable, { SortableEvent } from 'sortablejs';
import SortableItemEditor from "./SortableItemEditor";
import Controller from "../../Controller";
import arrayUtils from "../../utils/array";


export type ViewModel = {
    pointer: string;
    attrs: object;
    length: number;
    errors: Array<any>;
    onAdd: Function;
    maxItems: number;
    minItems: number;
    // controls: Controls;
}


/*
    1. class extends AbstractEditor
    2. add editorOf, update, setActive
    3. update() { this.render() }, add render method and hook up update
        ```
            const data = this.controller.data().get(this.pointer);
            // render data to this.dom
        ```
*/
export default class SortableEditor extends AbstractEditor {

    static editorOf(pointer, controller, options) {
        const schema = controller.schema().get(pointer);
        return schema.type === "array" && options.sortable === true;
    }

    viewModel: ViewModel;
    /** DOM element, containing array items, which wrap item-editors */
    $items: HTMLElement;
    children = [];
    sortable: Sortable;


    constructor(pointer, controller: Controller, options) {
        super(pointer, controller, options);
        this.dom.classList.add("editron-container--sortable-group");

        const data = this.getData();
        const schema = this.getSchema();
        this.viewModel = {
            pointer: this.pointer,
            attrs: options.attrs,
            length: data.length,
            errors: controller.validator().getErrorsAndWarnings(pointer),
            maxItems: schema.maxItems || Infinity,
            minItems: schema.minItems || 0,
            ...options
        };

        this.render();
        this.$items = this.dom.querySelector(CHILD_CONTAINER_SELECTOR);
        /** add path to list on dom, to retrieve this in sortable callbacks */
        this.$items.dataset.parent = this.pointer;
        this.updateItems();

        let hasMoved = false;
        this.sortable = new Sortable(this.$items, {
            group: options.sortableGroup ?? this.pointer,
            handle: ".editron-handle",
            onChoose: () => {
                // console.log("choose");
            },
            onStart: () => {
                hasMoved = true;
            },
            onUnchoose: (event) => {
                const { to, from, oldIndex, newIndex } = event;
                if (hasMoved === false && to === from && newIndex == null) {
                    // console.log(event);
                    // selectionService.toggle(`${this.pointer}/${oldIndex}`);
                    controller.location().setCurrent(`${this.pointer}/${oldIndex}`);
                }
                hasMoved = false;
            },
            onAdd: (event) => {
                const { from, newIndex, item } = event;

                if (from.dataset.parent == null) {
                    let data;
                    try {
                        data = JSON.parse(item.dataset.content);
                        // for convinience, add missing data
                        data = controller.schema().core.getTemplate([data], schema)[0];

                    } catch (e) {
                        console.log("abort - drag element requires attribute 'data-content' with a valid json-string");
                        // remove node
                        item.parentNode.removeChild(item);
                        return;
                    }

                    const toList = this.getData();
                    toList.splice(newIndex, 0, data);
                    controller.data().set(this.pointer, toList);
                }

                // console.log("add to", event);
            },
            onEnd(event: SortableEvent): void {
                const element = event.item;  // dragged HTMLElement
                const { to, from, oldIndex, newIndex } = event;

                if (to === from && oldIndex === newIndex) {
                    console.log("drag had no effect");
                    return;
                }

                if (to === from) {
                    arrayUtils.moveItem(pointer, controller, oldIndex, newIndex);
                    return;
                }

                if (to !== from) {
                    const toPointer = to.dataset.parent;
                    const toList = controller.data().get(toPointer);
                    const fromPointer = from.dataset.parent;
                    const fromList = controller.data().get(fromPointer);

                    toList.splice(newIndex, 0, fromList[oldIndex]);
                    fromList.splice(oldIndex, 1);

                    controller.data().set(fromPointer, fromList);
                    controller.data().set(toPointer, toList);
                }

                console.log(
                    "target list", to, "\n",
                    "previous list", from, "\n",
                    "element's old index within old parent", event.oldIndex, "\n",
                    "element's new index within new parent", event.newIndex, "\n",
                    "element's old index within old parent, only counting draggable elements", event.oldDraggableIndex, "\n",
                    "element's new index within new parent, only counting draggable elements", event.newDraggableIndex, "\n",
                    "the clone element", event.clone, "\n",
                    "when item is in another sortable: `clone` if cloning, `true` if moving", event.pullMode
                );
            }
        });
    }

    updatePointer(newPointer: JSONPointer) {
        this.$items.dataset.parent = newPointer;
        this.children.forEach((editor, index) => editor.updatePointer(`${newPointer}/${index}`));
        return super.updatePointer(newPointer);
    }

    update() {
        console.log("update");
        this.updateItems();
        this.render();
    }

    /**
     * Destroy and create all item editors, each wrapped by a controllable array-item
     */
    updateItems(): void {
        const data = this.getData();

        // delete all child editors
        this.children.forEach(editor => editor.destroy());
        this.children.length = 0;
        this.$items.innerHTML = "";

        // recreate child editors
        data.forEach((item, index) => {
            const childPointer = `${this.pointer}/${index}`;
            const childEditor = new SortableItemEditor(childPointer, this.controller);
            this.$items.appendChild(childEditor.toElement());
            this.children.push(childEditor);
        });
    }

    destroy() {
        if (this.viewModel) {
            this.children.forEach(editor => editor.destroy());
            super.destroy();
            this.sortable.destroy();
        }
    }

    setActive(active = true) {

    }

    render() {
        m.render(this.dom, m(ContainerComponent, this.viewModel));
    }
}
