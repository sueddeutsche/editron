import { JSONPointer } from "../types";
import Controller from "../Controller";
/**
 * Convenience class, which registers required events and base methods for value-editors (not object, array)
 *
 * Usage
 * ```js
 *      MyValueEditor extends AbstractValueEditor {
 *          constructor(pointer, controller, options) {
 *              super(pointer, controller, options);
 *              this.render();
 *          }
 *          render() {
 *              m.render(this.$element, m(MyView, this.viewModel));
 *          }
 *      }
 * ```
 */
export default class AbstractValueEditor {
    pointer: JSONPointer;
    controller: Controller;
    $element: HTMLElement;
    viewModel: any;
    static editorOf(pointer: JSONPointer, controller: Controller): boolean;
    /**
     * #options
     *      - editorValueType:String - custom type of editor value (added as classname)
     *      - editorElementProperties:Object - add custom properties to main DOM-element
     *      - viewModel:Object - viewModel which extends base viewmodel
     *
     * @param  {String} pointer         - json pointer to value
     * @param  {Controller} controller  - json editor controller
     * @param  {Object} options
     */
    constructor(pointer: JSONPointer, controller: Controller, options: any);
    getPointer(): string;
    updatePointer(pointer: any): void;
    setActive(active?: boolean): void;
    update(): void;
    setValue(value: any): void;
    setErrors(errors: any): void;
    render(): void;
    toElement(): HTMLElement;
    destroy(): void;
}
