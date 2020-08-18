import m from "mithril";
import gp from "gson-pointer";
import View, { buildTree, Node } from "./View";
import { Editor, EditorUpdateEvent } from "../Editor";
import Controller from "../../Controller";
import { JSONPointer, ValidationError } from "../../types";
import { Event as LocationEvent } from "../../services/LocationService";
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
        const locationService = controller.service("location");

        this.viewModel = {
            controller,
            node: buildTree(pointer, this.getData(), controller, minimap.depth ?? 2),
            errors: [],
            currentSelection: locationService.getCurrent(),
            onSelect: pointer => locationService.goto(pointer),

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
                const currentPointer = locationService.getCurrent();
                const localPointer = currentPointer.replace(pointerToList, "");

                if (localPointer === currentPointer) {
                    // console.log("current focus is outside of reordered list - keep focus");
                    return locationService.focus();
                }

                const currentIndex = parseInt(localPointer.replace(/^\//, ""));
                const nextIndex = reorderedList.indexOf(currentIndex);

                if (nextIndex === currentIndex) {
                    // console.log("current index has not changed - keep focus");
                    return locationService.focus();
                }

                // console.log("change focus pointer - editor has moved", currentIndex, "->", nextIndex);
                const updatedPointer = gp.join(pointerToList, nextIndex, localPointer.replace(/^\/[0-9]+\//, ""));
                // console.log(currentPointer, "->", updatedPointer);
                return locationService.setCurrent(updatedPointer);
            }
        };

        this.updateLocation = this.updateLocation.bind(this);
        locationService.watch(this.updateLocation);

        this.render();
    }

    update(event: EditorUpdateEvent) {
        switch (event.type) {
            case "pointer":
                // this.pointer has been set by service. Continue with data-update // no-break;
            case "data:update": { // eslint-disable-line no-fallthrough
                const data = this.getData();
                this.viewModel.node = buildTree(this.pointer, data, this.controller, this.options.minimap?.depth ?? 2);
                break;
            }

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

    updateLocation(event: LocationEvent) {
        if (event.type === "location:target") {
            this.viewModel.currentSelection = event.value;
            this.render();
        }
    }

    destroy() {
        if (this.viewModel) {
            this.viewModel = null;
            m.render(this.dom, m("i"));
            this.controller.service("location").removeWatcher(this.updateLocation);
        }
    }
}
