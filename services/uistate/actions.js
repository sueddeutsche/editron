const ActionTypes = {
    UI_PAGE_SET: "UI_PAGE_SET",
    UI_OVERLAY_SET: "UI_OVERLAY_SET",
    UI_CURRENT_SET: "UI_CURRENT_SET"
};

const ActionCreators = {
    setCurrentPage(pointer = "#") {
        return {
            type: ActionTypes.UI_PAGE_SET,
            value: pointer
        };
    },
    setCurrentPointer(pointer = "#") {
        return {
            type: ActionTypes.UI_CURRENT_SET,
            value: pointer
        };
    },
    setOverlay(content = false) {
        return {
            type: ActionTypes.UI_OVERLAY_SET,
            value: content
        };
    }
};


module.exports = {
    ActionTypes,
    ActionCreators
};
