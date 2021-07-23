/* eslint arrow-parens: 0 */
import gp from "gson-pointer";
import { JSONPointer, ValidationError } from "../../types";
import { UpdateErrorsEvent } from "../../editors/Editor";


export type Observer = {
    (event: UpdateErrorsEvent): void;
    receiveChildEvents?: boolean;
}


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
class BubblingCollectionObservable {
    observers: Record<JSONPointer, Observer[]> = {};
    eventCollection: Record<JSONPointer, ValidationError[]> = {};

    /**
     * Observe events on the _pointer_ (`#/observe/location`). May also observe
     * events of _child-pointers_ (`#/observe/location/child/item`) with the
     * option `receiveChildEvents` set to `true`
     *
     * @param pointer - location to observe
     * @param observer - observer
     * @param [receiveChildEvents=false]
     */
    observe(pointer: JSONPointer, observer: Observer, receiveChildEvents = false): Observer {
        this.observers[pointer] = this.observers[pointer] || [];
        if (this.observers[pointer].includes(observer) === false) {
            observer.receiveChildEvents = receiveChildEvents;
            this.observers[pointer].push(observer);
        }
        return observer;
    }

    /**
     * Remove an observer
     * @param pointer
     * @param observer
     */
    removeObserver(pointer: JSONPointer, observer: Observer) {
        if (this.observers[pointer] == null) {
            return;
        }
        const index = this.observers[pointer].indexOf(observer);
        if (index !== -1) {
            this.observers[pointer].splice(index, 1);
        }
    }

    /**
     * @todo this might become obsolete by clearEvents
     *
     * Reset all collections from the previous events, starting with a list of
     * empty events. Any previously called observers will be called again with
     * an empty event-list `[]`.
     */
    reset() {
        this.eventCollection = {};
        // notify observers of reset by sending an empty list of events
        Object.keys(this.observers).forEach(pointer => this._notify(pointer, pointer));
    }

    /**
     * Clears all events at a given pointer and notifies all listeners with
     * their changed list of events
     *
     * @param pointer
     * @param clearChildren    if false, children of `pointer` will not be reset
     */
    clearEvents(pointer: JSONPointer, clearChildren = true) {
        let changed = false;

        const pointerPrefix = `${pointer}/`;
        for (const target of Object.keys(this.eventCollection)) {
            if (target === pointer || (clearChildren && target.startsWith(pointerPrefix))) {
                if (this.eventCollection[target].length > 0) {
                    changed = true;
                    this.eventCollection[target].length = 0;

                    // Notify observers on child pointers. _notifyAll below only notifies parent pointers not child ones
                    if (target !== pointer) {
                        this._notify(target, target);
                    }
                }
            }
        }

        if (changed) {
            // Notify all parents
            this._notifyAll(pointer);
        }
    }

    /**
     * Notifies all listeners of `pointer` (bubble notification)
     *
     * @param pointer
     * @param eventCollection    - array of events at target `pointer`
     */
    _notifyAll(pointer: JSONPointer) {
        for (const parentPointer of this.getParentPointers(pointer)) {
            this._notify(parentPointer, pointer);
        }
    }

    /**
     * Notify observers at _pointer_. Note that the received event is a
     * aggregated event-list []. For a first call the received event will look
     * like `[{ event }]` and the next event will be `[{ event }, { newEvent }]`,
     * etc, until `reset()` ist called by the observable.
     */
    notify(pointer: JSONPointer, event: ValidationError) {
        this.eventCollection[pointer] = this.eventCollection[pointer] || [];
        this.eventCollection[pointer].push(event);

        this._notifyAll(pointer);
    }

    _notify(observerPointer: JSONPointer, sourcePointer: JSONPointer) {
        if (this.observers[observerPointer] == null) {
            return;
        }

        this.observers[observerPointer].forEach(observer => {
            if (observer.receiveChildEvents === false && observerPointer === sourcePointer) {
                observer({ type: "validation:errors", value: this.eventCollection[sourcePointer] ?? [] });
                return;
            }
            if (observer.receiveChildEvents === false) {
                return;
            }

            const combinedErrors: ValidationError[] = [];
            for (const [pointer, events] of Object.entries(this.eventCollection)) {
                if (pointer.startsWith(observerPointer)) {
                    combinedErrors.push(...events ?? []);
                }
            }

            observer({ type: "validation:errors", value: combinedErrors });
        });
    }

    /**
     * Returns all parent pointers of a given JSON pointer
     * e.g.: /a/b/c returns ["#", "/a", "/a/b", "/a/b/c"]
     */
    getParentPointers(pointer: JSONPointer): JSONPointer[] {
        if (pointer.length === 0) {
            return ["#"];
        }

        const pointers = [];
        const frags = gp.split(pointer);
        while (frags.length > 0) {
            pointers.push(gp.join(frags, true));
            frags.pop();
        }

        return [...pointers ?? [], "#"];
    }
}


export default BubblingCollectionObservable;
