import m from "mithril";
import mmf from "mithril-material-forms";
const { button: Button } = mmf;


export type Attrs = {
    container?: HTMLElement;
    header?: string;
    onAbort?: Function;
    onSave?: Function;
    showSave?: boolean;
    titleAbort?: string;
    fullscreen?: boolean;
}


/**
 * Content overlay
 */
export default {
    view(vnode) {
        return m("section.ui-overlay__card",
            {
                "class": vnode.attrs.fullscreen ? "ui-overlay__card--fullscreen" : null
            },
            vnode.attrs.header ? m(".ui-card__header",
                m("h1", vnode.attrs.header)
            ) : "",
            m(".ui-card__content",
                {
                    oncreate: (contentNode) => contentNode.dom.appendChild(vnode.attrs.container)
                }
            ),
            m(".ui-card__footer",
                m(Button,
                    {
                        onClick: vnode.attrs.onAbort
                    },
                    vnode.attrs.titleAbort
                ),
                vnode.attrs.showSave ? m(Button,
                    {
                        onClick: vnode.attrs.onSave
                    },
                    "Speichern"
                ) : ""
            )
        );
    }

} as m.Component<Attrs>;
