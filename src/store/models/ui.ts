import { JSONPointer } from "../../types";


export type UIState = {
    currentPointer: JSONPointer;
    currentPage: JSONPointer;
    overlayIsVisible: boolean;
}

export type Overlay = {
    isOpen: boolean;
}


export const initialState: UIState = {
    currentPointer: "",
    currentPage: "",
    /** true, if the overlay is currently visible */
    overlayIsVisible: false
};


export type UIReducers = {
    setCurrentPage(pointer: JSONPointer);
    setCurrentPointer(pointer: JSONPointer);
    showOverlay(overlayIsVisible: boolean);
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
        showOverlay(state: UIState, overlayIsVisible: boolean): UIState {
            return { ...state, overlayIsVisible };
        }
    }
};
