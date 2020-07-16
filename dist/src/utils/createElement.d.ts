export declare type HTMLAttributes = {
    /** whitespace separated list of classNames, added to class (workaround) */
    className?: string;
    [p: string]: any;
};
export default function createElement(selector: string, attributes?: HTMLAttributes): HTMLElement;
