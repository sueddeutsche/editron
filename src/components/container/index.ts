import m from"mithril";
import Header, { Attrs as HeaderAttrs } from"../header";
import Errors, { Attrs as ErrorAttrs } from"../errors";
import Description, { Attrs as DescriptionAttrs } from"../description";
import { Action, renderAction } from "../actions";


export const CHILD_CONTAINER_SELECTOR = ".ed-children";


export type Attrs = HeaderAttrs & DescriptionAttrs & ErrorAttrs & {
    /** Add an insert action, after child-list. Mainly used for arrays */
    insertAction?: Action
};


/**
 * @view ContainerView
 * A Container Component is used for any non-value like object or arrays. They hold other values. This group may expose
 * a group-title and errors. Any childnodes must go to the container '.jed-container__children'.
 */
export default {

    getChildContainer($element: HTMLElement) {
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

} as m.Component<Attrs>;
