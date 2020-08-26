import m from "mithril";
import { Button } from "mithril-material-forms/index";
import { JSONPointer } from "../../types";
import ActionsView, { Action } from "../../components/actions";


export const EditorTarget = ".ed-item";



export type Attrs = {
    disabled?: boolean;
    showIndex?: boolean;
    index: number;
    pointer: JSONPointer;
    length: number;

    actions?: Array<Action>;
    insert?: Action;
};


export default {

    view({ attrs }) {
        const { disabled = false, pointer, index, insert, actions } = attrs;
        const showIndex = attrs.showIndex === true;

        return [
            m(ActionsView, {
                pointer,
                pointerItem: index,
                disabled,
                actions
            }),

            // TARGET CONTAINER FOR EDITOR
            m(EditorTarget, {
                "data-index": `${attrs.index + 1} / ${attrs.length}`,
                "class": [
                    disabled ? "is-disabled" : "",
                    showIndex ? "with-index" : ""
                ].join(" ").trim()
            }),

            insert && m(".ed-separator.mmf-row",
                    m(Button, {
                        disabled: insert.disabled(pointer, index),
                        onclick: () => insert.action(pointer, index)
                    },
                    m("i.mmf-icon", insert.icon),
                    insert.title
                )
            )
        ];
    }

} as m.Component<Attrs>;
