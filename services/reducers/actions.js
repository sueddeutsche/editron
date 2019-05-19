/* eslint object-property-newline: 0 */
const UndoActionCreators = require("redux-undo").ActionCreators;
const UndoActionTypes = require("redux-undo").ActionTypes;

const ActionTypes = {
    // data
    DATA_SET: "DATA_SET",
    UNDO: UndoActionTypes.UNDO,
    REDO: UndoActionTypes.REDO,
    // validation
    ERRORS_SET: "ERRORS_SET"
};

const ActionCreators = {
    setData(pointer, newValue, prevValue, isSynched = false) {
        return { type: ActionTypes.DATA_SET, pointer, value: newValue, prevValue, isSynched };
    },
    undo() {
        return UndoActionCreators.undo();
    },
    redo() {
        return UndoActionCreators.redo();
    },
    setErrors(errors = []) {
        return { type: ActionTypes.ERRORS_SET, errors };
    }
};


module.exports = {
    ActionTypes,
    ActionCreators
};
