import m from "mithril";
export declare type Attrs = {
    pointer: string;
    disabled?: boolean;
    hideTitle?: boolean;
    icon?: string;
    collapsed?: boolean;
    oncollapse?: () => void;
    onadd?: () => void;
    ondelete?: () => void;
    onmovedown?: () => void;
    onmoveup?: () => void;
    title?: string;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
