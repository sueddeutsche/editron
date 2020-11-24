import { ValidationError } from "../../types";
export declare type ErrorState = Array<ValidationError>;
export declare const initialState: any[];
export interface ErrorReducers {
    set(errors: ErrorState): any;
}
declare const _default: {
    state: any[];
    reducers: {
        set(state: ErrorState, errors?: ErrorState): ErrorState;
    };
};
export default _default;
