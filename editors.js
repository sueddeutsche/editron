module.exports = [
    require("./editors/oneofeditor"), // must come before other editors (may contain any type)
    require("./editors/arrayeditor"),
    require("./editors/objecteditor"),
    require("./editors/valueeditor")
];
