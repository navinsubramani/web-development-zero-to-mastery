import { CHANGE_SEARCHFIELD, CHANGE_USERLIST } from './constants'

const initialState = {
    searchField: '',
    userList: []
}


export const searchRobots = (state=initialState, action={}) => {
    console.log("Reducer Input: ", state, action)
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, {searchField: action.payload})
        case CHANGE_USERLIST:
            const newState = Object.assign({}, state, {userList: action.payload})
            console.log("Reducer Output: ", newState)
            return newState
        default:
            return state
    }

}