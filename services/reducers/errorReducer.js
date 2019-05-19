const ActionTypes = require("./actions").ActionTypes;


module.exports = function (state = [], action) {
    return action.type === ActionTypes.ERRORS_SET ? action.errors : state;
};
