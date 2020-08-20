/*
    @todo remote-data-plugin:

    - change plugin to be independent of editor creation (logic should follow
        data structure - not instances, which may be duplicated)
*/
import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
import gp from "gson-pointer";
import render from "json-schema-library/lib/utils/render";
import isEmpty from "../../utils/isEmpty";
import { SimpleChange } from "../../services/DataService";


/** required settings in editron:ui config */
export type EditronSchemaOptions = {
    remoteData?: {
        /** proxy function to call for remote data. Default to "json" */
        proxyMethod?: string;
        /** url to call. You can use {{property}}-syntax to render values of target `source` */
        requestParam: string;
        /** relative json-pointer (from data-location) to data, which should be used to create remote-url.
         currently aborts if no data is retrieved from this pointer */
        requestParamValues: JSONPointer;
        /** map of json-pointer from source to target */
        responseMapping: { [fromPointer: string]: JSONPointer };
        /** set to true, to overwrite values */
        overwrite?: boolean;
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


    initialize(controller: Controller): Plugin {
        this.controller = controller;
        return this;
    }

    onModifiedData(changes: Array<SimpleChange>) {
        changes.forEach(change => {
            if (change.type === "add") {
                console.log(change.pointer, change.type, this.controller.service("schema").get(change.pointer));
            } else {
                console.log(change.pointer, change.type);
            }
        });
    }

    onCreateEditor(pointer: JSONPointer, editor: RemoteDataEditor, options: EditronSchemaOptions) {
        if (options?.remoteData == null) {
            return;
        }

        // validate options
        const remote = { ...defaultOptions, ...options.remoteData };
        if (remote.requestParam == null || typeof remote.requestParam !== "string") {
            console.warn(`editron remote-data-plugin: Expected option 'requestParam' to be a string. Given: ${remote.requestParam}`);
            return;
        }
        if (remote.requestParamValues == null || typeof remote.requestParamValues !== "string") {
            console.warn(`editron remote-data-plugin: Expected option 'requestParamValues' to be a string. Given: ${remote.requestParamValues}`);
            return;
        }
        if (remote.responseMapping == null || typeof remote.responseMapping !== "object") {
            console.warn(`editron remote-data-plugin: Expected option 'responseMapping' to be an object. Given: ${remote.responseMapping}`);
            return;
        }

        const { controller } = this;
        const sourcePointer = gp.join(pointer, remote.requestParamValues);

        const observer = async () => this.setRemoteData(pointer, remote);
        controller.service("data").observe(sourcePointer, observer, true);
        this.setRemoteData(pointer, remote);

        editor.__remoteDataPlugin = {
            options: remote,
            removeObserver: () => {
                controller.service("data").removeObserver(sourcePointer, observer);
            }
        };
    }

    onChangePointer(oldPointer: JSONPointer, newPointer: JSONPointer, editor: RemoteDataEditor) {
        if (editor.__remoteDataPlugin == null) {
            return;
        }

        const { options } = editor.__remoteDataPlugin;
        this.onDestroyEditor(oldPointer, editor);
        this.onCreateEditor(newPointer, editor, { remoteData: options });
    }

    onDestroyEditor(pointer: JSONPointer, editor: RemoteDataEditor) {
        if (editor.__remoteDataPlugin) {
            editor.__remoteDataPlugin.removeObserver();
            editor.__remoteDataPlugin = undefined;
        }
    }

    async setRemoteData(pointer: JSONPointer, remote: EditronSchemaOptions["remoteData"]) {
        const { controller } = this;
        const currentData = controller.service("data").getDataByReference();

        // source of data for url values
        const sourcePointer = gp.join(pointer, remote.requestParamValues);
        let sourceData = controller.service("data").get(sourcePointer);
        if (sourceData == null || sourceData === "") {
            return;
        }

        if (typeof sourceData !== "object") {
            sourceData = { [sourcePointer.split("/").pop()]: sourceData };
        }

        // build request-url from 'url' and sourceData-properties and fetch data
        const remoteUrl = render(remote.requestParam, sourceData);
        const json = await controller.proxy().get(remote.proxyMethod, ({ source: remoteUrl }));

        Object.keys(remote.responseMapping)
            .forEach(key => {
                const targetPointer = gp.join(pointer, remote.responseMapping[key]);
                const currentValue = gp.get(currentData, targetPointer);
                if (remote.overwrite !== true && !isEmpty(currentValue)) {
                    return;
                }

                const targetValue = gp.get(json, key);
                controller.service("data").set(targetPointer, targetValue);
            });
    }
}
