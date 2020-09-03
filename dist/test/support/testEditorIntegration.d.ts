/**
 * Perform basic editor tests
 *  - check if all required methods are defined
 *  - check if the editor did register to update data event
 *  - check if the editor did register to clear-errors and add-error events
 *  - unregistering events on destroy
 *  - calling controller.removeInstance on destroy
 *
 * ## Usage Example
 *  const ArrayEditor = require("../../../lib/editor/arrayeditor");
 *  const testEditor = require("../../support/utils/testEditorIntegration");
 *  testEditor(ArrayEditor, "#", require("../../support/schema.json"), require("../../support/data.json"));
 *
 * @param  {Function} Constructor   - Constructor function of Editor
 * @param  {String} pointer         - pointer to value for editor
 * @param  {Object} schema          - the json schema to use (root must be an object)
 * @param  {Object} data            - the data to use (root must be an object)
 * @param  {Object} options         - options to deactive tests: ignoreRegisterErrors
 */
export default function testEditorIntegration(Constructor: any, pointer: any, schema: any, data: any, options?: {
    ignoreRegisterErrors: boolean;
}): void;
