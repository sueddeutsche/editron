import m from "mithril";
import { Action } from "../actions";
export declare const CHILD_CONTAINER_SELECTOR = ".ed-header__children";
export declare type Attrs = {
    /** header title */
    title?: string;
    /** if true, adds a disabled header */
    disabled?: boolean;
    /** hide title */
    hideTitle?: boolean;
    /** completely hide header */
    hideHeader?: boolean;
    /** if true, creates an additional child-container */
    headerContent?: boolean | string;
    /** optional icon for title */
    icon?: string;
    /** list of actions to be displayed in header */
    actions?: Array<Action>;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
