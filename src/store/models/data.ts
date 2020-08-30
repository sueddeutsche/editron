import copy from "../../services/utils/copy";
import ensureItemIDs from "../../services/utils/ensureItemIDs";
import gp from "gson-pointer";
import isRootPointer from "../../services/utils/isRootPointer";
import { JSONData, JSONPointer } from "../../types";


export type DataState = {
    undoSize: number;
    past: Array<JSONData>;
    present: JSONData;
    future: Array<JSONData>;
}


export const initialState: DataState = {
    undoSize: 50,
    past: [],
    present: null,
    future: []
};


export type ActionSet = {
    pointer: JSONPointer,
    value: JSONData;
    addToHistory?: boolean;
}


export interface DataReducers {
    undo();
    redo();
    clearHistory();
    removeLastUndo();
    set(action: ActionSet);
}


export default {
    state: initialState,
    reducers: {
        clearHistory(state: DataState) {
            return { ...state, past: [], future: [] };
        },
        removeLastUndo(state: DataState) {
            const past = Array.from(state.past);
            past.pop();
            return { ...state, past };
        },
        undo(state: DataState) {
            if (state.past.length === 0) {
                return state;
            }
            const newState = copy(state);
            newState.future.push(newState.present);
            newState.present = newState.past.pop();
            return newState;
        },
        redo(state: DataState) {
            if (state.future.length === 0) {
                return state;
            }
            const newState = copy(state);
            newState.past.push(newState.present);
            newState.present = newState.future.pop();
            return newState;
        },
        set(state: DataState, action: ActionSet) {
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
