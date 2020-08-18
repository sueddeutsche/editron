/*
    @todo sync-plugin:

    - change plugin to be independent of editor creation (logic should follow
        data structure - not instances, which may be duplicated)
*/
import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
import gp from "gson-pointer";
import isEmpty from "../../utils/isEmpty";


/** required settings in editron:ui-config */
export type EditronSchemaOptions = {
    sync?: {
        /** map of json-pointer from source to target */
        mappingFromTo: { [fromPointer: string]: JSONPointer }
    }
}


interface SyncEditor extends Editor {
    __syncPlugin?: {
        removeObservers: () => void;
        options: EditronSchemaOptions["sync"];
    }
}


export default class SyncPlugin implements Plugin {

    id = "sync-plugin";
    controller: Controller;


    initialize(controller: Controller): Plugin {
        this.controller = controller;
        return this;
    }

    copyData(pointer: JSONPointer, mapping: EditronSchemaOptions["sync"]["mappingFromTo"], previous) {
        const { controller } = this;
        const from = Object.keys(mapping);

        const data = controller.getData();
        from
            .forEach(key => {
                // select data
                const fromPointer = gp.join(pointer, key);
                const fromValue = gp.get(data, fromPointer);
                // write data
                const toPointer = gp.join(pointer, mapping[key]);
                const toValue = gp.get(data, toPointer);
                if (previous[fromPointer] !== toValue && !isEmpty(toValue)) {
                    return;
                }
                gp.set(data, toPointer, fromValue);
            });

        controller.setData(data);
    }

    onCreateEditor(pointer: JSONPointer, editor: SyncEditor, options?) {
        const sync: EditronSchemaOptions["sync"] = options?.sync;
        if (sync == null) {
            return;
        }

        // validate options
        if (sync.mappingFromTo == null || typeof sync.mappingFromTo !== "object") {
            console.warn(`editron sync-plugin: expected property 'mappingFromTo' in sync-plugin options. Given: ${sync.mappingFromTo}`);
            return;
        }

        // @todo listen to change pointer updates
        const { controller } = this;
        const sourcePointers = Object.keys(sync.mappingFromTo).map(source => gp.join(pointer, source));

        // initialize
        const previousData = {};
        const data = controller.getData();
        const observers = [];
        sourcePointers
            .forEach(sourcePointer => {
                // store current data-value
                previousData[sourcePointer] = gp.get(data, sourcePointer);
                // listen to changes for sync
                const observer = () => this.copyData(pointer, sync.mappingFromTo, previousData);
                controller.service("data").observe(sourcePointer, observer, true);
                observers.push([sourcePointer, observer]);
            });

        // initial sync
        this.copyData(pointer, sync.mappingFromTo, previousData);

        editor.__syncPlugin = {
            removeObservers: () => observers.forEach(([pointer, observer]) =>
                controller.service("data").removeObserver(pointer, observer)),
            options: sync
        };
    }

    onChangePointer(oldPointer: JSONPointer, newPointer: JSONPointer, editor: SyncEditor) {
        if (editor.__syncPlugin) {
            const options = editor.__syncPlugin.options;
            this.onDestroyEditor(oldPointer, editor);
            this.onCreateEditor(newPointer, editor, { sync: options });
        }
    }

    onDestroyEditor(pointer, editor: SyncEditor) {
        if (editor.__syncPlugin) {
            editor.__syncPlugin.removeObservers();
            editor.__syncPlugin = undefined;
        }
    }
}
