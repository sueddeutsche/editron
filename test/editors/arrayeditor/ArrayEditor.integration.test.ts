import ArrayEditor from "../../../src/editors/arrayeditor";
import testEditorIntegration from "../../support/testEditorIntegration";


testEditorIntegration(
    ArrayEditor,
    "#/modules",
    require("../../support/data/schema.json"),
    require("../../support/data/data.json")
);
