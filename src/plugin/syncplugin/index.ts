import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
import gp from "gson-pointer";


/** sync-plugin options, given on initialization */
type Options = {

}

/** required settings in editron:ui-config */
export type EditronSchemaOptions = {
    sync: {
        /** map of json-pointer from source to target */
        fromTo: { [fromPointer: string]: JSONPointer }
    }
}


interface SyncEditor extends Editor {
    __syncPlugin?: {
        options: EditronSchemaOptions["sync"];
    }
}


export default class SyncPlugin implements Plugin {
    id = "remote-data-plugin";

    dom: HTMLElement;
    current: Editor;
    controller: Controller;
    // onDelegation: Options["onDelegation"];

    currentSelection: SyncEditor;

    constructor(options: Options) { // eslint-disable-line @typescript-eslint/no-unused-vars
        // this.dom = document.createElement("div");
    }

    initialize(controller: Controller): Plugin {
        this.controller = controller;
        return this;
    }

    onCreateEditor(pointer: JSONPointer, editor: SyncEditor, options?) {
        const sync: EditronSchemaOptions["sync"] = options?.sync;
        if (sync == null) {
            return;
        }

        // @todo listen to change pointer updates
        const { controller } = this;
        const from = Object.keys(sync.fromTo);
        const fromPointer = from.map(key => gp.join(pointer, key));
        const currentData = {};
        fromPointer.forEach(pointer => (currentData[pointer] = controller.service("data").get(pointer)));
        const toPointer = from.map(key => gp.join(pointer, sync.fromTo[key]));

        const observers = [];

        fromPointer.forEach((sourcePointer, index) => {
            const observer = () => {
                const targetValue = controller.service("data").get(toPointer[index]);
                const currentValue = currentData[sourcePointer];
                currentData[sourcePointer] = controller.service("data").get(sourcePointer);
                if (!(targetValue == null || targetValue == "") && targetValue !== currentValue) {
                    return;
                }

                controller.service("data").set(toPointer[index], currentData[sourcePointer]);
            };

            controller.service("data").observe(sourcePointer, observer, true);
            observers.push([sourcePointer, observer]);
        });

        editor.__syncPlugin = {
            options: sync
        };
    }

    onDestroyEditor(pointer, editor: SyncEditor) {
        if (editor.__syncPlugin) {
            editor.__syncPlugin = undefined;
        }
    }
}
