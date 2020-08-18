import { ActionTypes } from "./actions";


export default (state = [], action) => {
    return action.type === ActionTypes.ERRORS_SET ? action.errors : state;
};
