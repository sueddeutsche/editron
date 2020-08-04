import m from "mithril";
import Controller from "../../Controller";
import AbstractEditor from "../../editors/AbstractEditor";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Button } from "mithril-material-forms/index";
import { Plugin } from "../index";
import gp from "gson-pointer";
import render from "json-schema-library/lib/utils/render";
import { EventType as DataEvent } from "../../services/DataService";


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

    setData(pointer, json, remote) {
        const { controller } = this;
        const currentData = controller.data().getDataByReference();
        const source = Object.keys(remote.set);
        const sourcePointer = gp.join(pointer, remote.source);

        source.forEach(key => {
            const targetPointer = gp.join(pointer, remote.set[key]);
            const currentValue = gp.get(currentData, targetPointer);
            if (remote.overwrite !== true && !(currentValue === "" || currentValue == null)) {
                return;
            }

            const targetValue = gp.get(json, key);
            // console.log("set", targetPointer, targetValue, "//", key, remote.set);
            controller.data().set(targetPointer, targetValue);
        });
    }

    // syncData(pointer, json, remote) {
    //     if (remote.sync == null) {
    //         return;
    //     }
    // }

    onCreateEditor(pointer: JSONPointer, editor: RemoteDataEditor, options?) {
        if (options && options.remoteData) {
            const { controller } = this;
            const remote = options.remoteData;
            const source = Object.keys(remote.set);

            const sourcePointer = gp.join(pointer, remote.source);
            let sourceData = controller.data().get(sourcePointer);
            let remoteUrl = render(remote.url, sourceData);

            controller.data().observe(sourcePointer, async () => {
                sourceData = controller.data().get(sourcePointer);
                if (sourceData == null) {
                    return;
                }
                if (typeof sourceData !== "object") {
                    sourceData = { [sourcePointer.split("/").pop()]: sourceData };
                }
                remoteUrl = render(remote.url, sourceData);
                const json = await controller.proxy().get("json", ({ source: remoteUrl }));

                this.setData(pointer, json, remote);
                // this.syncData(pointer, json, remote);

            }, true);

            // this.controller.proxy().get("json", ({ source: remote.url }));

            editor.__remoteDataPlugin = {
                options: remote,
            }
        }
    }

    onDestroyEditor(pointer, editor: RemoteDataEditor) {
        if (editor.__remoteDataPlugin) {
            editor.__remoteDataPlugin = undefined;
        }
    }
}
