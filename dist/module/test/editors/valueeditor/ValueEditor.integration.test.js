import ValueEditor from "../../../src/editors/valueeditor";
import testEditorIntegration from "../../support/testEditorIntegration";
testEditorIntegration(ValueEditor, "#/modules/1", require("../../support/data/schema.json"), require("../../support/data/data.json"));
