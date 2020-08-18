export declare const defaultOptions: {
    ok: boolean;
    save: boolean;
    fullscreen: boolean;
    onAbort: Function;
    onSave: Function;
};
export declare type Options = {
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
};
/**
 * Opens an overlay with a DOM-Node as contents
 */
declare const OverlayService: {
    /** Opens the overlay, showing the given `container` as content */
    open(container: HTMLElement, options: Options): void;
    close(): void;
    onChange(container: HTMLElement, options: Options): void;
    getElement(): any;
};
export default OverlayService;
