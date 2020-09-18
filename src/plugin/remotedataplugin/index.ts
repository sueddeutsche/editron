import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Plugin } from "../index";
import gp from "gson-pointer";
import render from "json-schema-library/lib/utils/render";
import isEmpty from "../../utils/isEmpty";
import { SimpleChange } from "../../services/dataservice/change";
import { getEditronOptions } from "../../utils/UISchema";


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
        /** if true, will add updates to undo history. Defaults to `false` */
        addToHistory?: boolean;
        /** set to true, to overwrite values */
        overwrite?: boolean;
    }
}


export const defaultOptions = {
    overwrite: false,
    proxyMethod: "json",
    addToHistory: false
};


export default class RemoteDataPlugin implements Plugin {

    id = "remote-data-plugin";
    controller: Controller;
    remotes: { [pointer: string]: {
        options: EditronSchemaOptions["remoteData"];
        removeObserver: () => void;
    }} = {};

    initialize(controller: Controller): Plugin {
        this.controller = controller;
        // root pointer is not tracked, run initially to grab config on root
        this.onModifiedData([{ type: "add", pointer: "#" }]);
        return this;
    }

    onModifiedData(changes: Array<SimpleChange>) {

        changes.forEach(change => {
            if (change.type === "add") {
                const schema = this.controller.service("schema").get(change.pointer);
                const options = getEditronOptions(schema);
                if (options?.remoteData) {
                    this.createLink(change.pointer, options?.remoteData);
                }

            } else if (change.type === "delete" && this.remotes[change.pointer]) {
                this.destroyLink(change.pointer);
            }
        });
    }

    createLink(pointer: JSONPointer, options: EditronSchemaOptions["remoteData"]) {
        // validate options
        const remote = { ...defaultOptions, ...options };
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

        this.remotes[pointer] = {
            options: remote,
            removeObserver: () => {
                controller.service("data").removeObserver(sourcePointer, observer);
            }
        };
    }

    destroyLink(pointer: JSONPointer) {
        if (this.remotes[pointer]) {
            this.remotes[pointer].removeObserver();
            this.remotes[pointer] = null;
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
                try {
                    controller.service("data").set(targetPointer, targetValue, { addToHistory: remote.addToHistory });
                } catch (error) {
                    // console.warn(`@todo`, error);
                }
            });
    }
}
