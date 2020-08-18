import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
import gp from "gson-pointer";
import render from "json-schema-library/lib/utils/render";


type Options = {

}


/** required settings in editron:ui-config */
export type EditronSchemaOptions = {
    remoteData: {
        /** url to call. You can use {{property}}-syntax to render values of target `source` */
        url: string;
        /** relative json-pointer to data, which should be used to create remote-url */
        source?: JSONPointer;
        /** map of json-pointer from source to target */
        set: { [fromPointer: string]: JSONPointer };
        /** set to true, to overwrite values */
        overwrite?: boolean;
        /** proxy functino to call for remote data. Default to "json" */
        proxyMethod: string;
    }
}

export const defaultOptions = {
    overwrite: false,
    proxyMethod: "json"
};


interface RemoteDataEditor extends Editor {
    __remoteDataPlugin?: {
        options: EditronSchemaOptions["remoteData"],
        removeObserver: () => void;
    }
}


export default class RemoteDataPlugin implements Plugin {

    id = "remote-data-plugin";
    controller: Controller;


    constructor(options: Options) { // eslint-disable-line @typescript-eslint/no-unused-vars
        // this.dom = document.createElement("div");
    }

    initialize(controller: Controller): Plugin {
        this.controller = controller;
        return this;
    }

    onCreateEditor(pointer: JSONPointer, editor: RemoteDataEditor, options?) {
        if (options && options.remoteData) {
            const { controller } = this;
            const remote = { ...defaultOptions, ...options.remoteData };
            const sourcePointer = gp.join(pointer, remote.source);

            const observer = async () => this.setData(pointer, remote);
            controller.service("data").observe(sourcePointer, observer, true);
            this.setData(pointer, remote);

            editor.__remoteDataPlugin = {
                options: remote,
                removeObserver: () => {
                    controller.service("data").removeObserver(sourcePointer, observer);
                }
            };
        }
    }

    onChangePointer(oldPointer: JSONPointer, newPointer: JSONPointer, editor: RemoteDataEditor) {
        if (editor.__remoteDataPlugin == null) {
            return;
        }

        const { options } = editor.__remoteDataPlugin;
        this.onDestroyEditor(oldPointer, editor);
        this.onCreateEditor(newPointer, editor, { remoteData: options });
    }

    onDestroyEditor(pointer, editor: RemoteDataEditor) {
        if (editor.__remoteDataPlugin) {
            editor.__remoteDataPlugin.removeObserver();
            editor.__remoteDataPlugin = undefined;
        }
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
        const json = await controller.proxy().get(remote.proxyMethod, ({ source: remoteUrl }));

        source.forEach(key => {
            const targetPointer = gp.join(pointer, remote.set[key]);
            const currentValue = gp.get(currentData, targetPointer);
            if (remote.overwrite !== true && !(currentValue === "" || currentValue == null)) {
                return;
            }

            const targetValue = gp.get(json, key);
            controller.service("data").set(targetPointer, targetValue);
        });
    }
}
