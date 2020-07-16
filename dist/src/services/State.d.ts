interface Events {
    [pointer: string]: (subState: any) => void;
}
export default class State {
    FLAG_CHANGED: string;
    emitter: import("nanoevents").Emitter<Events>;
    reducers: any;
    store: any;
    constructor();
    onChange(currentState: any): void;
    register(id: string, reducer: any): void;
    unregister(id: string): void;
    get(id: string): any;
    dispatch(...args: any[]): any;
    /**
     * Subscribe to change (all) events
     * @param  {[type]}   id       [description]
     * @param  {Function} callback [description]
     */
    subscribe(id: string, callback: any): void;
    unsubscribe(id: string, callback: any): void;
}
export {};
