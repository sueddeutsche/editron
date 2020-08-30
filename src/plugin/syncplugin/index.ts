import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Plugin } from "../index";
import gp from "gson-pointer";
import isEmpty from "../../utils/isEmpty";
import { SimpleChange } from "../../services/dataservice/change";
import { getEditronOptions } from "../../utils/UISchema";


/** required settings in editron:ui-config */
export type EditronSchemaOptions = {
    sync?: {
        /** map of relative json-pointer from source to target */
        mappingFromTo: { [fromPointer: string]: JSONPointer },
        /** if true, will add updates to undo history. Defaults to `false` */
        addToHistory?: boolean;
    }
}


export default class SyncPlugin implements Plugin {

    id = "sync-plugin";
    controller: Controller;
    hooks = {};


    initialize(controller: Controller): Plugin {
        this.controller = controller;
        // root pointer is not tracked, run initially to grab config on root
        this.onModifiedData([{ type: "add", pointer: "#" }]);
        return this;
    }

    copyData(pointer: JSONPointer, syncOptions: EditronSchemaOptions["sync"], previous) {
        const { mappingFromTo: mapping, addToHistory } = syncOptions;
        const { controller } = this;
        const from = Object.keys(mapping);
        const data = controller.getData();

        from
            .forEach(key => {
                // select data
                const fromPointer = gp.join(pointer, key);
                const fromValue = gp.get(data, fromPointer);
                // update data
                const toPointer = gp.join(pointer, mapping[key]);
                const toValue = gp.get(data, toPointer);
                if (previous[fromPointer] !== toValue && !isEmpty(toValue)) {
                    // console.log("abort sync -- previous", fromPointer, previous, "value:", previous[fromPointer], "current:", toValue);
                    return;
                }
                // @todo write test. currently untested - but required. Combination of sync-plugin?
                previous[fromPointer] = fromValue;
                gp.set(data, toPointer, fromValue);
            });

        // write data
        controller.setData(data, { addToHistory });
    }

    onModifiedData(changes: Array<SimpleChange>) {
        changes.forEach(change => {
            if (change.type === "add") {
                const schema = this.controller.service("schema").get(change.pointer);
                const options = getEditronOptions(schema);
                if (options?.sync) {
                    this.startSync(change.pointer, options.sync);
                }

            } else if (change.type === "delete" && this.hooks[change.pointer]) {
                this.stopSync(change.pointer);
            }
        });
    }

    startSync(pointer, options: EditronSchemaOptions["sync"]) {
        if (options == null) {
            return;
        }

        // validate options
        if (options.mappingFromTo == null || typeof options.mappingFromTo !== "object") {
            console.warn(`editron sync-plugin: expected property 'mappingFromTo' in sync-plugin options. Given: ${options.mappingFromTo}`);
            return;
        }

        // @todo listen to change pointer updates
        const { controller } = this;
        const sourcePointers = Object.keys(options.mappingFromTo).map(source => gp.join(pointer, source));

        // initialize
        const previousData = {};
        const data = controller.getData();
        const observers = [];
        sourcePointers
            .forEach(sourcePointer => {
                // store current data-value
                previousData[sourcePointer] = gp.get(data, sourcePointer);
                // listen to changes for sync
                const observer = () => this.copyData(pointer, options, previousData);
                controller.service("data").observe(sourcePointer, observer, true);
                observers.push([sourcePointer, observer]);
            });

        // initial sync
        this.copyData(pointer, options, previousData);

        this.hooks[pointer] = {
            removeObservers: () => observers.forEach(([pointer, observer]) =>
                controller.service("data").removeObserver(pointer, observer)
            ),
            options
        };
    }

    stopSync(pointer) {
        this.hooks[pointer]?.removeObservers();
        this.hooks[pointer] = undefined;
    }
}
