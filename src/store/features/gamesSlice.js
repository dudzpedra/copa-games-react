import { createSlice } from "@reduxjs/toolkit";
import sortByName from "../../services/sorting";

const initialState = {
    allGames: [],
    selectedGames: []
}

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setAllGames (state, action) {
            state.allGames = action.payload
        },
        selectGame (state, action) {
            const existingGame = state.selectedGames.find(g => g.id === action.payload.id)
            if (!existingGame) {
                state.selectedGames.push(action.payload)
            }
        },
        sortByName (state, action) {
            state.selectedGames = sortByName(state.selectedGames)
        }
    }
})

export const gamesActions = gamesSlice.actions
export default gamesSlice