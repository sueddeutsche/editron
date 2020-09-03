import m from "mithril";
import { Action } from "../actions";
export declare type Attrs = {
    disabled?: boolean;
    hideTitle?: boolean;
    hideHeader?: boolean;
    icon?: string;
    collapsed?: boolean;
    oncollapse?: () => void;
    onadd?: () => void;
    ondelete?: () => void;
    onmovedown?: () => void;
    onmoveup?: () => void;
    title?: string;
    actions?: Array<Action>;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
