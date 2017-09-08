const ValueEditor = require("../../../editors/valueeditor");
const testEditorIntegration = require("../../support/testEditorIntegration");


testEditorIntegration(
    ValueEditor,
    "#/modules/1",
    require("../../support/data/schema.json"),
    require("../../support/data/data.json")
);
