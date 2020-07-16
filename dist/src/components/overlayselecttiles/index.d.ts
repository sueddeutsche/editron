import m from "mithril";
export declare type Attrs = {
    value?: number;
    onchange?: Function;
    options?: Array<{
        value?: number;
        title?: string;
        icon?: string;
        description?: string;
    }>;
};
declare const _default: m.Component<Attrs, {}>;
/**
 * @View mithril
 * Overlay content to pick options. Displayed as tiles
 * @type {Object}
 */
export default _default;
