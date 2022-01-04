import { UserActionTypes } from './Types'

const intialstate = {
    id : ''
} 

export const UserReducer = (state=intialstate, action) => {
    switch (action.type) {
        case UserActionTypes.Categories:
            console.log(state)
            return {...state, id: action.payload}
        default:
            return state;
    }
}