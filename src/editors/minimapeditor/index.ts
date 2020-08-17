import m from "mithril";
import gp from "gson-pointer";
import View, { buildTree, Node } from "./View";
import { Editor, EditorUpdateEvent } from "../Editor";
import Controller from "../../Controller";
import { JSONPointer, ValidationError } from "../../types";
import { EventType as LocationEvent } from "../../services/LocationService";
import "./minimap-editor.scss";
import AbstractEditor, { Options as EditorOptions } from "../AbstractEditor";


export type ViewModel = {
    controller: Controller,
    currentSelection: JSONPointer;
    errors: Array<ValidationError>;
    /** minimap tree structure of input-data */
    node: Node;
    /** called, when a minimap-item is selected */
    onSelect: (pointer: JSONPointer) => void;
    onAdd: (item) => void;
    onChange: (pointers, reordered, target) => void;
}


export type Options = EditorOptions & {
    minimap?: {
        use?: boolean;
        depth?: number;
    }
};


export default class MinimapEditor extends AbstractEditor {
    viewModel: ViewModel;
    options: Options;
    notifyNestedChanges = true;


    static editorOf(pointer: JSONPointer, controller: Controller, options?: Options) {
        return options?.minimap?.use === true;
    }

    constructor(pointer, controller, options) {
        super(pointer, controller, options);
        options.notifyNestedChanges = true;

        this.dom.classList.add("editron-minimap-editor");
        const { minimap } = options;

        this.viewModel = {
            controller,
            node: buildTree(this.pointer, this.getData(), this.controller, minimap.depth ?? 2),
            errors: [],
            currentSelection: controller.service("location").getCurrent(),
            onSelect: pointer => controller.service("location").goto(pointer),

            onAdd: (item) => controller.addItemTo(item.pointer),
            onChange(pointerToList, reorderedList, targetIndex) {
                // update data
                const data = controller.service("data").get(pointerToList);
                const sorted = [];
                for (let i = 0, l = data.length; i < l; i += 1) {
                    sorted.push(data[reorderedList[i]]);
                }
                controller.service("data").set(pointerToList, sorted);

                // refocus
                // controller.location().goto(`${pointerToList}/${targetIndex}`);
                const currentPointer = controller.service("location").getCurrent();
                const localPointer = currentPointer.replace(pointerToList, "");

                if (localPointer === currentPointer) {
                    // console.log("current focus is outside of reordered list - keep focus");
                    return controller.service("location").focus();
                }

                const currentIndex = parseInt(localPointer.replace(/^\//, ""));
                const nextIndex = reorderedList.indexOf(currentIndex);

                if (nextIndex === currentIndex) {
                    // console.log("current index has not changed - keep focus");
                    return controller.service("location").focus();
                }

                // console.log("change focus pointer - editor has moved", currentIndex, "->", nextIndex);
                const updatedPointer = gp.join(pointerToList, nextIndex, localPointer.replace(/^\/[0-9]+\//, ""));
                // console.log(currentPointer, "->", updatedPointer);
                return controller.service("location").setCurrent(updatedPointer);
            }
        };

        const LocationService = controller.service("location");
        this.onLocationChange = this.onLocationChange.bind(this);
        LocationService.on(LocationService.TARGET_EVENT, this.onLocationChange);

        this.render();
    }

    update(event: EditorUpdateEvent) {
        switch (event.type) {
            case "pointer":
                this.pointer = event.value;
                // run data update on pointer change // break;
            case "data:update":
                const data = this.getData();
                this.viewModel.node = buildTree(this.pointer, data, this.controller, this.options.minimap?.depth ?? 2);
                break;

            case "validation:errors":
                this.viewModel.errors = event.value.filter(error => error.severity !== "warning");
                break;

            case "active":
                if (event.value === false) {
                    console.log("minimap currently not deactivatable");
                }
                break;

        }

        this.render();
    }

    render() {
        // @todo replace by onupdate in view?
        // force destroy the view
        m.render(this.dom, m("o"));
        // render view
        m.render(this.dom, m(View, this.viewModel));
    }

    onLocationChange(targetPointer) {
        this.viewModel.currentSelection = targetPointer;
        this.render();
    }

    destroy() {
        if (this.viewModel) {
            this.viewModel = null;
            m.render(this.dom, m("i"));
            this.controller.service("location").off(LocationEvent.TARGET, this.onLocationChange);
        }
    }
}
