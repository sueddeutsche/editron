import m from "mithril";
import getID from "../../utils/getID";
import populated from "../../utils/populated";


export type Attrs = {
    pointer: string;
    disabled?: boolean;
    hideTitle?: boolean;
    icon?: string;
    collapsed?: boolean;
    oncollapse?: Function;
    onadd?: Function;
    ondelete?: Function;
    onmovedown?: Function;
    onmoveup?: Function;
    title?: string;
}


function getClass(hasAction: boolean, { title, icon, disabled }): string {
    let classname = `${title ? "withTitle" : "noTitle"}`;
    classname += ` ${hasAction ? "withActions" : "noActions"}`;
    classname += ` ${icon ? "withIcon" : "noIcon"}`;
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

        return m(".editron-container__header",
            {
                "class": getClass(hasAction, attrs),
                name: getID(attrs.pointer)
            },

            m(".editron-container__title",
                populated(vnode.attrs.icon, m("i.mmf-icon", attrs.icon)),
                (!attrs.hideTitle) && m("h2", attrs.title)
            ),

            m(".editron-container__actions",
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

                attrs.oncollapse && m("i.mmf-icon.mmf-icon--collapse", {
                    onclick: attrs.oncollapse
                }, attrs.collapsed ? "keyboard_arrow_right" : "keyboard_arrow_down")
            )
        );
    }

} as m.Component<Attrs>;
