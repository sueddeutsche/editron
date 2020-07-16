import m from "mithril";
import { JSONSchema } from "../../types";
export declare type Attrs = {
    schema: JSONSchema;
    options?: any;
    onblur?: Function;
    onfocus?: Function;
    onchange?: Function;
};
declare const Component: m.Component<Attrs>;
export default Component;
