function isScrollable(dom: HTMLElement): boolean {
    const hasScrollableContent = dom.scrollHeight > dom.clientHeight;
    const overflowYStyle = window.getComputedStyle(dom).overflowY;
    const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;
    return hasScrollableContent && !isOverflowHidden;
}


export default function getScrollParent(dom: HTMLElement): HTMLElement|Window {
    if (!dom || dom === document.body) {
        return window;
    }
    if (isScrollable(dom)) {
        return dom;
    }
    return getScrollParent(dom.parentNode as HTMLElement);
}
