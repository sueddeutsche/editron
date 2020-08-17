import { Editor } from "../editors/Editor";
import { JSONPointer } from "../types";
import { Change, isMoveChange, isDeleteChange } from "./DataService";
import Controller from "../Controller";


interface ManagedEditor extends Editor {
}


export default class InstanceService {
    instances: Array<ManagedEditor> = [];
    watcher: Array<ManagedEditor> = [];
    controller: Controller;

    constructor(controller) {
        this.controller = controller;
    }

    add(editor: ManagedEditor) {
        const ctrl = this.controller;
        const pointer = editor.getPointer();
        editor.toElement().setAttribute("data-point", pointer);
        editor.update = editor.update.bind(editor);

        editor.pointer = pointer;
        ctrl.service("data").observe(pointer, editor.update, editor.notifyNestedChanges);
        ctrl.service("validation").observe(pointer, editor.update, editor.notifyNestedChanges);

        this.instances.push(editor);
    }

    findFrom(parentPointer: JSONPointer) {
        return this.instances.filter(editor => editor.getPointer().startsWith(parentPointer))
    }

    remove(editor: ManagedEditor) {
        this.controller.service("data").removeObserver(editor.pointer, editor.update);
        this.controller.service("validation").removeObserver(editor.pointer, editor.update);
        this.instances = this.instances.filter(ed => ed !== editor);
    }

    /** changepointer on update container data (array or object) before upcoming editor updates */
    updateContainer(pointer: JSONPointer, controller, changes: Array<Change>) {
        const changePointers = [];

        for (let i = 0, l = changes.length; i < l; i += 1) {
            const change = changes[i];

            // we have to collect editors up front or patch-sequences get mangled
            // between update and not yet udpated editor
            if (isMoveChange(change)) {
                changePointers.push({
                    ...change,
                    editors: this.findFrom(change.old)
                });

            // destroy editor instances
            } else if (isDeleteChange(change)) {
                this.findFrom(change.old).forEach(ed => controller.destroyEditor(ed));
            }
        }

        // change pointer of instances
        changePointers.forEach(change => {
            const { old: prevPtr, next: nextPtr, editors } = change;
            editors.forEach((instance: ManagedEditor) => {
                const newPointer: JSONPointer = instance.getPointer().replace(prevPtr, nextPtr);

                this.controller.service("data").removeObserver(instance.pointer, instance.update);
                this.controller.service("data")
                    .observe(instance.pointer, instance.update, instance.notifyNestedChanges);
                this.controller.service("validation").removeObserver(instance.pointer, instance.update);
                this.controller.service("validation")
                    .observe(instance.pointer, instance.update, instance.notifyNestedChanges);

                instance.update({ type: "pointer", value: newPointer });
                instance.pointer = newPointer;
                instance.toElement().setAttribute("data-point", newPointer);
            });
        })
    }

    /**
     * @debug
     * @returns currently active editor/widget instances sorted by pointer
     */
    getInstancesPerPointer() {
        const map = {};
        this.instances.forEach(editor => {
            const pointer = editor.getPointer();
            map[pointer] = map[pointer] || [];
            if (map[pointer].includes(editor) === false) {
                map[pointer].push(editor);
            } else {
                console.log("multiple instances on", editor.getPointer(), editor);
            }

        });
        return map;
    }

    setActive(active) {
        this.instances.forEach(ed => ed.update({ type: "active", value: active }));
    }

    destroy() {
        this.instances.forEach(instance => instance.destroy());
        this.instances.length = 0;
    }
}
