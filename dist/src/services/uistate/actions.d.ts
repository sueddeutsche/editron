import { JSONPointer } from "../../types";
export declare const ActionTypes: {
    UI_PAGE_SET: string;
    UI_OVERLAY_SET: string;
    UI_CURRENT_SET: string;
};
export declare const ActionCreators: {
    setCurrentPage(pointer?: JSONPointer): {
        type: string;
        value: string;
    };
    setCurrentPointer(pointer?: JSONPointer): {
        type: string;
        value: string;
    };
    setOverlay(content?: any): {
        type: string;
        value: any;
    };
};
