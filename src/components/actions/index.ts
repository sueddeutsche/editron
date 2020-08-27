import m from "mithril";
import { Button } from "mithril-material-forms/index";


export type ActionItem = string|number;


export type Action = {
    /** material icon */
    icon: string;
    /** title */
    title?: string;
    /** additional css-classes separated by whitespace */
    classNames?: string;
    /** action */
    action: () => void;
    /** return true, to disable action */
    disabled: () => boolean;
}


export function renderAction(action: Action): m.Vnode {
    return m(Button,
        {
            class: action.classNames,
            disabled: action.disabled(),
            onclick: () => action.action()
        },
        m("i.mmf-icon", action.icon),
        m("span", action.title)
    );
}



export type Attrs = {
    className?: string;
    disabled: boolean;
    actions: Array<Action>;
}


export default {
    view(vnode) {
        const { disabled, actions } = vnode.attrs;

        return m(".ed-actions",
            {
                class: disabled ? "is-disabled" : "is-enabled"
            },
            m("i.mmf-icon.interactive", "more_vert"),
            m("ul",
                actions?.map(action => m("li", renderAction(action)))
            )
        );
    }

} as m.Component<Attrs>;

