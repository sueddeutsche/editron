import m from "mithril";
import { Button } from "mithril-material-forms";


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
        action.title && m("span", action.title)
    );
}

