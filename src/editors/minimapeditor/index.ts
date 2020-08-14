import m from "mithril";
import gp from "gson-pointer";
import View, { buildTree, Node } from "./View";
import { Editor } from "../Editor";
import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { EventType as LocationEvent } from "../../services/LocationService";
import "./minimap-editor.scss";
import AbstractEditor, { Options as EditorOptions } from "../AbstractEditor";


export type ViewModel = {
    controller: Controller,
    currentSelection: JSONPointer;
    errors: [];
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


    static editorOf(pointer: JSONPointer, controller: Controller, options?: Options) {
        return options?.minimap?.use === true;
    }

    constructor(pointer, controller, options) {
        options.notifyNestedChanges = true;
        super(pointer, controller, options);

        this.dom.classList.add("editron-minimap-editor");
        const { minimap } = options;

        this.viewModel = {
            controller,
            node: buildTree(this.pointer, this.getData(), this.controller, minimap.depth ?? 2),
            errors: [],
            currentSelection: controller.location().getCurrent(),
            onSelect: pointer => controller.location().goto(pointer),

            onAdd: (item) => controller.addItemTo(item.pointer),
            onChange(pointerToList, reorderedList, targetIndex) {
                // update data
                const data = controller.data().get(pointerToList);
                const sorted = [];
                for (let i = 0, l = data.length; i < l; i += 1) {
                    sorted.push(data[reorderedList[i]]);
                }
                controller.data().set(pointerToList, sorted);

                // refocus
                // controller.location().goto(`${pointerToList}/${targetIndex}`);
                const currentPointer = controller.location().getCurrent();
                const localPointer = currentPointer.replace(pointerToList, "");

                if (localPointer === currentPointer) {
                    // console.log("current focus is outside of reordered list - keep focus");
                    return controller.location().focus();
                }

                const currentIndex = parseInt(localPointer.replace(/^\//, ""));
                const nextIndex = reorderedList.indexOf(currentIndex);

                if (nextIndex === currentIndex) {
                    // console.log("current index has not changed - keep focus");
                    return controller.location().focus();
                }

                // console.log("change focus pointer - editor has moved", currentIndex, "->", nextIndex);
                const updatedPointer = gp.join(pointerToList, nextIndex, localPointer.replace(/^\/[0-9]+\//, ""));
                // console.log(currentPointer, "->", updatedPointer);
                return controller.location().setCurrent(updatedPointer);
            }
        };

        const LocationService = controller.location();
        this.onLocationChange = this.onLocationChange.bind(this);
        LocationService.on(LocationService.TARGET_EVENT, this.onLocationChange);

        this.render();
        // this.update();
    }

    updateErrors(errors) {
        console.log("index errors", errors);
        this.viewModel.errors = errors.filter(error => error.severity !== "warning");
        this.render();
    }

    update() {
        const data = this.getData();
        this.viewModel.node = buildTree(this.pointer, data, this.controller, this.options.minimap?.depth ?? 2);
        this.render();
    }

    render() {
        // @todo replace by onupdate in view?
        // force destroy the view
        m.render(this.dom, m("o"));
        // render view
        m.render(this.dom, m(View, this.viewModel));
    }

    // @todo
    setActive() {}

    onLocationChange(targetPointer) {
        this.viewModel.currentSelection = targetPointer;
        this.update();
    }

    // @validate not necessary or extend for inline use?
    updatePointer(newPointer: JSONPointer) {
        const res = super.updatePointer(newPointer);
        this.update();
        return res;
    }

    destroy() {
        if (this.viewModel) {
            super.destroy();
            this.viewModel = null;
            m.render(this.dom, m("i"));
            this.controller.location().off(LocationEvent.TARGET, this.onLocationChange);
        }
    }

    toElement() {
        return this.dom;
    }
}
