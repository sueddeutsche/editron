/**
 * Editron-Core. Depending on your build setup, use
 *
 * ```js
 * import { Editron } from "editron";
 * // or
 * const Editron = require("editron").Editron;
 * ```
 *
 * to get the editron core entry point for a enjoyable formular world
 *
 * @type exported methods and utilities
 * @property Editron    - the main Editron-Class you want to start all form applications
 * @property components        - mithril components, for default html-generation of headers and containers
 * @property editors           - basic editron editors for object, array and simple value reprensentation
 * @property services          - services to work on data, json-schema, validation and more
 * @property utils             - utility functions, to generate ids, translate strings and resolve editors
 * @property plugin            - basic plugin implementation for editor registration
 */
import Editron, { Options } from "./src/Editron";
export default Editron;
export { Editron, Options };
export * as components from "./src/components";
export * as utils from "./src/utils";
export * as store from "./src/store/global";
export type { Editor, EditorPlugin, Options as EditorOptions } from "./src/editors/Editor";
export type { EditorUpdateEvent } from "./src/editors/Editor";
export type { ValidationError, EditronConfigAttrs, FormatValidator, KeywordValidator, JSONSchema, JSONPointer, JSONData } from "./src/types";
export type { Direction } from "./src/utils/selection";
export type { SimpleChange, Change, AddChange, DeleteChange, MoveChange, ValueChange } from "./src/services/dataservice/change";
export { default as AbstractEditor, getTypeClass } from "./src/editors/AbstractEditor";
export type { Options as AbstractEditorOptions } from "./src/editors/AbstractEditor";
export { default as AbstractValueEditor } from "./src/editors/AbstractValueEditor";
export type { ViewModel as ValueEditorViewModel } from "./src/editors/AbstractValueEditor";
export { default as ArrayEditor } from "./src/editors/arrayeditor";
export { default as ObjectEditor } from "./src/editors/objecteditor";
export { default as OneOfEditor } from "./src/editors/oneofeditor";
export { default as ValueEditor } from "./src/editors/valueeditor";
export { default as AutocompleteEditor } from "./src/editors/autocompleteeditor";
export { default as MinimapEditor } from "./src/editors/minimapeditor";
export { default as DataService } from "./src/services/dataservice";
export { default as LocationService } from "./src/services/LocationService";
export type { FocusEvent, BlurEvent, PageEvent, TargetEvent, ScrollStartEvent, ScrollFinishEvent, Watcher as LocationWatcher, Event as LocationEvent } from "./src/services/LocationService";
export { default as SchemaService } from "./src/services/SchemaService";
export { default as ValidationService } from "./src/services/ValidationService";
export { default as OverlayService } from "./src/services/OverlayService";
export { default as SessionService } from "./src/services/SessionService";
export { default as plugin } from "./src/plugin";
export { default as DelegationPlugin } from "./src/plugin/delegationplugin";
export { default as RemoteDataPlugin } from "./src/plugin/remotedataplugin";
export { default as SelectionPlugin } from "./src/plugin/selectionplugin";
export { default as SortablePlugin, onAddSortable, onEndSortable } from "./src/plugin/sortableplugin";
export { default as SyncPlugin } from "./src/plugin/syncplugin";
export type { Plugin } from "./src/plugin";
export type { Patch } from "./src/services/utils/createDiff";
export { default as diffpatch } from "./src/services/utils/diffpatch";
