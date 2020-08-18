import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
import { Plugin } from "../index";
export declare type Options = {
    onDelegation: ({ pointer: JSONPointer, controller: Controller, editor }: {
        pointer: any;
        controller: any;
        editor: any;
    }) => void;
};
export default class DelegationPlugin {
    id: string;
    dom: HTMLElement;
    current: Editor;
    controller: Controller;
    onDelegation: Options["onDelegation"];
    constructor(options: Options);
    initialize(controller: Controller): Plugin;
    delegate(pointer: JSONPointer): void;
}
