import {reducer, StateType, TOGGLE_ACCORDION} from "./reducer";

test('reducer should change value to opposite value', () => {
    let state: StateType = {
        collapsed: false
    }

    const changedState = reducer(state, {type: TOGGLE_ACCORDION})

    expect(state).not.toBe(changedState)
    expect(changedState.collapsed).toBe(!state.collapsed)
})