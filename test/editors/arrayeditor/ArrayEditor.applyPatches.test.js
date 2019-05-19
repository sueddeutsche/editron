/* eslint max-len: 0 */
const test = require("ava").test;
const sinon = require("sinon");

const Controller = require("../../../Controller");
const ArrayEditor = require("../../../editors/arrayeditor");


test.beforeEach((t) => {
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
    const controller = new Controller(schema, data, [ArrayEditor]);
    const editor = new ArrayEditor("#/list", controller, {});
    t.context.controller = controller;
    t.context.editor = editor;
});


test("should not rebuild editors for changed item order", (t) => {
    const controller = t.context.controller;
    const editor = t.context.editor;
    const data = controller.data().get("#/list");
    data.push(data.shift()); // first object now last
    const lastChild = editor.children.length - 1;
    // pretest
    const childrenBefore = [...editor.children];
    t.true(childrenBefore !== editor.children, "should not test on reference");

    controller.data().set("#/list", data);

    t.true(childrenBefore[0] === editor.children[lastChild], "should have moved child editor in list");
    t.true(childrenBefore[1] === editor.children[0], "should have moved other child editors in list");
    t.true(editor.children[0].getPointer() === "#/list/0", "should have updated pointer of child editors");
    t.true(editor.children[1].getPointer() === "#/list/1", "should have updated pointer of child editors");
    t.true(childrenBefore[0].getPointer() === `#/list/${lastChild}`, "should have updated pointer of moved child");
    // test dom
    t.true(editor.$items.childNodes[0] === editor.children[0].$element, "should have moved first editor in markup");
    t.true(editor.$items.childNodes[lastChild] === editor.children[lastChild].$element, "should have moved to last editor in markup");
});


test("should not rebuild editors for inserted child", (t) => {
    const controller = t.context.controller;
    const editor = t.context.editor;
    const childrenBefore = [...editor.children];
    const data = controller.data().get("#/list");
    // pretest
    data.splice(1, 0, { title: "first-second" });
    t.true(data[1].title === "first-second", "should have inserted item");

    controller.data().set("#/list", data);

    t.true((childrenBefore.length + 1) === editor.children.length, "should have added child editor to list");
    t.true(childrenBefore[0] === editor.children[0], "should not modify first child editor");
    t.true(childrenBefore[1] === editor.children[2], "should have moved existing child editors");
    t.true(editor.children[0].getPointer() === "#/list/0", "should have update pointer of child editors");
    t.true(editor.children[1].getPointer() === "#/list/1", "should have update pointer of child editors");
    // test dom
    t.true(editor.$items.childNodes[1] === editor.children[1].$element, "should have inserted editor in markup");
});


test("should call destroy() on removed array item", (t) => {
    const controller = t.context.controller;
    const editor = t.context.editor;
    const childEditor = sinon.spy(t.context.editor.children[1], "destroy");
    const editorElement = t.context.editor.children[1].$element;
    const data = controller.data().get("#/list");
    // pretest
    data.splice(1, 1);
    t.true((data.length + 1) === controller.data().get("#/list").length, "first-second", "should have item removed");

    controller.data().set("#/list", data);

    t.true(childEditor.called === true);
    t.true(editor.children.length === data.length, "should have child editor removed from child list");
    // test dom
    t.true(editor.$items.childNodes.length === data.length, "should have child editor removed from dom");
    t.true(editorElement.parentNode == null, "should have child editor removed from dom");
});


