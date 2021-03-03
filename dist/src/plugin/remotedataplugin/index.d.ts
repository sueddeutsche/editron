import Editron from "../../Editron";
import { JSONPointer } from "../../types";
import { Plugin } from "../index";
import { SimpleChange } from "../../services/dataservice/change";
/** required settings in editron:ui config */
export declare type EditronSchemaOptions = {
    remoteData?: {
        /** proxy function to call for remote data. Default to "json" */
        proxyMethod?: string;
        /** url to call. You can use {{property}}-syntax to render values of target `source` */
        requestParam: string;
        /** relative json-pointer (from data-location) to data, which should be used to create remote-url.
         currently aborts if no data is retrieved from this pointer */
        requestParamValues: JSONPointer;
        /** map of json-pointer from source to target */
        responseMapping: {
            [fromPointer: string]: JSONPointer;
        };
        /** if true, will add updates to undo history. Defaults to `false` */
        addToHistory?: boolean;
        /** set to true, to overwrite values */
        overwrite?: boolean;
    };
};
export declare const defaultOptions: {
    overwrite: boolean;
    proxyMethod: string;
    addToHistory: boolean;
};
export default class RemoteDataPlugin implements Plugin {
    id: string;
    editron: Editron;
    remotes: {
        [pointer: string]: {
            options: EditronSchemaOptions["remoteData"];
            removeObserver: () => void;
        };
    };
    initialize(editron: Editron): void;
    onModifiedData(changes: Array<SimpleChange>): void;
    createLink(pointer: JSONPointer, options: EditronSchemaOptions["remoteData"]): void;
    destroyLink(pointer: JSONPointer): void;
    setRemoteData(pointer: JSONPointer, remote: EditronSchemaOptions["remoteData"]): Promise<void>;
}
