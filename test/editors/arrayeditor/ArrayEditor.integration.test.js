const ArrayEditor = require("../../../editors/arrayeditor");
const testEditorIntegration = require("../../support/testEditorIntegration");


testEditorIntegration(
    ArrayEditor,
    "#/modules",
    require("../../support/data/schema.json"),
    require("../../support/data/data.json")
);
