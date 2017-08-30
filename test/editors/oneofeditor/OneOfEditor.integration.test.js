const OneOfEditor = require("../../../editors/oneofeditor");
const testEditorIntegration = require("../../support/testEditorIntegration");


testEditorIntegration(
    OneOfEditor,
    "#/switch",
    require("../../support/data/schema.json"),
    require("../../support/data/data.json"),
    {
        ignoreRegisterErrors: true
    }
);
