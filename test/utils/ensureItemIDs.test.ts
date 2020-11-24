/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import ensureItemIDs from "../../src/services/utils/ensureItemIDs";


const ID = ensureItemIDs.config.ID_PROPERTY;


describe("utils/ensureItemIDs", () => {

    it("should return the passed data", () => {
        const data = {};
        const returnValue = ensureItemIDs(data);

        assert.equal(returnValue, data);
    });

    it("should add unique ids to each array item", () => {
        const data = ensureItemIDs([{ title: "oh" }, { title: "my" }]);

        assert.ok(data[0][ID] != null); // eslint-disable-line no-unused-expressions
        assert.ok(data[1][ID] != null); // eslint-disable-line no-unused-expressions
        assert.notEqual(data[0][ID], data[1][ID]);
    });

    it("should not modify existing ids", () => {
        const data = [{ title: "oh" }, { title: "my" }];
        data[0][ID] = "manualId";
        ensureItemIDs(data);

        assert.equal(data[0][ID], "manualId");
        assert.ok(data[1][ID] != null); // eslint-disable-line no-unused-expressions
        assert.notEqual(data[0][ID], data[1][ID]);
    });

    it("should not add ids to non-array items", () => {
        const data = { first: { title: "oh" }, second: { title: "my" } };
        ensureItemIDs(data);

        assert.ok(data.first[ID] == null); // eslint-disable-line no-unused-expressions
        assert.ok(data.first.title[ID] == null); // eslint-disable-line no-unused-expressions
    });

    it("should add ids to nested arrays", () => {
        const data = [{ title: "oh", list: [{ title: "stilloh" }] }, { title: "my", list: [{ title: "stillmy" }] }];
        ensureItemIDs(data);

        assert.ok(data[0].list[0][ID] != null); // eslint-disable-line no-unused-expressions
        assert.ok(data[1].list[0][ID] != null); // eslint-disable-line no-unused-expressions
    });
});
