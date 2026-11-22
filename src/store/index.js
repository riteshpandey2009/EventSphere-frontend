import { configureStore } from "@reduxjs/toolkit";
import favroiteReducer from "./slices/favoriteSlice"
export const store = configureStore({
    reducer: {
        favroites: favroiteReducer,
    },
});
