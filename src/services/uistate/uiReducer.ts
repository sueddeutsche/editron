import { combineReducers } from "redux";
import { ActionTypes } from "./actions";

const defaultState = {
    hasChanged: false,
    currentPage: "#",
    currentPointer: "#",
    overlay: false
};

function uiReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.UI_PAGE_SET:
            state = Object.assign({}, state);
            state.currentPage = action.value;
            return state;
        case ActionTypes.UI_CURRENT_SET:
            state = Object.assign({}, state);
            state.currentPointer = action.value;
            return state;
        case ActionTypes.UI_OVERLAY_SET:
            state = Object.assign({}, state);
            state.overlay = action.value;
            return state;
        default:
            return state;
    }
}

function hasChanged(state = false, action) { // eslint-disable-line @typescript-eslint/no-unused-vars
    return ActionTypes[action.type] == null ? false : action.type;
}


export default combineReducers({
    hasChanged,
    ui: uiReducer
});
