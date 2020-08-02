import m from "mithril";
import Controller from "../../Controller";
import AbstractEditor from "../../editors/AbstractEditor";
import { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Button } from "mithril-material-forms/index";
import { Plugin } from "../index";
import Sortable, { SortableEvent } from 'sortablejs';
import arrayUtils from "../../utils/array";


export type Options = {
}


interface SortableEditor extends Editor {
    __sortablePlugin?: {
        sortable: Sortable;
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

        const schema = this.controller.schema().get(pointer);
        if (schema?.type !== "array") {
            return;
        }

        const { controller } = this;
        const $children = <HTMLElement>editor.toElement().querySelector(CHILD_CONTAINER_SELECTOR);
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
                    controller.location().setCurrent(`${pointer}/${oldIndex}`);
                }
                hasMoved = false;
            },
            onAdd: (event) => {
                const { from, newIndex, item } = event;

                // always remove node - we create it from data
                console.log("remove child");
                item.parentNode.removeChild(item);

                if (from.dataset.parent == null) {
                    let data;
                    try {
                        data = JSON.parse(item.dataset.content);
                        // for convinience, add missing data
                        data = controller.schema().core.getTemplate([data], schema)[0];

                    } catch (e) {
                        console.log("abort - drag element requires attribute 'data-content' with a valid json-string");
                        return;
                    }

                    const toList = controller.data().get(pointer);
                    toList.splice(newIndex, 0, data);
                    console.log("add item at", newIndex);
                    controller.data().set(pointer, toList);
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
                    console.log("move item within list", oldIndex, newIndex);
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
        console.log("sortable array", pointer, options, $children);

        editor.__sortablePlugin = { sortable };
    }

    onDestroyEditor(pointer, editor: SortableEditor) {
        if (editor.__sortablePlugin) {
            editor.__sortablePlugin.sortable.destroy();
            editor.__sortablePlugin = undefined;
        }
    }
}
