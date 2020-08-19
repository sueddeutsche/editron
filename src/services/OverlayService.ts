/* eslint no-use-before-define: 0 */
import m from "mithril";
import Overlay from "../components/overlay";
import createElement from "../utils/createElement";
import { watch, getState } from "../store/global";


watch(event => {
    if (event.type === "global" && event.value.modelId === "ui") {
        if (event.value.changes.overlay) {
            const overlay = event.value.changes.overlay;
            console.log("overlay event", overlay);
            OverlayService.onChange(overlay?.element, overlay?.options);
        }
    }
});


export const defaultOptions = {
    ok: false,
    save: true,
    fullscreen: false,
    onAbort: Function.prototype,
    onSave: Function.prototype
};


export type Options = {
    /** display `ok`, instead of `abort` */
    ok?: boolean;
    /** fullscreen size of overlay, regardless of content */
    fullscreen?: boolean;
    /** show save button, defaults to true */
    save?: boolean;
    /** called when Overlay is closed via ok/abort */
    onAbort?: () => void;
    /** called when Overlay is closed via save */
    onSave?: () => void;
}


/**
 * Opens an overlay with a DOM-Node as contents
 */
const OverlayService = {

    /** Opens the overlay, showing the given `container` as content */
    open(container: HTMLElement, options: Options) {
        // @ts-ignore
        UIState.setOverlay({
            element: container,
            options: { ...defaultOptions, ...options }
        });
    },

    close() {
        // const currentContent = getState().ui.overlay;
        // if (currentContent !== content) {
        //     this.state.dispatch(ActionCreators.setOverlay(content));
        //     this.emitter.emit(EventType.OVERLAY, this.get("overlay"));
        // }


        // must destroy component for reuse
        m.render(this.getElement(), m("i"));
    },

    onChange(container: HTMLElement, options: Options) {
        if (container == null) {
            const $el = this.getElement();
            $el.parentNode && $el.parentNode.removeChild($el);
            return;
        }

        const $el = this.getElement();
        container.classList.add("overlay__item");
        m.render($el,
            m(Overlay, {
                container,
                fullscreen: options.fullscreen,
                showSave: options.save,
                titleAbort: options.ok ? "OK" : "Abbrechen",
                onSave: () => {
                    options.onSave();
                    this.close();
                },
                onAbort: () => this.close(), // calls onremove -> onAbort
                onremove: () => options.onAbort()
            })
        );

        document.body.appendChild($el);
    },

    getElement() {
        if (this.$element == null) {
            this.$element = createElement(".ui-overlay");
            this.$element.addEventListener("click", (e) => {
                // close popup if clicked on "background"
                if (e.target === this.$element) {
                    this.close();
                }
            });
        }
        return this.$element;
    }
};


export default OverlayService;
