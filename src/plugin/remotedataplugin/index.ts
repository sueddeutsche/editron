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


    onCreateEditor(pointer: JSONPointer, editor: RemoteDataEditor, options?) {
        if (options && options.remoteData) {
            const remote = options.remoteData;
            const sourcePointer = gp.join(pointer, remote.source);
            let sourceData = this.controller.data().get(sourcePointer);
            let remoteUrl = render(remote.url, sourceData);

            this.controller.data().observe(sourcePointer, async () => {
                sourceData = this.controller.data().get(sourcePointer);
                if (sourceData == null) {
                    return;
                }
                if (typeof sourceData !== "object") {
                    sourceData = { [sourcePointer.split("/").pop()]: sourceData };
                }

                remoteUrl = render(remote.url, sourceData);
                // console.log("=> url", remoteUrl);

                const json = await this.controller.proxy().get("json", ({ source: remoteUrl }));
                // console.log("set", pointer, json);

                const source = Object.keys(remote.set);
                source.forEach(key => {
                    const targetValue = gp.get(json, key);
                    const targetPointer = gp.join(pointer, remote.set[key]);
                    console.log("set", targetPointer, targetValue, "//", key, remote.set);
                    this.controller.data().set(targetPointer, targetValue);
                });

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
