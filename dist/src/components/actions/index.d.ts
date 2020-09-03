import m from "mithril";
export declare type ActionItem = string | number;
export declare type Action = {
    /** material icon */
    icon: string;
    /** title */
    title?: string;
    /** additional css-classes separated by whitespace */
    classNames?: string;
    /** action */
    action: () => void;
    /** return true, to disable action */
    disabled: () => boolean;
};
export declare function renderAction(action: Action): m.Vnode;
