import LocationService from "../services/LocationService";
import DataService from "../services/DataService";
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
declare function addItem(dataService: DataService, schemaService: SchemaService, locationService: LocationService, pointer: JSONPointer, index?: number): void;
export default addItem;
