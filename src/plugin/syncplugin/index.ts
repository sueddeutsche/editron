import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
import gp from "gson-pointer";


type Options = {

}


interface SyncEditor extends Editor {
    __syncPlugin?: {
        options: any;
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
        const { sync } = options ?? {};
        if (sync == null) {
            return;
        }

        const { controller } = this;
        const from = Object.keys(sync.fromTo);
        const fromPointer = from.map(key => gp.join(pointer, key));
        const currentData = {};
        fromPointer.forEach(pointer => (currentData[pointer] = controller.service("data").get(pointer)));
        const toPointer = from.map(key => gp.join(pointer, sync.fromTo[key]));


        fromPointer.forEach((sourcePointer, index) => {
            controller.service("data").observe(sourcePointer, () => {
                const targetValue = controller.service("data").get(toPointer[index]);
                const currentValue = currentData[sourcePointer];
                currentData[sourcePointer] = controller.service("data").get(sourcePointer);
                if (!(targetValue == null || targetValue == "") && targetValue !== currentValue) {
                    return;
                }

                controller.service("data").set(toPointer[index], currentData[sourcePointer]);
            }, true);


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
