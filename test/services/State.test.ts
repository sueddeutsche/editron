/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
import { strict as assert } from "assert";
import State from "../../src/services/State";


describe("State", () => {
    let state;
    beforeEach(() => (state = new State()));

    it("should dispatch action", () => {
        let calledAction;
        function reducer(_state = {}, action) {
            calledAction = action;
            return _state;
        }
        state.register("data", reducer);

        state.dispatch({ type: "DUMMY_ACTION", value: 14 });

        assert.deepEqual(calledAction, { type: "DUMMY_ACTION", value: 14 });
    });


    it("should register multiple reducers", () => {
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

        assert.deepEqual(calledActions, [action, action]);
    });


    it("should register reducers on separate entry points", () => {
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

        assert.deepEqual(currentState.A, { id: "A" });
        assert.deepEqual(currentState.B, { id: "B" });
    });


    it("should return state of given reducer", () => {
        state.register("A", () => ({ id: "A" }));

        const stateA = state.get("A");

        assert.deepEqual(stateA, { id: "A" });
    });
});
