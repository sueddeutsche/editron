const undoable = require("redux-undo").default;

/* eslint no-case-declarations: 0 */
const gp = require("gson-pointer");
const copy = require("../utils/copy");
const isRootPointer = require("../utils/isRootPointer");
const ActionTypes = require("./actions").ActionTypes;
const redux = require("redux");
const ensureItemIDs = require("../utils/ensureItemIDs");


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


module.exports = redux.combineReducers({
    hasChanged: (state, action) => actions.includes(action.type),
    data: undoable(dataReducer, config)
});
