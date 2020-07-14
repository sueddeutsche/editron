import m from "mithril";


export default function createElement(selector: string, attributes?: object): HTMLElement {
    const vnode = m(selector, attributes);
    const element = document.createElement(vnode.tag as string);
    Object.keys(vnode.attrs).forEach((key) => {
        if (key === "className") {
            vnode.attrs[key].split(" ").forEach((className) => element.classList.add(className));
        } else if (vnode.attrs[key] != null) {
            element.setAttribute(key, vnode.attrs[key]);
        }
    });
    return element;
};
