import m from "mithril";
import populated from "../../utils/populated";


export type Attrs = {
    pointer: string;
    disabled?: boolean;
    hideTitle?: boolean;
    icon?: string;
    collapsed?: boolean;
    oncollapse?: () => void;
    onadd?: () => void;
    ondelete?: () => void;
    onmovedown?: () => void;
    onmoveup?: () => void;
    title?: string;
}


function getClass(hasAction: boolean, { title, icon, disabled }): string {
    let classname = `${title ? "with-title" : "no-title"}`;
    classname += ` ${hasAction ? "with-actions" : "no-actions"}`;
    classname += ` ${icon ? "with-icon" : "no-icon"}`;
    classname += disabled ? " is-disabled" : "";
    return classname;
}


export default {
    view(vnode) {
        const attrs = {
            icon: "",
            title: "",
            disabled: false,
            ...vnode.attrs
        };

        const hasAction =
            (attrs.onadd || attrs.ondelete || attrs.onmoveup || attrs.onmovedown || attrs.oncollapse) != null;

        return m(".ed-header",
            {
                "class": getClass(hasAction, attrs)
            },

            m(".ed-header__title",
                populated(vnode.attrs.icon, m("i.mmf-icon", attrs.icon)),
                (!attrs.hideTitle) && m("h2", attrs.title)
            ),

            m(".ed-header__actions",
                attrs.onmoveup && m("i.mmf-icon.mmf-icon--add", {
                    onclick: attrs.onmoveup
                }, "arrow_upward"),

                attrs.onmovedown && m("i.mmf-icon.mmf-icon--add", {
                    onclick: attrs.onmovedown
                }, "arrow_downward"),

                attrs.onadd && m("i.mmf-icon.mmf-icon--add", {
                    onclick: () => attrs.onadd()
                }, "add"),

                attrs.ondelete && m("i.mmf-icon.mmf-icon--delete", {
                    onclick: attrs.ondelete
                }, "delete"),

                attrs.oncollapse && m("i.mmf-icon.mmf-icon--collapse.interactive", {
                    onclick: attrs.oncollapse
                }, attrs.collapsed ? "keyboard_arrow_right" : "keyboard_arrow_down")
            )
        );
    }

} as m.Component<Attrs>;
