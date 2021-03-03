import Editron from "../../Editron";
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
    editron: Editron;
    hooks = {};


    initialize(editron: Editron): void {
        this.editron = editron;
        // root pointer is not tracked, run initially to grab config on root
        this.onModifiedData([{ type: "add", pointer: "#" }]);
    }

    copyData(pointer: JSONPointer, syncOptions: EditronSchemaOptions["sync"], previous) {
        const { mappingFromTo: mapping, addToHistory } = syncOptions;
        const { editron } = this;
        const from = Object.keys(mapping);
        const data = editron.getData();

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
        editron.setData(data, { addToHistory });
    }

    onModifiedData(changes: Array<SimpleChange>) {
        changes.forEach(change => {
            if (change.type === "add") {
                const schema = this.editron.service("schema").get(change.pointer);
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
        const { editron } = this;
        const sourcePointers = Object.keys(options.mappingFromTo).map(source => gp.join(pointer, source));

        // initialize
        const previousData = {};
        const data = editron.getData();
        const observers = [];
        sourcePointers
            .forEach(sourcePointer => {
                // store current data-value
                previousData[sourcePointer] = gp.get(data, sourcePointer);
                // listen to changes for sync
                const observer = () => this.copyData(pointer, options, previousData);
                editron.service("data").observe(sourcePointer, observer, true);
                observers.push([sourcePointer, observer]);
            });

        // initial sync
        this.copyData(pointer, options, previousData);

        this.hooks[pointer] = {
            removeObservers: () => observers.forEach(([pointer, observer]) =>
                editron.service("data").removeObserver(pointer, observer)
            ),
            options
        };
    }

    stopSync(pointer) {
        this.hooks[pointer]?.removeObservers();
        this.hooks[pointer] = undefined;
    }
}
