/* eslint arrow-parens: 0 */
const gp = require("gson-pointer");


/**
 * > Internal helper, mainly used in [ValidationService](#validationservice) to support the weird notification behaviour
 * of error-events.
 *
 *
 * ## Motivation
 *
 * Error-events in the validation process occur per error, but we want them to pass as quickly as
 * possible (Asynchronous errors may take a long time and available instant feedback are postponed). In the previous
 * version two events were required in every editor
 *
 * 1. listen "start validation"-events to reset the errors and
 * 2. listen to "add error"-events to build up the asynchronous incoming error-list
 *
 * This is tedious and brings some overhead using the api. Thus, the "observe error"-event, introduced hereby, may be
 * read as "set errors", which will collect the errors and repeatedly call the observer with the current list of errors
 *
 * 1. for the observable and
 * 2. any observable that includes listening to changes of child-editors
 *
 *
 * ## Usage as observer
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
 * ## Usage as observable
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
    constructor() {
        this.observers = {};
        this.eventCollection = {};
        this.bubbleCollection = {};
    }
    observe(pointer, cb, receiveChildEvents = false) {
        this.observers[pointer] = this.observers[pointer] || [];
        if (this.observers[pointer].includes(cb) === false) {
            cb.receiveChildEvents = receiveChildEvents;
            this.observers[pointer].push(cb);
        }
    }
    removeObserver(pointer, cb) {
        if (this.observers[pointer] == null) {
            return;
        }
        const index = this.observers[pointer].indexOf(cb);
        if (index !== -1) {
            this.observers[pointer].splice(index, 1);
        }
    }
    reset() {
        // notify observers of reset by sending an empty list of events
        const map = {};
        Object.keys(this.eventCollection).concat(Object.keys(this.bubbleCollection))
            // .filter(pointer => pointer.includes(sourcePointer))
            .forEach(p => { map[p] = true; });
        this.eventCollection = {};
        this.bubbleCollection = {};
        Object.keys(map).forEach(pointer => this._notify(pointer, pointer, []));
        this.eventCollection = {};
        this.bubbleCollection = {};
    }
    notify(pointer, event) {
        this.eventCollection[pointer] = this.eventCollection[pointer] || [];
        this.eventCollection[pointer].push(event);

        const frags = gp.split(pointer);
        while (frags.length > 0) {
            const p = gp.join(frags, true);
            this._notify(p, pointer, this.eventCollection[pointer]);
            frags.pop();
        }
        this._notify("#", pointer, this.eventCollection[pointer]);
    }
    _notify(observerPointer, sourcePointer, event) {
        if (this.observers[observerPointer] == null) {
            return;
        }
        this.observers[observerPointer].forEach(cb => {
            if (cb.receiveChildEvents === false && observerPointer === sourcePointer) {
                cb(event);
                return;
            }
            if (cb.receiveChildEvents === false && observerPointer !== sourcePointer) {
                return;
            }

            this.bubbleCollection[observerPointer] = this.bubbleCollection[observerPointer] || {};
            const map = this.bubbleCollection[observerPointer];
            map[sourcePointer] = event;
            const events = Object.keys(map).reduce((res, next) => res.concat(map[next]), []);
            cb(events);
        });
    }
}


module.exports = BubblingCollectionObservable;
