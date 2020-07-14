import { JSONPointer } from "../../types";


export const ActionTypes = {
    UI_PAGE_SET: "UI_PAGE_SET",
    UI_OVERLAY_SET: "UI_OVERLAY_SET",
    UI_CURRENT_SET: "UI_CURRENT_SET"
};

export const ActionCreators = {
    setCurrentPage(pointer: JSONPointer= "#") {
        return {
            type: ActionTypes.UI_PAGE_SET,
            value: pointer
        };
    },
    setCurrentPointer(pointer: JSONPointer = "#") {
        return {
            type: ActionTypes.UI_CURRENT_SET,
            value: pointer
        };
    },
    setOverlay(content: any = false) {
        return {
            type: ActionTypes.UI_OVERLAY_SET,
            value: content
        };
    }
};
