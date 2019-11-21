import { Controller } from "../editron";

const controller = new Controller();
const data = controller.getData();
// dataservice
const dataRef = controller.data().getDataByReference();
controller.data().set("#/module", { type: "module" });
// locationservice
controller.location().goto("#/module");
// validation service
controller.validator().validate(4);
// schema service
const schema = controller.schema().get("#/module");