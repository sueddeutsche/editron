/* eslint object-property-newline: 0 */
import { ActionCreators as UndoActions, ActionTypes as UndoTypes } from "redux-undo";


export const ActionTypes = {
    // data
    DATA_SET: "DATA_SET",
    UNDO: UndoTypes.UNDO,
    REDO: UndoTypes.REDO,
    // validation
    ERRORS_SET: "ERRORS_SET"
};


export const ActionCreators = {
    setData(pointer, newValue, prevValue, isSynched = false) {
        return { type: ActionTypes.DATA_SET, pointer, value: newValue, prevValue, isSynched };
    },
    undo() {
        return UndoActions.undo();
    },
    redo() {
        return UndoActions.redo();
    },
    setErrors(errors = []) {
        return { type: ActionTypes.ERRORS_SET, errors };
    }
};
