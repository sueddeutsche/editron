import copy from "../../services/utils/copy";
import ensureItemIDs from "../../services/utils/ensureItemIDs";
import gp from "gson-pointer";
import isRootPointer from "../../services/utils/isRootPointer";
export const initialState = {
    undoSize: 50,
    past: [],
    present: null,
    future: []
};
export default {
    state: initialState,
    reducers: {
        clearHistory(state) {
            return { ...state, past: [], future: [] };
        },
        removeLastUndo(state) {
            const past = Array.from(state.past);
            past.pop();
            return { ...state, past };
        },
        undo(state) {
            if (state.past.length === 0) {
                return state;
            }
            const newState = copy(state);
            newState.future.push(newState.present);
            newState.present = newState.past.pop();
            return newState;
        },
        redo(state) {
            if (state.future.length === 0) {
                return state;
            }
            const newState = copy(state);
            newState.past.push(newState.present);
            newState.present = newState.future.pop();
            return newState;
        },
        set(state, action) {
            const { pointer = "#" } = action;
            const value = ensureItemIDs(action.value);
            const newState = copy(state);
            if (action.addToHistory !== false && newState.present != null) {
                newState.past.push(copy(newState.present));
                newState.future.length = 0;
                while (newState.past.length > state.undoSize) {
                    newState.past.shift();
                }
            }
            if (isRootPointer(pointer)) {
                newState.present = copy(value);
                return newState;
            }
            gp.set(newState.present, pointer, copy(value));
            return newState;
        }
    }
};
