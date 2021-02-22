import m from "mithril";
import gp from "gson-pointer";
import View, { buildTree } from "./View";
import AbstractEditor from "../AbstractEditor";
export default class MinimapEditor extends AbstractEditor {
    constructor(pointer, controller, options) {
        var _a;
        super(pointer, controller, options);
        this.notifyNestedChanges = true;
        this.notifyNestedErrors = true;
        options.notifyNestedChanges = true;
        // override all default classes
        this.dom.className = "ed-minimap";
        const { minimap } = options;
        const locationService = controller.service("location");
        this.viewModel = {
            controller,
            node: buildTree(pointer, this.getData(), controller, (_a = minimap.depth) !== null && _a !== void 0 ? _a : 2),
            errors: [],
            currentSelection: locationService.getCurrent(),
            onSelect: pointer => locationService.goto(pointer),
            onAdd: (item) => controller.addItemTo(item.pointer),
            onChange(pointerToList, reorderedList /*, targetIndex*/) {
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
            },
            onUpdate: () => this.render()
        };
        this.updateLocation = this.updateLocation.bind(this);
        locationService.watch(this.updateLocation);
        // console.log("node", this.viewModel.node);
        this.render();
    }
    static editorOf(pointer, controller, options) {
        var _a;
        return ((_a = options === null || options === void 0 ? void 0 : options.minimap) === null || _a === void 0 ? void 0 : _a.use) === true;
    }
    update(event) {
        var _a, _b;
        switch (event.type) {
            case "pointer":
            // this.pointer has been set by service. Continue with data-update // no-break;
            case "data:update": { // eslint-disable-line no-fallthrough
                const data = this.getData();
                this.viewModel.node = buildTree(this.pointer, data, this.controller, (_b = (_a = this.options.minimap) === null || _a === void 0 ? void 0 : _a.depth) !== null && _b !== void 0 ? _b : 2);
                // console.log("node", this.viewModel.node);
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
    updateLocation(event) {
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
