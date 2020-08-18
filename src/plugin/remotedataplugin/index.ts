import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
import gp from "gson-pointer";
import render from "json-schema-library/lib/utils/render";


type Options = {

}


interface RemoteDataEditor extends Editor {
    __remoteDataPlugin?: {
        options: any;
    }
}


export default class RemoteDataPlugin implements Plugin {
    id = "remote-data-plugin";

    dom: HTMLElement;
    current: Editor;
    controller: Controller;
    // onDelegation: Options["onDelegation"];

    currentSelection: RemoteDataEditor;

    constructor(options: Options) {
        // this.dom = document.createElement("div");
    }

    initialize(controller: Controller): Plugin {
        this.controller = controller;
        return this;
    }

    async setData(pointer, remote) {
        const { controller } = this;
        const currentData = controller.service("data").getDataByReference();
        const source = Object.keys(remote.set);
        const sourcePointer = gp.join(pointer, remote.source);

        let sourceData = controller.service("data").get(sourcePointer);
        if (sourceData == null || sourceData === "") {
            return;
        }
        if (typeof sourceData !== "object") {
            sourceData = { [sourcePointer.split("/").pop()]: sourceData };
        }

        const remoteUrl = render(remote.url, sourceData);
        const json = await controller.proxy().get("json", ({ source: remoteUrl }));

        source.forEach(key => {
            const targetPointer = gp.join(pointer, remote.set[key]);
            const currentValue = gp.get(currentData, targetPointer);
            if (remote.overwrite !== true && !(currentValue === "" || currentValue == null)) {
                return;
            }

            const targetValue = gp.get(json, key);
            // console.log("set", targetPointer, targetValue, "//", key, remote.set);
            controller.service("data").set(targetPointer, targetValue);
        });
    }

    onCreateEditor(pointer: JSONPointer, editor: RemoteDataEditor, options?) {
        if (options && options.remoteData) {
            const { controller } = this;
            const remote = options.remoteData;
            // const source = Object.keys(remote.set);

            const sourcePointer = gp.join(pointer, remote.source);
            // const sourceData = controller.service("data").get(sourcePointer);
            // const remoteUrl = render(remote.url, sourceData);

            controller.service("data").observe(sourcePointer, async () => {
                this.setData(pointer, remote);
            }, true);

            this.setData(pointer, remote);

            editor.__remoteDataPlugin = {
                options: remote,
            };
        }
    }

    onDestroyEditor(pointer, editor: RemoteDataEditor) {
        if (editor.__remoteDataPlugin) {
            editor.__remoteDataPlugin = undefined;
        }
    }
}
