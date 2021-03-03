/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import { changePointer } from "../../src/utils/changePointer";
describe("utils/changePointer", () => {
    it("should replace pointer with the change", () => {
        const result = changePointer("#/article/title", "#/article", "#/story");
        assert.equal(result, "#/story/title");
    });
    it("should not replace pointer if change does not apply", () => {
        const result = changePointer("#/article/title", "#/header", "#/navigation");
        assert.equal(result, "#/article/title");
    });
    it("should maintain remaining path", () => {
        const result = changePointer("#/contents/0/title/contents/1", "#/contents/0", "#/contents/1");
        assert.equal(result, "#/contents/1/title/contents/1");
    });
    it("should not replace partials in path", () => {
        const result = changePointer("#/contents/10/title", "#/contents/1", "#/contents/2");
        assert.equal(result, "#/contents/10/title");
    });
    it("should replace pointer when jsonPointer and changedPointer match", () => {
        const result = changePointer("#/article/title", "#/article/title", "#/story/title");
        assert.equal(result, "#/story/title");
    });
    it("should remove pointer correctly", () => {
        const result = changePointer("#/story/article/title", "#/story", "");
        assert.equal(result, "/article/title");
    });
});
