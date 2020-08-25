import m from "mithril";
import { JSONPointer } from "../../types";
import { Button } from "mithril-material-forms/index";


export type Action = {
    /** material-icon string */
    icon: string;
    title?: string;
    /** action */
    action: (pointer: JSONPointer, index: number) => void;
    /** return true, to disable action */
    disabled: (pointer: JSONPointer, index: number) => boolean;
}


export type Attrs = {
    disabled: boolean;
    pointer: JSONPointer;
    index: number;
    actions: Array<Action>;
}


export default {
    view(vnode) {
        const { disabled, pointer, index, actions } = vnode.attrs;
        return m(".ed-actions",
            {
                class: disabled ? "is-disabled" : "is-enabled"
            },
            m("i.mmf-icon.interactive", "more_vert"),
            m("ul",
                actions?.map(action => m("li",
                    m(Button,
                        {
                            disabled: action.disabled(pointer, index),
                            onclick: () => action.action(pointer, index)
                        },
                        m("i.mmf-icon", action.icon),
                        action.title
                    )
                ))
            )
        );
    }

} as m.Component<Attrs>;

