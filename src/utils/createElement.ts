import m from "mithril";


export type HTMLAttributes = {
    /** whitespace separated list of classNames, added to class (workaround) */
    className?: string;
    [p: string]: any;
}


export default function createElement(selector: string, attributes?: HTMLAttributes): HTMLElement {
    const vnode = m(selector, attributes);
    const element = document.createElement(vnode.tag as string);
    Object.keys(vnode.attrs).forEach((key) => {
        if (key === "className") {
            vnode.attrs[key].split(" ").forEach((className) => element.classList.add(className));
        } else if (vnode.attrs[key] != null && vnode.attrs[key] !== "") {
            element.setAttribute(key, vnode.attrs[key]);
        }
    });
    return element;
}
