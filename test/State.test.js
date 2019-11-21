/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const test = require("ava");
const State = require("../services/State");


test.beforeEach(t => {
    t.context.state = new State();
});

test("should dispatch action", t => {
    const { state } = t.context;
    let calledAction;
    function reducer(_state = {}, action) {
        calledAction = action;
        return _state;
    }
    state.register("data", reducer);

    state.dispatch({ type: "DUMMY_ACTION", value: 14 });

    t.deepEqual(calledAction, { type: "DUMMY_ACTION", value: 14 });
});

test("should register multiple reducers", t => {
    const { state } = t.context;
    const calledActions = [];
    const action = { type: "DUMMY_ACTION", value: 14 };
    state.register("A", (_state = {}, _action) => {
        _action.type === "DUMMY_ACTION" && calledActions.push(_action);
        return _state;
    });
    state.register("B", (_state = {}, _action) => {
        _action.type === "DUMMY_ACTION" && calledActions.push(_action);
        return _state;
    });

    state.dispatch(action);

    t.deepEqual(calledActions, [action, action]);
});

test("should register reducers on separate entry points", t => {
    const { state } = t.context;
    const calledActions = [];
    const action = { type: "DUMMY_ACTION", value: 14 };
    state.register("A", (_, _action) => {
        action.type === "DUMMY_ACTION" && calledActions.push(_action);
        return { id: "A" };
    });
    state.register("B", (_, _action) => {
        action.type === "DUMMY_ACTION" && calledActions.push(_action);
        return { id: "B" };
    });
    state.dispatch(action);

    const currentState = state.get();

    t.deepEqual(currentState.A, { id: "A" });
    t.deepEqual(currentState.B, { id: "B" });
});

test("should return state of given reducer", t => {
    const { state } = t.context;
    state.register("A", () => ({ id: "A" }));

    const stateA = state.get("A");

    t.deepEqual(stateA, { id: "A" });
});
