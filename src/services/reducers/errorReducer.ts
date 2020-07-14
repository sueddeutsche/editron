const ActionTypes = require("./actions").ActionTypes;


export default (state = [], action) => {
    return action.type === ActionTypes.ERRORS_SET ? action.errors : state;
};
