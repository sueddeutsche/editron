/* eslint quote-props: 0 */
import m from "mithril";
import SessionService from "../../services/SessionService";
import Sortable from "sortablejs";
import { onAddSortable, onEndSortable } from "../../plugin/sortableplugin";
import gp from "gson-pointer";
import { ValidationError } from "../../types";

// import isNodeContext from "../../utils/isNodeContext";
// if (!isNodeContext()) {


import UISchema, { EDITRON_OPTION_PROPERTY } from "../../utils/UISchema";
import { JSONPointer } from "../../types";
import Controller from "../../Controller";


// function sanitizeString(title = "", maxLength = 40) {
//     return (title && title.substr) ? title.replace(/<.*?>/g, "").substr(0, maxLength) : title;
// }


export type Node = {
    pointer: JSONPointer;
    title: string,
    icon?: string;
    collapsible: boolean;
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
        icon: UISchema.getOption(pointer, controller, "minimap:icon", "icon"),
        collapsible: false,
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
        node.collapsible = depth !== 0;
        node.sortable = true;
        node.children = data
            .map((item, index) => buildTree(`${pointer}/${index}`, data[index], controller, depth - 1))
            .filter((value) => value !== undefined);
    }

    if (data != null && typeof data === "object") {
        node.collapsible = depth !== 0;
        node.children = Object
            .keys(data)
            .map((key) => buildTree(`${pointer}/${key}`, data[key], controller, depth - 1))
            .filter((value) => value !== undefined);
    }

    return node;
}



function getClass(node: Node, activeTarget: JSONPointer, errors: Array<ValidationError>) {
    const { icon, pointer } = node;

    let className = (hasError(pointer, errors) ? "has-error" : "no-error");

    if (activeTarget === pointer || activeTarget.includes(`${pointer}/`)) {
        className += " is-selected";
        if (activeTarget === pointer || node.children.length === 0) {
            className += " is-selected--target";
        }
    }

    if (node.collapsible) {
        className += " is-collapsible";
        if (isCollapsed(pointer) === true) {
            className += " is-collapsed";
        }
    }

    className += (icon == null || icon === "") && !node.collapsible ? " no-icon" : " with-icon";

    return className;
}


export type Attrs = {
    withHandle?: boolean;
    controller: Controller;
    node: Node;
    errors: Array<ValidationError>;
    currentSelection: JSONPointer;
    onSelect: (pointer: JSONPointer) => void;
    onUpdate: () => void;
    includeRootNode?: boolean;
}

export type State = {
    sortable: Sortable;
}

const NodeComponent: m.Component<Attrs, State> = {
    view(vnode) {
        const { node, controller, withHandle, onSelect, onUpdate, currentSelection, errors } = vnode.attrs;
        const { sortable, title, icon, pointer, collapsible, sortableGroup: group } = node;
        return m(".ed-minimap__child",
            {
                "data-nav": pointer,
                class: getClass(node, currentSelection, errors)
            },

            m(".ed-minimap__header",
                collapsible && m("span.mmf-icon", {
                    onclick: () => {
                        const collapsed = isCollapsed(pointer);
                        setCollapsedState(pointer, !collapsed);
                        onUpdate();
                    }
                }, isCollapsed(pointer) ? "expand_more" : "expand_less"),

                !(icon == null || icon === "") && m("span.mmf-icon", icon),

                m(".ed-minimap__title", {
                    onclick: () => onSelect(pointer)
                }, title || pointer),

                sortable && m("span.mmf-icon", { onclick: () => controller.addItemTo(pointer, 0) }, "add"),

                withHandle && m("span.ed-minimap__handle.mmf-icon", "drag_handle")
            ),

            m(".ed-minimap__children",
                {
                    class: sortable ? "sortable" : "",
                    // @sortable plugin
                    "data-parent": pointer,
                    oncreate: ({ dom }) => {
                        if (sortable) {
                            this.sortable = new Sortable(dom as HTMLElement, {
                                group,
                                handle: ".ed-minimap__handle",
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
                node.children.map(nextNode =>
                    m(NodeComponent, {
                        node: nextNode,
                        controller,
                        withHandle: sortable,
                        onSelect,
                        onUpdate,
                        errors,
                        currentSelection
                    })
                )
            )
        );
    }
};


const MinimapComponent: m.Component<Attrs> = {
    view({ attrs }) {
        if (attrs.node == null) {
            return undefined;
        }

        if (attrs.includeRootNode) {
            return m(".ed-minimap",
                m(NodeComponent, attrs)
            );
        }

        return m(".ed-minimap",
            attrs.node.children.map(node => m(NodeComponent, {
                node,
                controller: attrs.controller,
                withHandle: attrs.withHandle,
                onSelect: attrs.onSelect,
                onUpdate: attrs.onUpdate,
                errors: attrs.errors,
                currentSelection: attrs.currentSelection
            }))
        );
    }
};

function isCollapsed(pointer: JSONPointer): boolean {
    return SessionService.get(`minimap:collapse:${pointer}`, false);
}

function setCollapsedState(pointer: JSONPointer, state: boolean) {
    return SessionService.set(`minimap:collapse:${pointer}`, state);
}


function hasError(pointer, errors) {
    const hasErrors = errors.find((error) =>
        error.data.pointer === pointer || error.data.pointer.indexOf(`${pointer}/`) >= 0
    );
    return hasErrors !== undefined;
}

export default MinimapComponent;
