import m from "mithril";
import populated from "../../utils/populated";
import { Action, renderAction } from "../actions";


export type Attrs = {
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

    actions?: Array<Action>
}


function getClass(hasAction: boolean, { title, icon, disabled }): string {
    let classname = `${title ? "with-title" : "no-title"}`;
    classname += ` ${hasAction ? "with-actions" : "no-actions"}`;
    classname += ` ${icon ? "with-icon" : "no-icon"}`;
    classname += disabled ? " is-disabled" : "";
    return classname;
}


export default {
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
        const hasAction = actions?.length > 0;

        return m(".ed-header",
            {
                "class": getClass(hasAction, attrs)
            },

            m(".ed-header__title",
                populated(vnode.attrs.icon, m("i.mmf-icon", attrs.icon)),
                (!attrs.hideTitle) && m("h2", attrs.title),
                vnode.children
            ),

            actions?.length > 0 && m(".ed-header__actions",
                actions.map(action => renderAction(action))
            )
        );
    }

} as m.Component<Attrs>;
