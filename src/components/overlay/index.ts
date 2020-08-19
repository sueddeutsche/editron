import m from "mithril";
import { Button } from "mithril-material-forms/index";
import { translate } from "../../utils/i18n";


export type Attrs = {
    container?: HTMLElement;
    header?: string;
    abortButton?: string|false;
    confirmButton?: string|false;
    onAbort?: () => void;
    onSave?: () => void;
    fullscreen?: boolean;
}


/**
 * Content overlay
 */
export default {

    view(vnode) {
        const { header, container, fullscreen, abortButton, onAbort, onSave, confirmButton } = vnode.attrs;

        return m("section.ui-overlay__card",
            {
                "class": fullscreen ? "ui-overlay__card--fullscreen" : null
            },
            header && m(".ui-card__header",
                m("h1", header)
            ),
            m(".ui-card__content",
                {
                    oncreate: contentNode => contentNode.dom.appendChild(container)
                }
            ),
            m(".ui-card__footer",
                abortButton && m(Button, { onclick: onAbort }, translate(abortButton)),
                confirmButton && m(Button, { onclick: onSave, raised: true }, translate(confirmButton))
            )
        );
    }

} as m.Component<Attrs>;
