import m from "mithril";
import populated from "../../utils/populated";
import { Action, ActionItem, renderAction } from "../actions";


export type Attrs = {
    pointer: string;
    disabled?: boolean;
    hideTitle?: boolean;
    icon?: string;
    collapsed?: boolean;
    oncollapse?: () => void;
    onadd?: () => void;
    ondelete?: () => void;
    onmovedown?: () => void;
    onmoveup?: () => void;
    title?: string;

    pointerItem?: ActionItem;
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
        const attrs = {
            icon: "",
            title: "",
            disabled: false,
            ...vnode.attrs
        };

        const { actions, pointer, pointerItem } = attrs;
        const hasAction = actions?.length > 0;

        return m(".ed-header",
            {
                "class": getClass(hasAction, attrs)
            },

            m(".ed-header__title",
                populated(vnode.attrs.icon, m("i.mmf-icon", attrs.icon)),
                (!attrs.hideTitle) && m("h2", attrs.title)
            ),

            m(".ed-header__actions",
                actions?.map(action => renderAction(pointer, action, pointerItem))
            )
        );
    }

} as m.Component<Attrs>;
