import m from "mithril";
export declare type Attrs = {
    value?: number;
    onchange?: (value: string) => void;
    options?: Array<{
        value?: number;
        title?: string;
        icon?: string;
        description?: string;
    }>;
};
declare const _default: m.Component<Attrs, {}>;
/**
 * Overlay content to pick options. Displayed as tiles
 */
export default _default;
