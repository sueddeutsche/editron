import { Editor } from "../editors/Editor";
import { JSONPointer } from "../types";
import { Change } from "./DataService";
import Controller from "../Controller";
/**
 * manages editor instance events -
 * tracks and notifies instances over their lifetime on changes
 */
export default class InstanceService {
    controller: Controller;
    /** active editor instances */
    instances: Array<Editor>;
    constructor(controller: any);
    add(editor: Editor): void;
    findFrom(parentPointer: JSONPointer): Editor[];
    remove(editor: Editor): void;
    /**
     *  move or delete properties/items before upcoming editor updates
     *  - changes pointers and observers and
     *  - notifies editors
     */
    updateContainer(pointer: JSONPointer, controller: any, changes: Array<Change>): void;
    /** change all editors active-state */
    setActive(active: boolean): void;
    destroy(): void;
    /**
     * @debug
     * @returns currently active editor/widget instances sorted by pointer
     */
    getInstancesPerPointer(): {};
}
