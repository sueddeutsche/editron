import ObjectEditor from "../../../src/editors/objecteditor"
import testEditorIntegration from "../../support/testEditorIntegration";


testEditorIntegration(
    ObjectEditor,
    "#",
    require("../../support/data/schema.json"),
    require("../../support/data/data.json")
);
