import { createSlice } from "@reduxjs/toolkit";
import { sortGames } from "../../services/sorting";

const initialState = {
    amount: 0,
    allGames: [],
    selectedGames: [],
    winner: {},
    vice: {}
}

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setAmount (state, action) {
            state.amount = action.payload
        },
        setAllGames (state, action) {
            state.allGames = action.payload
        },
        selectGame (state, action) {
            const existingGame = state.selectedGames.find(g => g.id === action.payload.id)
            if (!existingGame) {
                state.selectedGames.push(action.payload)
            }
        },
        sortGames (state, action) {
            const winners = sortGames(state.selectedGames)
            state.winner = winners[0]
            state.vice = winners[1]
        }
    }
})

export const gamesActions = gamesSlice.actions
export default gamesSlice