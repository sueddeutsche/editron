import gp from "gson-pointer";
import render from "../../utils/render";
import isEmpty from "../../utils/isEmpty";
import { getEditronOptions } from "../../utils/UISchema";
export const defaultOptions = {
    overwrite: false,
    proxyMethod: "json",
    addToHistory: false
};
export default class RemoteDataPlugin {
    constructor() {
        this.id = "remote-data-plugin";
        this.remotes = {};
    }
    initialize(editron) {
        this.editron = editron;
        // root pointer is not tracked, run initially to grab config on root
        this.onModifiedData([{ type: "add", pointer: "#" }]);
    }
    onModifiedData(changes) {
        changes.forEach(change => {
            if (change.type === "add") {
                const schema = this.editron.service("schema").get(change.pointer);
                const options = getEditronOptions(schema);
                if (options === null || options === void 0 ? void 0 : options.remoteData) {
                    this.createLink(change.pointer, options === null || options === void 0 ? void 0 : options.remoteData);
                }
            }
            else if (change.type === "delete" && this.remotes[change.pointer]) {
                this.destroyLink(change.pointer);
            }
        });
    }
    createLink(pointer, options) {
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
        const { editron } = this;
        const sourcePointer = gp.join(pointer, remote.requestParamValues);
        const observer = async () => this.setRemoteData(pointer, remote);
        editron.service("data").observe(sourcePointer, observer, true);
        // @todo sometimes the pointer does not exist (timing issues?)
        this.setRemoteData(pointer, remote);
        this.remotes[pointer] = {
            options: remote,
            removeObserver: () => {
                editron.service("data").removeObserver(sourcePointer, observer);
            }
        };
    }
    destroyLink(pointer) {
        if (this.remotes[pointer]) {
            this.remotes[pointer].removeObserver();
            this.remotes[pointer] = null;
        }
    }
    async setRemoteData(pointer, remote) {
        const { editron } = this;
        const currentData = editron.service("data").getDataByReference();
        // source of data for url values
        const sourcePointer = gp.join(pointer, remote.requestParamValues);
        let sourceData = editron.service("data").get(sourcePointer);
        if (sourceData == null || sourceData === "") {
            return;
        }
        if (typeof sourceData !== "object") {
            sourceData = { [sourcePointer.split("/").pop()]: sourceData };
        }
        // build request-url from 'url' and sourceData-properties and fetch data
        const remoteUrl = render(remote.requestParam, sourceData);
        const json = await editron.proxy().get(remote.proxyMethod, ({ source: remoteUrl }));
        Object.keys(remote.responseMapping)
            .forEach(key => {
            const targetPointer = gp.join(pointer, remote.responseMapping[key]);
            const currentValue = gp.get(currentData, targetPointer);
            if (remote.overwrite !== true && !isEmpty(currentValue)) {
                return;
            }
            const targetValue = gp.get(json, key);
            try {
                editron.service("data").set(targetPointer, targetValue, { addToHistory: remote.addToHistory });
            }
            catch (error) {
                console.warn(`@todo`, error);
            }
        });
    }
}
