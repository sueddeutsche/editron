import m from "mithril";


export type Attrs = {
    disabled: boolean;
    index: number;
    onAdd: (index: number) => void;
}

const InsertButtonView: m.Component<Attrs> = {
    view(vnode) {
        const { disabled, onAdd, index } = vnode.attrs;

        return m(".editron-container__separator.mmf-row",
            m(".editron-container__button--add",
                {
                    "class": disabled && "is-disabled",
                    onclick: e => {
                        if (!disabled) {
                            e.preventDefault();
                            onAdd && onAdd(index);
                        }
                    }
                },
                m("i.mmf-icon", "add_circle")
            )
        );
    }
};


export default InsertButtonView;
