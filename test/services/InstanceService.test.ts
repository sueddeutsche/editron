/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import Controller from "../../src/Controller";
import InstanceService from "../../src/services/InstanceService";
import { MoveChange, DeleteChange } from "../../src/services/DataService";


function createEditor(pointer = "#/target") {
    return {
        destroyed: false,
        pointer: "#/target",
        events: [],
        update(event) { this.events.push(event); },
        getPointer() { return this.pointer },
        toElement() { return document.createElement("div"); },
        destroy() { this.destroyed = true; }
    }
}


describe("InstanceService", () => {

    let instanceService;
    let controller;
    let editor;

    beforeEach(() => {
        controller = new Controller();
        instanceService = controller.services.instances;
        editor = createEditor();
    });

    it("should store and retrieve editor instance", () => {
        const ed = createEditor("#/target");

        instanceService.add(ed);

        assert.equal(instanceService.findFrom(ed.pointer).pop(), ed);
    });

    it("should register editor as observer on dataService and validationService", () => {

        instanceService.add(editor);

        assert.ok(controller.service("data").observers["#/target"].includes(editor.update));
        assert.ok(controller.service("validation").observer.observers["#/target"].includes(editor.update));
    });

    it("should remove editor as observer on dataService and validationService", () => {
        instanceService.add(editor);

        instanceService.remove(editor);

        assert.ok(!controller.service("data").observers["#/target"].includes(editor.update));
        assert.ok(!controller.service("validation").observer.observers["#/target"].includes(editor.update));
    });

    it("should change observer-target on dataService and validationService", () => {
        instanceService.add(editor);

        // data event is passed by controller to instanceService
        controller.service("data").notifyWatcher({
            type: "data:update:container",
            value: {
                pointer: "#",
                changes: [<MoveChange>{ type: "move", old: "#/target", next: "#/newTarget" }]
            }
        });

        assert.ok(controller.service("data").observers["#/newTarget"].includes(editor.update));
        assert.ok(controller.service("validation").observer.observers["#/newTarget"].includes(editor.update));

        assert.equal(editor.pointer, "#/newTarget",
            "should udpate property 'pointer' on instance");

        assert.deepEqual(editor.events[0], { type: "pointer", value: "#/newTarget" },
            "should have send update-action 'pointer' to editor");
    });

    it("should remove observer-target for destroyed editors", () => {
        instanceService.add(editor);

        // data event is passed by controller to instanceService
        controller.service("data").notifyWatcher({
            type: "data:update:container",
            value: {
                pointer: "#",
                changes: [<DeleteChange>{ type: "delete", old: "#/target" }]
            }
        });

        assert.ok(!controller.service("data").observers["#/target"].includes(editor.update));
        assert.ok(!controller.service("validation").observer.observers["#/target"].includes(editor.update));
        assert.ok(editor.destroyed === true, "should have called destroy on editor");
    });

    it("should disable all editors", () => {
        const ed1 = createEditor("#/1/2");
        const ed2 = createEditor("#/a/b");
        instanceService.add(ed1);
        instanceService.add(ed2);

        instanceService.setActive(false);

        assert.deepEqual(ed1.events[0], { type: "active", value: false });
        assert.deepEqual(ed2.events[0], { type: "active", value: false });
    });
});
