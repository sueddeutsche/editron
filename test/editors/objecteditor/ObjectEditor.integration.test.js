const ObjectEditor = require("../../../editors/objecteditor");
const testEditorIntegration = require("../../support/testEditorIntegration");


testEditorIntegration(
    ObjectEditor,
    "#",
    require("../../support/data/schema.json"),
    require("../../support/data/data.json")
);
