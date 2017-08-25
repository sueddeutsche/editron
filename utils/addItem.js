const m = require("mithril");
const createElement = require("./createElement");
const LocationService = require("../services/LocationService");
const OverlayService = require("../services/OverlayService");
const SelectTileComponent = require("../components/overlayselecttiles");


/**
 * Request to insert an array child item at the given pointer. If multiple options are present, a dialogue is opened to
 * let the user select the appropriate type of child (oneof).
 *
 * @param {Object} dataService
 * @param {Object} schemaService
 * @param {String} pointer  - to array on which to insert the child
 * @param {Number} index    - index within array, where the child should be inserted (does not replace). Default: 0
 */
module.exports = function addItem(dataService, schemaService, pointer, index = 0) {
    const list = dataService.get(pointer);
    const schema = schemaService.get(pointer);
    if (schema.type !== "array") {
        throw new Error(`Can not add item to a non-array (${pointer})`);
    }

    const selectOptions = schemaService.getChildSchemaSelection(pointer, index);

    // single option, immediately create template data and add item to list
    if (selectOptions.length === 1) {
        addSelection(0, schemaService, dataService);
        return;
    }

    // multiple options, ask user
    const element = createElement(".overlay__item");
    const selection = selectOptions.map((item, oneOfIndex) => ({
        icon: item.ui.icon,
        title: item.ui.title,
        description: item.ui.description || "",
        value: oneOfIndex
    }));

    // create user-selection
    m.render(element, m(SelectTileComponent, {
        description: "Modulauswahl - Bitte wählen",
        value: "0",
        options: selection,
        onchange: (value) => {
            const selectedIndex = parseInt(value, 10);
            addSelection(selectedIndex, schemaService, dataService);
            OverlayService.close();
            LocationService.goto(`${pointer}/${index}`);
        }
    }));

    // add data of selection
    function addSelection(selectedIndex) {
        const itemSchema = selectOptions[selectedIndex];
        const itemData = schemaService.getTemplate(itemSchema);
        list.splice(index, 0, itemData);
        dataService.set(pointer, list);
    }

    // and ask question
    OverlayService.open(element, { save: false });
};
