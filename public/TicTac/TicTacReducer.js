import SocketIOClient from 'socket.io-client'
import { socketPort } from '../../config/config'
const socket = SocketIOClient(socketPort)

module.exports = (state = {
    start: true,
    grid: ["", "", "", "", "", "", "", "", ""],
    turn: "X",
    counts: {X: 0, O: 0},
    winner: ""
}, action) => {
    switch (action.type){
        case "UPDATE_BOARD":
            state.counts[action.currentTurn]++
            return Object.assign({}, state, (
                state.grid[action.gridIndex] = action.currentTurn
            ))
        case "NEXT_TURN":
            let countSum = state.counts.X + state.counts.O
            if(countSum == 9){
                return Object.assign({}, state, {
                    turn: "",
                    start: false,
                })
            } else {
                return Object.assign({}, state, {
                    turn: action.nextTurn,
                    socket: false
                })
            }
        case "SET_X":
            return Object.assign({}, state, {
                winner: action.winner,
            })
        case "SET_O":
            return Object.assign({}, state, {
                winner: action.winner,
            })
        case "GAME_END":
            return Object.assign({}, state, {
                turn: "",
                start: false,
            })
        case "PLAY_AGAIN":
            return Object.assign({}, state, {
                grid: ["", "", "", "", "", "", "", "", ""],
                start: true,
                turn: "X",
                winner: "",
                counts: {X: 0, O: 0}
            })
        case "RECEIVED_FROM_SOCKET":
            return Object.assign({}, state, action.tictac)
        case "UPDATE_SOCKET":
            socket.emit('tictacSocket', state)
        default:
            return state
    }
}