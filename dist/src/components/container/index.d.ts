import m from "mithril";
import { Attrs as HeaderAttrs } from "../containerheader";
import { Attrs as ErrorAttrs } from "../containererrors";
import { Attrs as DescriptionAttrs } from "../containerdescription";
export declare const CHILD_CONTAINER_SELECTOR = ".editron-container__children";
export declare type Attrs = HeaderAttrs & DescriptionAttrs & ErrorAttrs;
declare const _default: m.Component<Attrs, {}>;
/**
 * @view ContainerView
 * A Container Component is used for any non-value like object or arrays. They hold other values. This group may expose
 * a group-title and errors. Any childnodes must go to the container '.jed-container__children'.
 */
export default _default;
