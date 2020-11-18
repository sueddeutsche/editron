export const initialState = {
    currentPointer: "",
    currentPage: "",
    /** true, if the overlay is currently visible */
    overlayIsVisible: false
};
export default {
    state: initialState,
    reducers: {
        setCurrentPage(state, pointer) {
            return { ...state, currentPage: pointer };
        },
        setCurrentPointer(state, pointer) {
            return { ...state, currentPointer: pointer };
        },
        showOverlay(state, overlayIsVisible) {
            return { ...state, overlayIsVisible };
        }
    }
};
