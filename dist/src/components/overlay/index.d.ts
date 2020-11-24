import m from "mithril";
export declare type Attrs = {
    container?: HTMLElement;
    header?: string;
    abortButton?: string | false;
    confirmButton?: string | false;
    onAbort?: () => void;
    onSave?: () => void;
    fullscreen?: boolean;
};
declare const _default: m.Component<Attrs, {}>;
/**
 * Content overlay
 */
export default _default;
