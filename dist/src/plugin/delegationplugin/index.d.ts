import Editron from "../../Editron";
import { JSONPointer } from "../../types";
import { Editor } from "../../editors/Editor";
export declare type DelegationEvent = {
    pointer: JSONPointer;
    editron: Editron;
    editor: Editor;
};
export declare enum DelegationTarget {
    Overlay = "overlay"
}
/** settings in editron:ui config */
export declare type EditronSchemaOptions = {
    delegate?: {
        /** set to "overlay", to open editor in overlay-panel */
        delegateTo?: DelegationTarget;
        /** button text for inline delegation. Defaults to "open" */
        buttonText?: string;
    };
};
export declare type Options = {
    onDelegation?: (event: DelegationEvent) => void;
};
export default class DelegationPlugin {
    id: string;
    dom: HTMLElement;
    current: Editor;
    editron: Editron;
    onDelegation?: (event: DelegationEvent) => void;
    constructor(options?: Options);
    initialize(editron: Editron): void;
    delegateToOverlay(editor: Editor): Promise<void>;
    delegate(pointer: JSONPointer, options: EditronSchemaOptions): void;
}
