import { CHANGE_SEARCHFIELD, CHANGE_USERLIST } from './constants'

export const setSearchField = (text) => {
    return ({
        type: CHANGE_SEARCHFIELD,
        payload: text
    })
}

export const setUserList = (userList) => {
    return ({
        type: CHANGE_USERLIST,
        payload: userList
    })
}