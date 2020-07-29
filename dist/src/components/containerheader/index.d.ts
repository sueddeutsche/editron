import m from "mithril";
export declare type Attrs = {
    pointer: string;
    disabled?: boolean;
    hideTitle?: boolean;
    icon?: string;
    collapsed?: boolean;
    oncollapse?: Function;
    onadd?: Function;
    ondelete?: Function;
    onmovedown?: Function;
    onmoveup?: Function;
    title?: string;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
