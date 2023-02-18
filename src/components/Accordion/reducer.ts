export type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}
export const TOGGLE_ACCORDION = "TOGGLE-ACCORDION"
export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_ACCORDION:
            return {
                ...state,
                collapsed: !state.collapsed
            }
    }
    return state
}