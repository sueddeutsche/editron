import Controller from "../../Controller";
import { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
import Sortable, { SortableEvent } from 'sortablejs';
import arrayUtils from "../../utils/array";
import gp from "gson-pointer";


export type Options = {
}


interface SortableEditor extends Editor {
    __sortablePlugin?: {
        sortable: Sortable;
    }
}

export function onAddSortable(pointer: JSONPointer, controller: Controller, event: SortableEvent) {
    console.log("on add");
    const { from, newIndex, item } = event;
    const schema = controller.service("schema").get(pointer);

    // always remove node - we create it from data
    item.parentNode.removeChild(item);

    if (from.dataset.parent == null) {
        console.log("Add -- create new child from data-property");
        let data;
        try {
            data = JSON.parse(item.dataset.content);
            // for convinience, add missing data
            data = controller.service("schema").core.getTemplate([data], schema)[0];

        } catch (e) {
            console.log("abort - drag element requires attribute 'data-content' with a valid json-string");
            return;
        }

        const toList = controller.service("data").get(pointer);
        toList.splice(newIndex, 0, data);
        controller.service("data").set(pointer, toList);
    }
}

export function onEndSortable(pointer: JSONPointer, controller: Controller, event: SortableEvent) {
    // const element = event.item;  // dragged HTMLElement
    const { to, from, oldIndex, newIndex } = event;

    if (to === from && oldIndex === newIndex) {
        console.log("drag had no effect");
        return;
    }

    const toPointer = to.dataset.parent;
    const fromPointer = from.dataset.parent;

    // if container or pointer (different editors) are the same, its a move within a list
    if (to === from || (toPointer != null && toPointer === fromPointer)) {
        arrayUtils.moveItem(pointer, controller, oldIndex, newIndex);
        return;
    }

    if (to !== from) {
        if (toPointer == null) {
            console.log("undefined `toPointer` on", to);
            return;
        }
        if (fromPointer == null) {
            console.log("undefined `fromPointer` on", from);
            return;
        }

        const toList = controller.service("data").get(toPointer);
        const fromList = controller.service("data").get(fromPointer);
        toList.splice(newIndex, 0, fromList[oldIndex]);
        fromList.splice(oldIndex, 1);

        // join data to make one change request (for undo)
        const rootData = controller.service("data").get();
        gp.set(rootData, fromPointer, fromList);
        gp.set(rootData, toPointer, toList);
        controller.service("data").set("#", rootData);
        // controller.service("data").set(fromPointer, fromList);
        // controller.service("data").set(toPointer, toList);
    }
}


export default class SortablePlugin implements Plugin {
    id = "sortable-plugin";

    dom: HTMLElement;
    current: Editor;
    controller: Controller;

    constructor(options: Options) {
        // this.onDelegation = options.onDelegation;
        this.dom = document.createElement("div");
        // this.onSelect = options.onSelect;
        // this.onDeselect = options.onDeselect;
    }

    initialize(controller: Controller): Plugin {
        this.controller = controller;
        // document.body.addEventListener("click", () => this.deselect());
        return this;
    }

    onCreateEditor(pointer, editor: SortableEditor, options?) {
        if (options?.sortable == null) {
            return;
        }

        const schema = this.controller.service("schema").get(pointer);
        if (schema?.type !== "array") {
            return;
        }

        const { controller } = this;
        const $children = <HTMLElement>editor.getElement().querySelector(CHILD_CONTAINER_SELECTOR);
        if ($children == null) {
            console.log(`failed retrieving sortable children container '${CHILD_CONTAINER_SELECTOR}' -- abort`);
            return;
        }

        $children.dataset.parent = pointer;
        let hasMoved;

        const sortable = new Sortable($children, {
            group: options.sortable.group ?? pointer,
            // handle: ".editron-handle",
            handle: ".editron-item",
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
                    console.log("update location", `${pointer}/${oldIndex}`);
                    controller.service("location").setCurrent(`${pointer}/${oldIndex}`);
                }
                hasMoved = false;
            },
            onAdd(event: SortableEvent) {
                onAddSortable(pointer, controller, event);
            },
            onEnd(event: SortableEvent): void {
                onEndSortable(pointer, controller, event);
                // console.log(
                //     "target list", to, "\n",
                //     "previous list", from, "\n",
                //     "element's old index within old parent", event.oldIndex, "\n",
                //     "element's new index within new parent", event.newIndex, "\n",
                //     "element's old index within old parent, only counting draggable elements", event.oldDraggableIndex, "\n",
                //     "element's new index within new parent, only counting draggable elements", event.newDraggableIndex, "\n",
                //     "the clone element", event.clone, "\n",
                //     "when item is in another sortable: `clone` if cloning, `true` if moving", event.pullMode
                // );
            }
        });

        editor.__sortablePlugin = { sortable };
    }

    onDestroyEditor(pointer, editor: SortableEditor) {
        if (editor.__sortablePlugin) {
            editor.__sortablePlugin.sortable.destroy();
            editor.__sortablePlugin = undefined;
        }
    }
}
