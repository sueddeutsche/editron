import { strict as assert } from "assert";
import Editron from "../src/Controller";


describe("Editron", () => {

    it("should be able to instantiate editron", () => {
        const editron = new Editron({
            type: "object",
            properties: {
                title: {
                    type: "string",
                    default: "default-title"
                }
            }
        });

        assert.ok(editron.data().get("#/title") === "default-title");
    });
});
