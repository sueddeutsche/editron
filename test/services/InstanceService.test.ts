/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import Controller from "../../src/Controller";
import InstanceService from "../../src/services/InstanceService";
import { MoveChange, DeleteChange } from "../../src/services/dataservice/change";


function createEditor(pointer = "#/target") {
    return {
        destroyed: false,
        pointer: "#/target",
        events: [],
        update(event) { this.events.push(event); },
        getPointer() { return this.pointer },
        getElement() { return document.createElement("div"); },
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
                changes: [<MoveChange>{ type: "move", pointer: "#/target", to: "#/newTarget" }]
            }
        });

        assert.ok(controller.service("data").observers["#/newTarget"].includes(editor.update));
        assert.ok(controller.service("validation").observer.observers["#/newTarget"].includes(editor.update));

        assert.equal(editor.pointer, "#/newTarget",
            "should update property 'pointer' on instance");

        assert.deepEqual(editor.events[0], { type: "pointer", value: "#/newTarget" },
            "should have send update-action 'pointer' to editor");
    });

    it("should update pointer before calling update event", () => {
        editor.update = function update(event) {
            if (event.type === "pointer") {
                // this.pointer should habe been updated
                this.pointerOnUpdate = this.pointer;
                // change pointer to an invalid value
                this.pointer = "abc";
            }
        }
        instanceService.add(editor);

        // sends pointer event to editor
        controller.service("data").notifyWatcher({
            type: "data:update:container",
            value: {
                pointer: "#",
                changes: [<MoveChange>{ type: "move", pointer: "#/target", to: "#/newTarget" }]
            }
        });

        assert.equal(editor.pointerOnUpdate, "#/newTarget", "should update property 'pointer' before update");
        assert.equal(editor.pointer, "#/newTarget", "should update property 'pointer' after update");
    });

    it("should remove observer-target for destroyed editors", () => {
        instanceService.add(editor);

        // data event is passed by controller to instanceService
        controller.service("data").notifyWatcher({
            type: "data:update:container",
            value: {
                pointer: "#",
                changes: [<DeleteChange>{ type: "delete", pointer: "#/target" }]
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
