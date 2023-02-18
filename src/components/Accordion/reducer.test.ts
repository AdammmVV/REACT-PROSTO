import {reducer, StateType, TOGGLE_ACCORDION} from "./reducer";

test('reducer should change value to true', () => {
    let state: StateType = {
        collapsed: false
    }

    const changedState = reducer(state, {type: TOGGLE_ACCORDION})

    expect(state).not.toBe(changedState)
    expect(changedState.collapsed).toBe(!state.collapsed)
    expect(changedState.collapsed).toBe(true)
})

test('reducer should change value to false', () => {
    let state: StateType = {
        collapsed: true
    }

    const changedState = reducer(state, {type: TOGGLE_ACCORDION})

    expect(state).not.toBe(changedState)
    expect(changedState.collapsed).toBe(!state.collapsed)
    expect(changedState.collapsed).toBe(false)
})