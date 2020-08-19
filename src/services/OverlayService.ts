/* eslint no-use-before-define: 0 */
import m from "mithril";
import Overlay from "../components/overlay";
import createElement from "../utils/createElement";
import { watch, dispatch } from "../store/global";


export const defaultOptions = {
    abortButton: "cancel",
    confirmButton: "ok",
    fullscreen: false,
    onSave: () => OverlayService.close(OverlayAction.Confirm),
    onAbort: () => OverlayService.close(OverlayAction.Abort)
};


export enum OverlayAction {
    Abort,
    Close,
    Confirm
}

export type Options = {
    abortButton?: string|false;
    confirmButton?: string|false;
    /** fullscreen size of overlay, regardless of content */
    fullscreen?: boolean;
    // /** called when Overlay is closed via ok/abort */
    // onAbort?: () => void;
    // /** called when Overlay is closed via save */
    // onSave?: () => void;
}


/**
 * Opens an overlay with a DOM-Node as contents
 */
const OverlayService = {
    /** root overlay container */
    $element: undefined,
    /** Promise.resolve of current overlay */
    resolve: undefined,

    /** Opens the overlay, showing the given `container` as content */
    open(dialog: HTMLElement, options: Options): Promise<OverlayAction> {
        OverlayService.removePanel();

        const $el = OverlayService.getElement();
        dialog.classList.add("overlay__item");
        OverlayService.render(dialog, { ...defaultOptions, ...options });
        document.body.appendChild($el);
        dispatch.ui.showOverlay(true);

        return new Promise(resolve => (OverlayService.resolve = resolve));
    },

    /** close current dialog and overlay */
    close(action: OverlayAction = OverlayAction.Close) {
        OverlayService.removePanel(action);
        OverlayService.removeOverlay();
    },

    /** helper: close current active dialog but keep overlay visible */
    removePanel(action: OverlayAction = OverlayAction.Close) {
        if (OverlayService.resolve) {
            OverlayService.resolve(action);
            OverlayService.resolve = undefined;
            // must destroy component for reuse
            m.render(OverlayService.getElement(), m("i"));
        }
    },

    /** remove overlay container from dom */
    removeOverlay() {
        dispatch.ui.showOverlay(false);
        const $el = OverlayService.getElement();
        $el.parentNode && $el.parentNode.removeChild($el);
    },

    getElement() {
        if (OverlayService.$element == null) {
            OverlayService.$element = createElement(".ui-overlay");
            // close popup if clicked on "background"
            OverlayService.$element.addEventListener("click", (e) => {
                if (e.target === OverlayService.$element) {
                    OverlayService.close();
                }
            });
        }
        return OverlayService.$element;
    },

    render($dialog: HTMLElement, options: Options) {
        m.render(OverlayService.getElement(),
            m(Overlay, {
                container: $dialog,
                onremove: () => OverlayService.close(),
                ...options
            })
        );
    }
};


watch(event => {
    if (event.value?.changes?.overlayIsVisible === false) {
        OverlayService.close();
    }
});


export default OverlayService;
