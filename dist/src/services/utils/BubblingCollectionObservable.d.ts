import { JSONPointer, ValidationError } from "../../types";
export declare type Observer = {
    (event: Array<ValidationError>): void;
    receiveChildEvents?: boolean;
};
/**
 * > Internal helper, mainly used in [ValidationService](#validationservice) to support the weird notification behaviour
 * of error-events.
 *
 *
 * ### Motivation
 *
 * Error-events in the validation process occur per error, because we want them to pass as quickly as
 * possible (Asynchronous errors may take a long time and available instant feedback are postponed). In the previous
 * version two events were required in every editor
 *
 * 1. observing "start validation"-events to reset the errors and
 * 2. observing "add error"-events to build up the asynchronous incoming error-list
 *
 * This is tedious and brings some overhead using the api. Thus, the observe "set error"-event, introduced hereby
 * will collect the errors and repeatedly call the observer with the current, complete list of errors
 *
 * 1. for the observable and
 * 2. any observable that includes listening to changes of child-editors
 *
 *
 * ### Usage as observer
 *
 * An observer will receive an up-to-date version of all events occuring at the location
 *
 * ```js
 *  // init
 *  observable.observe("#/pointer/to/my/location", (errors) => {
 *      // list of current errors, continously updated
 *      this.errors = errors;
 *      this.processErrors(); // or some such
 *  });
 *  ```
 *
 * or if you are interested in events occuring further down in data
 *
 * ```js
 *  // init
 *  observable.observe("#/pointer/to/my/location", (errors) => {
 *      // list of current errors at location from pointer and further down within the data structure e.g.
 *      // "#/pointer/to/my/location", "#/pointer/to/my/location/xy", "#/pointer/to/my/location/az/er", etc
 *      continously updated
 *      this.errors = errors;
 *      this.processErrors(); // or some such
 *  }, true); // <- bubble events
 *  ```
 * and remove the event listener with
 *
 * ```js
 *  observable.observe("#/pointer/to/my/location", myRegisteredCallbackFunction);
 * ```
 *
 * ### Usage as observable
 *
 * ```js
 *  // init
 *  this.observers = new BubblingCollectionObservable();
 *  // notify session
 *  this.observers.notify("#/pointer/to/location", { event });
 *  // another notification
 *  this.observers.notify("#/pointer/to/any-location", { event2 });
 *  // same target or if listening with the option `receiveChildEvents`, will receive
 *  [{ event }, { event2 }] // observable event
 *  // and reset session by
 *  this.observers.reset(); // any observers will be reset with an events receiving an empty list
 *  [] // observable event
 *  // sending another notification will notify the target with a new list of events
 *  this.observers.notify("#/pointer/to/any-location", { event3 });
 *  [{ event3 }] // observable event
 * ```
 *
 *
 */
declare class BubblingCollectionObservable {
    observers: {};
    eventCollection: {};
    bubbleCollection: {};
    constructor();
    /**
     * Observe events on the _pointer_ (`#/observe/location`). May also observe
     * events of _child-pointers_ (`#/observe/location/child/item`) with the
     * option `receiveChildEvents` set to `true`
     *
     * @param pointer - location to observe
     * @param observer - observer
     * @param [receiveChildEvents=false]
     */
    observe(pointer: JSONPointer, observer: Observer, receiveChildEvents?: boolean): Observer;
    /**
     * Remove an observer
     * @param  {JsonPointer} pointer
     * @param  {Function} observer
     */
    removeObserver(pointer: JSONPointer, observer: any): void;
    /**
     * @todo this might become obsolete by clearEvents
     *
     * Reset all collections from the previous events, starting with a list of
     * empty events. Any previously called observers will be called again with
     * an empty event-list `[]`.
     */
    reset(): void;
    /**
     * Clears all events at a given pointer and notifies all listeners with
     * their changed list of events
     *
     * @param  {JsonPointer} pointer
     * @param  {boolean} [clearChildren=true]    if false, children of `pointer` will not be reset
     */
    clearEvents(pointer: JSONPointer, clearChildren?: boolean): void;
    /**
     * Notifies all listeners of `pointer` (bubble notification)
     *
     * @param pointer
     * @param eventCollection    - array of events at target `pointer`
     */
    _notifyAll(pointer: JSONPointer, eventCollection: Array<ValidationError>): void;
    /**
     * Notify observers at _pointer_. Note that the received event is a
     * aggregated event-list []. For a first call the received event will look
     * like `[{ event }]` and the next event will be `[{ event }, { newEvent }]`,
     * etc, until `reset()` ist called by the observable.
     */
    notify(pointer: JSONPointer, event: ValidationError): void;
    _notify(observerPointer: JSONPointer, sourcePointer: JSONPointer, event: Array<ValidationError>): void;
}
export default BubblingCollectionObservable;
