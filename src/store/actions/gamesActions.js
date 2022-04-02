import { gamesActions } from "../features/gamesSlice"

export const getAmount = (amount) => {
    return (dispatch) => dispatch(gamesActions.setAmount(amount))
}

export const setGames = (games) => {
    return (dispatch) => dispatch(gamesActions.setAllGames(games))
}

export const selectGame = (game) => {
    return (dispatch) => dispatch(gamesActions.selectGame(game))
}