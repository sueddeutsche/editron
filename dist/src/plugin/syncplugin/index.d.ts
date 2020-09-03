import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Plugin } from "../index";
import { SimpleChange } from "../../services/dataservice/change";
/** required settings in editron:ui-config */
export declare type EditronSchemaOptions = {
    sync?: {
        /** map of relative json-pointer from source to target */
        mappingFromTo: {
            [fromPointer: string]: JSONPointer;
        };
        /** if true, will add updates to undo history. Defaults to `false` */
        addToHistory?: boolean;
    };
};
export default class SyncPlugin implements Plugin {
    id: string;
    controller: Controller;
    hooks: {};
    initialize(controller: Controller): Plugin;
    copyData(pointer: JSONPointer, syncOptions: EditronSchemaOptions["sync"], previous: any): void;
    onModifiedData(changes: Array<SimpleChange>): void;
    startSync(pointer: any, options: EditronSchemaOptions["sync"]): void;
    stopSync(pointer: any): void;
}
