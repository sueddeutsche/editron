export declare const defaultOptions: {
    abortButton: string;
    confirmButton: string;
    fullscreen: boolean;
    onSave: () => void;
    onAbort: () => void;
};
export declare enum OverlayAction {
    Abort = 0,
    Close = 1,
    Confirm = 2
}
export declare type Options = {
    /** optional overlay title */
    header?: string;
    abortButton?: string | false;
    confirmButton?: string | false;
    /** fullscreen size of overlay, regardless of content */
    fullscreen?: boolean;
};
/**
 * Opens an overlay with a DOM-Node as contents
 */
declare const OverlayService: {
    /** root overlay container */
    $element: any;
    /** Promise.resolve of current overlay */
    resolve: any;
    /** Opens the overlay, showing the given `container` as content */
    open(dialog: HTMLElement, options: Options): Promise<OverlayAction>;
    /** close current dialog and overlay */
    close(action?: OverlayAction): void;
    /** helper: close current active dialog but keep overlay visible */
    removePanel(action?: OverlayAction): void;
    /** remove overlay container from dom */
    removeOverlay(): void;
    getElement(): any;
    render($dialog: HTMLElement, options: Options): void;
};
export default OverlayService;
