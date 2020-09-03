import { JSONPointer } from "../../types";
export declare type UIState = {
    currentPointer: JSONPointer;
    currentPage: JSONPointer;
    overlayIsVisible: boolean;
};
export declare type Overlay = {
    isOpen: boolean;
};
export declare const initialState: UIState;
export declare type UIReducers = {
    setCurrentPage(pointer: JSONPointer): any;
    setCurrentPointer(pointer: JSONPointer): any;
    showOverlay(overlayIsVisible: boolean): any;
};
declare const _default: {
    state: UIState;
    reducers: {
        setCurrentPage(state: UIState, pointer: JSONPointer): UIState;
        setCurrentPointer(state: UIState, pointer: JSONPointer): UIState;
        showOverlay(state: UIState, overlayIsVisible: boolean): UIState;
    };
};
export default _default;
