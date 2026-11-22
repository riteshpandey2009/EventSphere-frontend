import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        items: [],
    },
    reducers: {
        toggleFavorite(state, action) {
            const event = action.payload
            const existingEvent = state.items.find((e) => (e.id || e._id) === (event.id || event._id))
            if (existingEvent) {
                state.items = state.items.filter((e) => (e.id || e._id) !== (event.id || event._id))
            } else {
                state.items.push(event)
            }

        },
        removeFavorites(state) { },
        clearFavorites(state) {

        }
    }
})
export const { toggleFavorite, removeFavorites, clearFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer