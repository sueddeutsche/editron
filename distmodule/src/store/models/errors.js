export const initialState = [];
export default {
    state: initialState,
    reducers: {
        set(state, errors = []) {
            return errors;
        }
    }
};
