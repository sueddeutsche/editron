import m from "mithril";
export declare type Attrs = {
    container?: HTMLElement;
    header?: string;
    onAbort?: () => void;
    onSave?: () => void;
    showSave?: boolean;
    titleAbort?: string;
    fullscreen?: boolean;
};
declare const _default: m.Component<Attrs, {}>;
/**
 * Content overlay
 */
export default _default;
