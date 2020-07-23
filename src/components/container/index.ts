import m from"mithril";
import ContainerHeader, { Attrs as HeaderAttrs } from"../containerheader";
import ContainerErrors, { Attrs as ErrorAttrs } from"../containererrors";
import ContainerDescription, { Attrs as DescriptionAttrs } from"../containerdescription";


export const CHILD_CONTAINER_SELECTOR = ".editron-container__children";


export type Attrs = HeaderAttrs & DescriptionAttrs & ErrorAttrs;


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
        const { hideTitle } = vnode.attrs;

        return [
            hideTitle === true ? null : m(ContainerHeader, vnode.attrs),
            m(ContainerDescription, vnode.attrs),
            vnode.children,
            m(ContainerErrors, vnode.attrs),
            m(CHILD_CONTAINER_SELECTOR)
        ];
    }

} as m.Component<Attrs>;
