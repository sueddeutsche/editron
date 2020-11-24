import { ValidationError } from "../../types";


export type ErrorState = Array<ValidationError>;


export const initialState = [];


export interface ErrorReducers {
    set(errors: ErrorState);
}


export default {
    state: initialState,
    reducers: {
        set(state: ErrorState, errors: ErrorState = []) {
            return errors;
        }
    }
};
