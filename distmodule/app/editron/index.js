import Controller from "../../src/Controller";
import DelegationPlugin from "../../src/plugin/delegationplugin";
import SortablePlugin from "../../src/plugin/sortableplugin";
import RemoteDataPlugin from "../../src/plugin/remotedataplugin";
import MinimapEditor from "../../src/editors/minimapeditor";
import schema from "./schema";
import AutocompleteEditor from '../../src/editors/autocompleteeditor';
import "./index.scss";
import "./index.html";
const data = {
    list: [{ type: "inline" }, { type: "external" }], simple: ["Lorem Linksrum"]
};
const editron = new Controller(schema, data, {
    locationService: {
        scrollTopOffset: 50
    },
    editors: [
        MinimapEditor,
        AutocompleteEditor
    ],
    plugins: [
        new SortablePlugin(),
        new RemoteDataPlugin(),
        new DelegationPlugin({
            onDelegation: (event) => {
                console.log("delegation", event);
                const dom = document.querySelector(".sidepanel");
                dom.appendChild(event.editor.getElement());
            }
        })
    ]
});
editron.createEditor("#", document.querySelector(".editor"));
editron.createEditor("#", document.querySelector(".minimap"), {
    minimap: {
        use: true
        // filter: ["#/groups", "#/groups/*/content", "#/groups/*/content/title"]
    }
});
// @ts-ignore
window.controller = editron;
