import m from "mithril";
export declare const EditorTarget = ".editron-item";
export declare type Attrs = {
    disabled?: boolean;
    minItems?: number;
    maxItems?: number;
    showIndex?: boolean;
    index: number;
    length: number;
    add?: boolean;
    onadd?: (index: number) => void;
    remove?: boolean;
    onremove?: (index: number) => void;
    move?: boolean;
    onmove?: (index: number) => void;
    insert?: boolean;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
