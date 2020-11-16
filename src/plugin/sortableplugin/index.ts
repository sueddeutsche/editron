import Controller from "../../Controller";
import { CHILD_CONTAINER_SELECTOR } from "../../components/container";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
import Sortable, { SortableEvent } from "sortablejs";
import arrayUtils from "../../utils/array";
import gp from "gson-pointer";


export { Sortable };

export type Options = {
    onAdd?: ({ pointer: string, controller: Controller, event: SortableEvent }) => void;
}


export function onAddSortable(pointer: JSONPointer, controller: Controller, event: SortableEvent) {
    let action = "moved";
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
            action = "created";
        } catch (e) {
            console.log("abort - drag element requires attribute 'data-content' with a valid json-string");
            return;
        }

        const toList = controller.service("data").get(pointer);
        toList.splice(newIndex, 0, data);
        controller.service("data").set(pointer, toList);
    }

    return action;
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
        if (oldIndex === newIndex && to !== from) {
            // item is dragged to the same position, but to another editor. now, the dragged element is removeChild
            // from original list. We readd it here, to fix this
            from.insertBefore(event.item, from.childNodes[oldIndex]);
            return;
        }
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
    }
}


/** required settings in editron:ui config */
export type EditronSchemaOptions = {
    sortable?: {
        /** defines a group name for this array. If group names match, array items are interchangable.
         Defaults to json-pointer of array */
        group?: string;
        /** optional css selector to choose a drag-handle on array items */
        handle?: string;
    }
}


interface SortableEditor extends Editor {
    __sortablePlugin?: {
        options: EditronSchemaOptions["sortable"];
        sortable: Sortable;
        $children: HTMLElement;
    }
}


export default class SortablePlugin implements Plugin {

    id = "sortable-plugin";
    controller: Controller;

    options: Options


    constructor(options: Options) {
        this.options = options;
    }


    initialize(controller: Controller): Plugin {
        this.controller = controller;
        return this;
    }

    onCreateEditor(pointer, editor: SortableEditor, options?: EditronSchemaOptions) {
        const sortableOptions = options?.sortable;
        if (sortableOptions == null) {
            return;
        }

        const { controller } = this;
        if (controller.getSchema(pointer)?.type !== "array") {
            return;
        }

        const $children = <HTMLElement>editor.getElement().querySelector(CHILD_CONTAINER_SELECTOR);
        if ($children == null) {
            console.log(`sortable plugin - children-container with '${CHILD_CONTAINER_SELECTOR}' not found`);
            return;
        }

        // track pointer of child-parent for later retrieval in SortableEvents
        $children.dataset.parent = pointer;

        let hasMoved;
        const sortable = new Sortable($children, {
            group: sortableOptions.group ?? pointer,
            handle: sortableOptions.handle,
            // onChoose: () => { console.log("choose"); },
            onStart: () => (hasMoved = true),
            onUnchoose: event => {
                const { to, from, oldIndex, newIndex } = event;
                if (hasMoved === false && to === from && newIndex == null) {
                    controller.service("location").setCurrent(`${pointer}/${oldIndex}`);
                }
                hasMoved = false;
            },
            onAdd: (event: SortableEvent) => {
                const action = onAddSortable(pointer, controller, event);
                if (action === "created" && this.options?.onAdd) {
                    requestAnimationFrame(() => this.options.onAdd({ pointer, controller, event }));
                }
            },
            onEnd: (event: SortableEvent) => onEndSortable(pointer, controller, event)
        });

        editor.__sortablePlugin = {
            options: sortableOptions,
            $children,
            sortable
        };
    }

    onChangePointer(oldPointer: JSONPointer, newPointer: JSONPointer, editor: SortableEditor) {
        if (editor.__sortablePlugin) {
            const options = editor.__sortablePlugin.options;
            this.onDestroyEditor(oldPointer, editor);
            this.onCreateEditor(newPointer, editor, { sortable: options });
        }
    }

    onDestroyEditor(pointer, editor: SortableEditor) {
        if (editor.__sortablePlugin) {
            editor.__sortablePlugin.sortable.destroy();
            editor.__sortablePlugin.$children.dataset.parent = null;
            editor.__sortablePlugin = undefined;
        }
    }
}
