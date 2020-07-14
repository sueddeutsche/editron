/* eslint no-case-declarations: 0 */
import copy from "../utils/copy";
import ensureItemIDs from "../utils/ensureItemIDs";
import gp from "gson-pointer";
import isRootPointer from "../utils/isRootPointer";
import { combineReducers } from "redux";
import { ActionTypes } from "./actions";
import undoable from "redux-undo";


const actions = [ActionTypes.DATA_SET, ActionTypes.UNDO, ActionTypes.REDO];
const defaultState = {
    hasChanged: false,
    action: null,
    data: null
};


function dataReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.DATA_SET:
            if (isRootPointer(action.pointer)) {
                return ensureItemIDs(copy(action.value));
            }
            const newState = copy(state);
            gp.set(newState, action.pointer, copy(action.value));
            return ensureItemIDs(newState);

        default:
            return state;
    }
}

const config = {
    debug: false,
    filter: (action) => actions.includes(action.type)
};


export default combineReducers({
    hasChanged: (state, action) => actions.includes(action.type),
    data: undoable(dataReducer, config)
});
