import OneOfEditor from "../../../src/editors/oneofeditor"
import testEditorIntegration from "../../support/testEditorIntegration";


testEditorIntegration(
    OneOfEditor,
    "#/switch",
    require("../../support/data/schema.json"),
    require("../../support/data/data.json"),
    {
        ignoreRegisterErrors: true
    }
);
