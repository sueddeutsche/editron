import m from "mithril";
import { JSONPointer } from "../../types";
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
    action: (pointer: JSONPointer, pointerItem?: ActionItem) => void;
    /** return true, to disable action */
    disabled: (pointer: JSONPointer, pointerItem?: ActionItem) => boolean;
}


export function renderAction(pointer: JSONPointer, action: Action, pointerItem?: ActionItem): m.Vnode {
    return m(Button,
        {
            class: action.classNames,
            disabled: action.disabled(pointer, pointerItem),
            onclick: () => action.action(pointer, pointerItem)
        },
        m("i.mmf-icon", action.icon),
        action.title
    );
}



export type Attrs = {
    className?: string;
    disabled: boolean;
    pointer: JSONPointer;
    /** additional value passed to action as second parameter. Usually object property or item  */
    pointerItem?: ActionItem;
    actions: Array<Action>;
}


export default {
    view(vnode) {
        const { disabled, pointer, pointerItem, actions } = vnode.attrs;

        return m(".ed-actions",
            {
                class: disabled ? "is-disabled" : "is-enabled"
            },
            m("i.mmf-icon.interactive", "more_vert"),
            m("ul",
                actions?.map(action => m("li", renderAction(pointer, action, pointerItem)))
            )
        );
    }

} as m.Component<Attrs>;

