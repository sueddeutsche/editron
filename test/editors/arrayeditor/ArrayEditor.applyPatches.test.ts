/* eslint max-len: 0 */
import { strict as assert } from "assert";
import sinon from "sinon";

import Controller from "../../../src/Controller";
import ArrayEditor from "../../../src/editors/arrayeditor";


describe("ArrayEditor.applyPatches", () => {
    let controller;
    let editor;

    beforeEach(() => {
        const schema = {
            type: "object",
            properties: {
                list: {
                    type: "array",
                    items: {
                        type: "object", properties: { title: { type: "string" } }
                    }
                }
            }
        };

        const data = { list: [{ title: "first" }, { title: "second" }, { title: "third" }] };
        // @ts-ignore
        controller = new Controller(schema, data, { editors: [ArrayEditor] });
        editor = new ArrayEditor("#/list", controller, { id: "list" });
    });


    it("should not rebuild editors for changed item order", () => {
        const data = controller.data().get("#/list");
        data.push(data.shift()); // first object now last
        const lastChild = editor.children.length - 1;
        // pretest
        const childrenBefore = [...editor.children];
        assert.ok(childrenBefore !== editor.children, "should not test on reference");

        controller.data().set("#/list", data);

        assert.ok(childrenBefore[0] === editor.children[lastChild], "should have moved child editor in list");
        assert.ok(childrenBefore[1] === editor.children[0], "should have moved other child editors in list");
        assert.ok(editor.children[0].getPointer() === "#/list/0", "should have updated pointer of child editors");
        assert.ok(editor.children[1].getPointer() === "#/list/1", "should have updated pointer of child editors");
        assert.ok(childrenBefore[0].getPointer() === `#/list/${lastChild}`, "should have updated pointer of moved child");
        // test dom
        assert.ok(editor.$items.childNodes[0] === editor.children[0].$element, "should have moved first editor in markup");
        assert.ok(editor.$items.childNodes[lastChild] === editor.children[lastChild].$element, "should have moved to last editor in markup");
    });


    it("should not rebuild editors for inserted child", () => {
        const childrenBefore = [...editor.children];
        const data = controller.data().get("#/list");
        // pretest
        data.splice(1, 0, { title: "first-second" });
        assert.ok(data[1].title === "first-second", "should have inserted item");

        controller.data().set("#/list", data);

        assert.ok((childrenBefore.length + 1) === editor.children.length, "should have added child editor to list");
        assert.ok(childrenBefore[0] === editor.children[0], "should not modify first child editor");
        assert.ok(childrenBefore[1] === editor.children[2], "should have moved existing child editors");
        assert.ok(editor.children[0].getPointer() === "#/list/0", "should have update pointer of child editors");
        assert.ok(editor.children[1].getPointer() === "#/list/1", "should have update pointer of child editors");
        // test dom
        assert.ok(editor.$items.childNodes[1] === editor.children[1].$element, "should have inserted editor in markup");
    });
});
