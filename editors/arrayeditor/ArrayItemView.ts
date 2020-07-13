import m from "mithril";


export const EditorTarget = ".editron-item";

export type Attrs = {
    disabled?: boolean;
    minItems?: number;
    maxItems?: number;
    showIndex?: boolean;
    index: number;
    length: number;
    add?: boolean;
    onadd?: Function;
    remove?: boolean;
    ondelete?: Function;
    move?: boolean;
    onmove?: Function;
    insert?: boolean;
    oninsert?: Function;
};


export default {

    view({ attrs }) {
        const { disabled = false } = attrs;
        const canRemove = attrs.minItems < attrs.length;
        const canAdd = attrs.maxItems > attrs.length;
        const showIndex = attrs.showIndex === true;

        return [
            // CONTROLS
            m("ul.editron-container__controls.editron-container__controls--child",
                {
                    "class": disabled ? "is-disabled" : undefined
                },
                (attrs.move === false || attrs.index === 0) ? "" : m("li",
                    { onclick: () => !disabled && attrs.onmove(attrs.index - 1) },
                    m("i.mmf-icon", "arrow_upward")
                ),
                (attrs.move === false || attrs.index === attrs.length - 1) ? "" : m("li",
                    { onclick: () => !disabled && attrs.onmove(attrs.index + 1) },
                    m("i.mmf-icon", "arrow_downward")
                ),
                (attrs.remove && attrs.ondelete && canRemove) ? m("li",
                    { onclick: () => !disabled && attrs.ondelete(attrs.index) },
                    m("i.mmf-icon", "delete")
                ) : "",
                (attrs.add && attrs.onadd && canAdd) ? m("li",
                    { onclick: () => !disabled && attrs.onadd(attrs.index) },
                    m("i.mmf-icon", "add")
                ) : ""
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

            // ADD BUTTON
            (attrs.insert && canAdd) ? m(".editron-container__separator.mmf-row",
                m(".editron-container__button--add",
                    {
                        "class": disabled ? "is-disabled" : undefined,
                        onclick: e => {
                            console.log("add", disabled);
                            if (!disabled) {
                                e.preventDefault();
                                attrs.onadd && attrs.onadd(attrs.index);
                            }
                        }
                    },
                    m("i.mmf-icon", "add_circle")
                )
            ) : ""
        ];
    }

} as m.Component<Attrs>;
