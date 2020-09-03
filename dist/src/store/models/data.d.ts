import { JSONData, JSONPointer } from "../../types";
export declare type DataState = {
    undoSize: number;
    past: Array<JSONData>;
    present: JSONData;
    future: Array<JSONData>;
};
export declare const initialState: DataState;
export declare type ActionSet = {
    pointer: JSONPointer;
    value: JSONData;
    addToHistory?: boolean;
};
export interface DataReducers {
    undo(): any;
    redo(): any;
    clearHistory(): any;
    removeLastUndo(): any;
    set(action: ActionSet): any;
}
declare const _default: {
    state: DataState;
    reducers: {
        clearHistory(state: DataState): {
            past: any[];
            future: any[];
            undoSize: number;
            present: any;
        };
        removeLastUndo(state: DataState): {
            past: any[];
            undoSize: number;
            present: any;
            future: any[];
        };
        undo(state: DataState): DataState;
        redo(state: DataState): DataState;
        set(state: DataState, action: ActionSet): DataState;
    };
};
export default _default;
