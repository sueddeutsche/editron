const gp = require("gson-pointer");

module.exports = (pointer) => {
    const list = gp.split(pointer);
    list.pop();
    return gp.join(list, pointer[0] === "#");
};
