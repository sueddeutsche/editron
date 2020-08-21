import m from "mithril";
import createElement from "./createElement";
import LocationService from "../services/LocationService";
import OverlayService from "../services/OverlayService";
import SelectTileComponent from "../components/overlayselecttiles";
import UISchema from "./UISchema";
import DataService from "../services/dataservice";
import SchemaService from "../services/SchemaService";
import { JSONPointer } from "../types";


/**
 * Request to insert an array child item at the given pointer. If multiple options are present, a dialogue is opened to
 * let the user select the appropriate type of child (oneof).
 * @param dataService
 * @param schemaService
 * @param pointer - to array on which to insert the child
 * @param index - index within array, where the child should be inserted (does not replace). Default: 0
 */
function addItem(dataService: DataService, schemaService: SchemaService, locationService: LocationService, pointer: JSONPointer, index = 0) {
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
        icon: UISchema.getDefaultOption(item, "icon"),
        title: UISchema.getDefaultOption(item, "title"),
        description: UISchema.getDefaultOption(item, "description"),
        value: oneOfIndex
    }));

    // create user-selection
    m.render(element, m(SelectTileComponent, {
        // description: "Modulauswahl - Bitte wählen",
        value: 0,
        options: selection,
        onchange: (value) => {
            const selectedIndex = parseInt(value, 10);
            addSelection(selectedIndex, schemaService, dataService);
            OverlayService.close();
            locationService.goto(`${pointer}/${index}`);
        }
    }));

    // add data of selection
    function addSelection(selectedIndex, schemaService, dataService) {
        const itemSchema = selectOptions[selectedIndex];
        const itemData = schemaService.getTemplate(itemSchema);
        list.splice(index, 0, itemData);
        dataService.set(pointer, list);
    }

    // and ask question
    OverlayService.open(element, { confirmButton: false });
        // .then(action => { console.log("dialog closed", action); });
}


export default addItem;
