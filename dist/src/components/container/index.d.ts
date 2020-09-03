import m from "mithril";
import { Attrs as HeaderAttrs } from "../header";
import { Attrs as ErrorAttrs } from "../errors";
import { Attrs as DescriptionAttrs } from "../description";
import { Action } from "../actions";
export declare const CHILD_CONTAINER_SELECTOR = ".ed-children";
export declare type Attrs = HeaderAttrs & DescriptionAttrs & ErrorAttrs & {
    /** Add an insert action, after child-list. Mainly used for arrays */
    insertAction?: Action;
};
declare const _default: m.Component<Attrs, {}>;
/**
 * @view ContainerView
 * A Container Component is used for any non-value like object or arrays. They hold other values. This group may expose
 * a group-title and errors. Any childnodes must go to the container '.jed-container__children'.
 */
export default _default;
