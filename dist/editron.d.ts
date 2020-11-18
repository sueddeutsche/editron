/**
 * Editron-Core. Depending on your build setup, use
 *
 * ```js
 * import { Controller } from "editron";
 * // or
 * const Controller = require("editron").Controller;
 * ```
 *
 * to get the editron core entry point for a enjoyable formular world
 *
 * @type exported methods and utilities
 * @property Controller    - the main Editron-Class you want to start all form applications
 * @property components        - mithril components, for default html-generation of headers and containers
 * @property editors           - basic editron editors for object, array and simple value reprensentation
 * @property services          - services to work on data, json-schema, validation and more
 * @property utils             - utility functions, to generate ids, translate strings and resolve editors
 * @property plugin            - basic plugin implementation for editor registration
 */
import Controller from "./src/Controller";
export default Controller;
export * as components from "./src/components";
export * as utils from "./src/utils";
export type { Editor, EditorPlugin, Options } from "./src/editors/Editor";
export type { EditorUpdateEvent } from "./src/editors/Editor";
export type { ValidationError, EditronConfigAttrs, FormatValidator, KeywordValidator, JSONSchema } from "./src/types";
export type { Direction } from "./src/utils/selection";
export { default as AbstractEditor } from "./src/editors/AbstractEditor";
export { default as AbstractValueEditor } from "./src/editors/AbstractValueEditor";
export { default as ArrayEditor } from "./src/editors/arrayeditor";
export { default as ObjectEditor } from "./src/editors/objecteditor";
export { default as OneOfEditor } from "./src/editors/oneofeditor";
export { default as ValueEditor } from "./src/editors/valueeditor";
export { default as DataService } from "./src/services/dataservice";
export { default as LocationService } from "./src/services/LocationService";
export { default as SchemaService } from "./src/services/SchemaService";
export { default as ValidationService } from "./src/services/ValidationService";
export { default as OverlayService } from "./src/services/OverlayService";
export { default as plugin } from "./src/plugin";
export { default as DelegationPlugin } from "./src/plugin/delegationplugin";
export { default as RemoteDataPlugin } from "./src/plugin/remotedataplugin";
export { default as SelectionPlugin } from "./src/plugin/selectionplugin";
export { default as SortablePlugin } from "./src/plugin/sortableplugin";
export { default as SyncPlugin } from "./src/plugin/syncplugin";
