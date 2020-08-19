import { JSONPointer } from "../../types";


export type UIState = {
    currentPointer: JSONPointer;
    currentPage: JSONPointer;
    overlay: JSONPointer;
}


export const initialState: UIState = {
    currentPointer: "",
    currentPage: "",
    overlay: ""
};


export type UIReducers = {
    setCurrentPage(pointer: JSONPointer);
    setCurrentPointer(pointer: JSONPointer);
    setOverlay(pointer: JSONPointer);
}


export default {
    state: initialState,
    reducers: {
        setCurrentPage(state: UIState, pointer: JSONPointer): UIState {
            return { ...state, currentPage: pointer };
        },
        setCurrentPointer(state: UIState, pointer: JSONPointer): UIState {
            return { ...state, currentPointer: pointer };
        },
        setOverlay(state: UIState, value: JSONPointer): UIState {
            return { ...state, overlay: value };
        }
    }
};
