/* eslint quote-props: 0 */
import m from "mithril";
import SessionService from "../../services/SessionService";
import getId from "../../utils/getID";
import isNodeContext from "../../utils/isNodeContext";
import Sortable from "sortablejs";
import { onAddSortable, onEndSortable } from "../../plugin/sortableplugin";
import gp from "gson-pointer";

// if (!isNodeContext()) {


import UISchema, { EDITRON_OPTION_PROPERTY } from "../../utils/UISchema";
import { JSONPointer } from "../../types";
import Controller from "../../Controller";


function sanitizeString(title = "", maxLength = 40) {
    return (title && title.substr) ? title.replace(/<.*?>/g, "").substr(0, maxLength) : title;
}


export type Node = {
    pointer: JSONPointer;
    title: string,
    icon?: string;
    sortable: boolean;
    sortableGroup?: string;
    children: Array<Node>;
}


export function buildTree(pointer: JSONPointer, data, controller: Controller, depth = 1): Node {
    // @ui-option hidden
    if (depth < 0 || UISchema.getOption(pointer, controller, "hidden")) {
        return undefined;
    }

    // @todo this is one step in rebuilding UISchema
    const schema = controller.service("schema").get(pointer);
    const schemaOptions = schema[EDITRON_OPTION_PROPERTY] || {};
    const skipTo = schemaOptions.minimap?.skipTo;

    if (skipTo) {
        const nextData = gp.get(data, skipTo);
        const nextPointer = gp.join(pointer, skipTo);
        return buildTree(nextPointer, nextData, controller, depth);
    }

    const node: Node = {
        pointer,
        title: schemaOptions.minimap?.title || schema.title || pointer,
        icon: UISchema.getOption(pointer, controller, "index:icon", "icon"),
        sortable: false,
        sortableGroup: schemaOptions.sortable?.group || pointer,
        children: []
    };

    if (schemaOptions.minimap?.titlePointer) {
        const titlePointer = gp.join(pointer, schemaOptions.minimap?.titlePointer);
        const value = controller.service("data").get(titlePointer);
        if (!(value == null || value == "")) {
            node.title = value;
        }
    }

    if (Array.isArray(data)) {
        node.sortable = true;
        node.children = data
            .map((item, index) => buildTree(`${pointer}/${index}`, data[index], controller, depth - 1))
            .filter((value) => value !== undefined);
    }

    if (data != null && typeof data === "object") {
        node.children = Object
            .keys(data)
            .map((key) => buildTree(`${pointer}/${key}`, data[key], controller, depth - 1))
            .filter((value) => value !== undefined);
    }

    return node;
}



function getClass(pointer, activeTarget, errors) {
    let className = (hasError(pointer, errors) ? "hasError" : "hasNoError");
    if (activeTarget === pointer || activeTarget.includes(`${pointer}/`)) {
        className += " isSelected";
    }

    if (getCollapsedState(pointer) === true) {
        className += " isCollapsed";
    }
    return className;
}


export type Attrs = {
    withHandle?: boolean;
    controller: Controller;
    node: Node;
    errors: Array<object>;
    currentSelection: JSONPointer;
    onSelect: (pointer: JSONPointer) => void;
}

export type State = {
    sortable: Sortable;
}

const NodeComponent: m.Component<Attrs, State> = {
    view(vnode) {
        const { node, controller, withHandle, onSelect, currentSelection, errors } = vnode.attrs;
        const { children, sortable, title, pointer, sortableGroup: group } = node;
        return m(".editron-minimap__item", { "data-nav": pointer },
            m(".editron-minimap__header",
                {
                    onclick: () => onSelect(pointer),
                    class: getClass(pointer, currentSelection, errors)
                },
                m(".editron-minimap__title", title || pointer),
                withHandle && m("span.editron-minimap__handle.mmf-icon", "drag_handle")
            ),
            m(".editron-minimap__children",
                {
                    class: sortable && "sortable",
                    // @sortable plugin
                    "data-parent": pointer,
                    oncreate: ({ dom }) => {
                        if (sortable) {
                            this.sortable = new Sortable(dom as HTMLElement, {
                                group,
                                handle: ".editron-minimap__handle",
                                onAdd(event) {
                                    onAddSortable(pointer, controller, event);
                                },
                                onEnd(event) {
                                    onEndSortable(pointer, controller, event);
                                }
                            });
                        }
                    },
                    onremove: () => this.sortable && this.sortable.destroy()
                },
                node.children.map((nextNode, index) =>
                    m(NodeComponent, {
                        node: nextNode,
                        controller,
                        withHandle: true,
                        onSelect,
                        errors,
                        currentSelection
                    })
                )
            )
        );
    }
};


const MinimapComponent: m.Component<Attrs> = {
    view(vnode) {
        if (vnode.attrs.node == null) {
            return undefined;
        }

        return m(".editron-minimap-editor",
            m(NodeComponent, vnode.attrs)
        );
    }
};

function isUrl(value) {
    return typeof value === "string" && /^https?:\/\//.test(value);
}

const Icon = {
    view(vnode) {
        if (isUrl(vnode.attrs.icon)) {
            return m("span.editron-minimap.editron-minimap--dummy",
                m("i.mmf-icon.mmf-icon--thumbnail", { style: `background-image: url(${vnode.attrs.icon})` })
            );
        }

        if (vnode.attrs.icon) {
            return m("span.editron-minimap.editron-minimap--dummy",
                m("i.mmf-icon", vnode.attrs.icon)
            );
        }

        return m("span.editron-minimap.editron-minimap--dummy");
    }
};


function getCollapsedState(pointer) {
    return SessionService.get(`index:collapse:${pointer}`, false);
}

function setCollapsedState(pointer, state) {
    return SessionService.set(`index:collapse:${pointer}`, state);
}


function hasError(pointer, errors) {
    const hasErrors = errors.find((error) =>
        error.data.pointer === pointer || error.data.pointer.indexOf(`${pointer}/`) >= 0
    );
    return hasErrors !== undefined;
}



const List = {

    toggleCollapse(item) {
        item.$collapseTarget.classList.toggle("isCollapsed");
        setCollapsedState(item.pointer, item.$collapseTarget.classList.contains("isCollapsed"));
    },

    view(vnode) {
        return m("ul.editron-minimap-list", vnode.attrs.children.map((item) => {
            let collapseIcon: string|m.Vnode = "";
            if (item.editable && item.children.length > 0) {
                // collapse sublist action
                collapseIcon = m("span.editron-minimap.editron-minimap--collapse",
                    { onclick: () => this.toggleCollapse(item) },
                    m("i.mmf-icon", "expand_less")
                );
            } else if (item.editable && item.children.length === 0) {
                // empty icon, nothing to expand
                collapseIcon = m("span.editron-minimap.editron-minimap--dummy",
                    m("i.mmf-icon", "")
                );
                // no children - deactivate collapse per default
                setCollapsedState(item.pointer, false);
            }

            return m("li",
                {
                    class: getClass(item.pointer, vnode.attrs.activeTarget, vnode.attrs.errors),
                    oncreate: (node) => (item.$collapseTarget = node.dom)
                },
                m(".editron-minimap",
                    {
                        "data-nav": item.pointer,
                        class: item.editable ? "editron-minimap--editable" : "editron-minimap--default"
                    },
                    collapseIcon,
                    m("a.editron-minimap",
                        {
                            href: `#${getId(item.pointer)}`,
                            onclick: (e) => {
                                e.preventDefault();
                                vnode.attrs.onClick(item);
                            }
                        },
                        item.title
                    ),
                    item.editable ? m("span.editron-minimap.editron-minimap--add",
                        {
                            onclick: () => vnode.attrs.onAdd(item)
                        },
                        m("i.mmf-icon", "playlist_add")
                    ) : m("span.editron-minimap")
                ),
                m(vnode.attrs.ListComponent, Object.assign({}, vnode.attrs, item), vnode.children)
            );
        }));
    }
};





export default MinimapComponent;
