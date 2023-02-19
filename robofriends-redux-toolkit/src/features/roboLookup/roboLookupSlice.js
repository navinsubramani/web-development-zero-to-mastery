import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    searchField: "",
    robots: []
}

export const roboLookupSlice = createSlice({
    name: 'roboLookup',
    initialState,
    reducers: {
        CHANGE_SEARCHFIELD: (state, actions) => {
            state.searchField = actions.payload
        },

        UPDATE_ROBOTS: (state, actions) => {
            state.robots = actions.payload
        }
    }
});

export const { CHANGE_SEARCHFIELD, UPDATE_ROBOTS } = roboLookupSlice.actions
export default roboLookupSlice.reducer