import m from "mithril";


export type Attrs = {
    active: boolean;
    value?: number;
    title?: string;
    icon?: string;
    description?: string|m.Vnode;
};


export default {
    view(vnode) {
        return m(".editron-form-box",
            {
                "data-value": vnode.attrs.value,
                "data-type": vnode.attrs.title.toLowerCase() // @uitest
            },
            m(".editron-form-box__content",
                m(".editron-form-box__title",
                    [
                        vnode.attrs.icon ? m(".mmf-icon", vnode.attrs.icon) : "",
                        vnode.attrs.title
                    ]
                ),
                m(".editron-form-box__description", vnode.attrs.description)
            )
        );
    }

} as m.Component<Attrs>;
