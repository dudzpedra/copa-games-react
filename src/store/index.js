import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "./features/gamesSlice";

const store = configureStore({
    reducer: {
        games: gamesSlice.reducer
    }
})

export default store