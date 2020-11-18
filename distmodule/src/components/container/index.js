import m from "mithril";
import Header from "../header";
import Errors from "../errors";
import Description from "../description";
import { renderAction } from "../actions";
export const CHILD_CONTAINER_SELECTOR = ".ed-children";
/**
 * @view ContainerView
 * A Container Component is used for any non-value like object or arrays. They hold other values. This group may expose
 * a group-title and errors. Any childnodes must go to the container '.jed-container__children'.
 */
export default {
    getChildContainer($element) {
        const $childContainer = $element.querySelector(CHILD_CONTAINER_SELECTOR);
        if ($childContainer == null) {
            throw new Error("Container-Component hast not yet been rendered");
        }
        return $childContainer;
    },
    view(vnode) {
        const { hideTitle, insertAction } = vnode.attrs;
        return [
            hideTitle === true ? null : m(Header, vnode.attrs),
            m(Description, vnode.attrs),
            vnode.children,
            m(Errors, vnode.attrs),
            m(CHILD_CONTAINER_SELECTOR),
            insertAction && m(".ed-separator.mmf-row", renderAction(insertAction)),
        ];
    }
};
