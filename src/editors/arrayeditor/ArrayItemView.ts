import m from "mithril";
import { Button } from "mithril-material-forms/index";
import InsertButtonView from "./InsertButtonView";


export const EditorTarget = ".editron-item";


export type Attrs = {
    disabled?: boolean;
    minItems?: number;
    maxItems?: number;
    showIndex?: boolean;
    index: number;
    length: number;

    add?: boolean;
    insert?: boolean;
    onAdd?: (index: number) => void;

    remove?: boolean;
    onRemove?: (index: number) => void;

    move?: boolean;
    onMove?: (index: number) => void;

    clone?: boolean;
    onClone?: () => void;
};


export default {

    view({ attrs }) {
        const { disabled = false } = attrs;
        const canRemove = attrs.minItems < attrs.length;
        const canAdd = attrs.maxItems > attrs.length;
        const showIndex = attrs.showIndex === true;

        return [
            // ARRAY-CONTROLS
            m(".editron-container__controls.editron-container__controls--child",
                {
                    "class": disabled ? "is-disabled" : "is-enabled"
                },
                m("i.mmf-icon", "more_vert"),
                m("ul",
                    !(attrs.move === false || attrs.index === 0) && m("li",
                        { onclick: () => !disabled && attrs.onMove(attrs.index - 1) },
                        m(Button, m("i.mmf-icon", "arrow_upward"), "move up")
                    ),

                    !(attrs.move === false || attrs.index === attrs.length - 1) && m("li",
                        { onclick: () => !disabled && attrs.onMove(attrs.index + 1) },
                        m(Button, m("i.mmf-icon", "arrow_downward"), "move down")
                    ),

                    attrs.clone && m("li",
                        { onclick: () => !disabled && attrs.onClone() },
                        m(Button, m("i.mmf-icon", "content_copy"), "duplicate")
                    ),

                    (attrs.remove && attrs.onRemove && canRemove) && m("li",
                        { onclick: () => !disabled && attrs.onRemove(attrs.index) },
                        m(Button, m("i.mmf-icon", "delete"), "delete")
                    ),

                    (attrs.add && attrs.onAdd && canAdd) && m("li",
                        { onclick: () => !disabled && attrs.onAdd(attrs.index) },
                        m(Button, m("i.mmf-icon", "add"), "add")
                    )
                )
            ),

            // TARGET CONTAINER FOR EDITOR
            m(EditorTarget, {
                "data-index": `${attrs.index + 1} / ${attrs.length}`,
                "class": [
                    disabled ? "is-disabled" : "",
                    canRemove ? "has-remove-enabled" : "has-remove-disabled",
                    canAdd ? "has-add-enabled" : "has-add-disabled",
                    showIndex ? "with-index" : ""
                ].join(" ").trim()
            }),

            (attrs.insert && canAdd) && m(InsertButtonView, {
                disabled,
                onAdd: attrs.onAdd,
                index: attrs.index
            })
        ];
    }

} as m.Component<Attrs>;
