import m from "mithril";
import populated from "../../utils/populated";
import { renderAction } from "../actions";
export const CHILD_CONTAINER_SELECTOR = ".ed-header__children";
function getClass(hasAction, { title, icon, disabled }) {
    let classname = `${title !== "" ? "with-title" : "no-title"}`;
    classname += ` ${hasAction ? "with-actions" : "no-actions"}`;
    classname += ` ${icon !== "" ? "with-icon" : "no-icon"}`;
    classname += disabled ? " is-disabled" : "";
    return classname;
}
export default {
    getChildContainer($element) {
        const $childContainer = $element.querySelector(CHILD_CONTAINER_SELECTOR);
        if ($childContainer == null) {
            throw new Error("Container-Component hast not yet been rendered");
        }
        return $childContainer;
    },
    view(vnode) {
        if (vnode.attrs.hideHeader) {
            return;
        }
        const attrs = {
            icon: "",
            title: "",
            disabled: false,
            ...vnode.attrs
        };
        const { actions } = attrs;
        const hasAction = (actions === null || actions === void 0 ? void 0 : actions.length) > 0;
        const withTitle = hasAction || attrs.title !== "" || attrs.icon !== "";
        return m(".ed-header", {
            "class": getClass(hasAction, attrs)
        }, withTitle && m(".ed-header__title", populated(vnode.attrs.icon, m("i.mmf-icon", attrs.icon)), (!attrs.hideTitle) && m("h2", attrs.title), vnode.children), vnode.attrs.headerContent && m(CHILD_CONTAINER_SELECTOR), (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && m(".ed-header__actions", actions.map(action => renderAction(action))));
    }
};
