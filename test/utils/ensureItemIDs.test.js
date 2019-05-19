/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const test = require("ava").test;
const ensureItemIDs = require("../../services/utils/ensureItemIDs");


const ID = ensureItemIDs.config.ID_PROPERTY;

test("should return the passed data", (t) => {
    const data = {};
    const returnValue = ensureItemIDs(data);

    t.is(returnValue, data);
});

test("should add unique ids to each array item", (t) => {
    const data = ensureItemIDs([{ title: "oh" }, { title: "my" }]);

    t.true(data[0][ID] != null); // eslint-disable-line no-unused-expressions
    t.true(data[1][ID] != null); // eslint-disable-line no-unused-expressions
    t.not(data[0][ID], data[1][ID]);
});

test("should not modify existing ids", (t) => {
    const data = [{ title: "oh" }, { title: "my" }];
    data[0][ID] = "manualId";
    ensureItemIDs(data);

    t.is(data[0][ID], "manualId");
    t.true(data[1][ID] != null); // eslint-disable-line no-unused-expressions
    t.not(data[0][ID], data[1][ID]);
});

test("should not add ids to non-array items", (t) => {
    const data = { first: { title: "oh" }, second: { title: "my" } };
    ensureItemIDs(data);

    t.true(data.first[ID] == null); // eslint-disable-line no-unused-expressions
    t.true(data.first.title[ID] == null); // eslint-disable-line no-unused-expressions
});

test("should add ids to nested arrays", (t) => {
    const data = [{ title: "oh", list: [{ title: "stilloh" }] }, { title: "my", list: [{ title: "stillmy" }] }];
    ensureItemIDs(data);

    t.true(data[0].list[0][ID] != null); // eslint-disable-line no-unused-expressions
    t.true(data[1].list[0][ID] != null); // eslint-disable-line no-unused-expressions
});
