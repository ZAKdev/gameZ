import patteran from "./patteran"
import _ from "lodash"

export const onGridItemClick = (grid, gridItem, gridIndex, currentTurn) => {
    return dispatch => {
        if(gridItem == ""){
            
            dispatch ({
                type: "UPDATE_BOARD",
                gridItem: gridItem,
                gridIndex: gridIndex,
                currentTurn: currentTurn
            })

            dispatch ({
                type: "NEXT_TURN",
                nextTurn: currentTurn === 'X' ? 'O' : 'X'
            })

            const
                Xarray = ["X", "X", "X"],
                Oarray = ["O", "O", "O"];

            // Start Matching Horizontally
            let gridBreakHoriz = _.chunk(grid, 3);

            gridBreakHoriz.map(items => {
                if(_.isEqual(items, Xarray)){
                    dispatch({
                        type: "SET_X",
                        winner: _.take(items).toString()
                    })
                    dispatch({
                        type: "GAME_END"
                    })
                }
                if(_.isEqual(items, Oarray)){
                    dispatch({
                        type: "SET_O",
                        winner: _.take(items).toString()
                    })
                    dispatch({
                        type: "GAME_END"
                    })
                }
            })            
            // End Matching Horizontally

            // Start Matching Vertically
            const vertical = [];

            patteran.pattSecond.map((item) => {
                vertical.push(grid[item])
            })

            let gridBreakVert = _.chunk(vertical, 3);

            gridBreakVert.map((items) => {
                if(_.isEqual(items, Xarray)){
                    dispatch({
                        type: "SET_X",
                        winner: _.take(items).toString()
                    })
                    dispatch({
                        type: "GAME_END"
                    })
                }
                if(_.isEqual(items, Oarray)){
                    dispatch({
                        type: "SET_O",
                        winner: _.take(items).toString()
                    })
                    dispatch({
                        type: "GAME_END"
                    })
                }
            })
            // End Matching Vertically

            // Start Matching Cross
            const cross = [];

            patteran.pattThird.map((item) => {
                cross.push(grid[item])
            })

            let gridBreakCross = _.chunk(cross, 3);
            
            gridBreakCross.map((items) => {
                if(_.isEqual(items, Xarray)){
                    dispatch({
                        type: "SET_X",
                        winner: _.take(items).toString()
                    })
                    dispatch({
                        type: "GAME_END"
                    })
                }
                if(_.isEqual(items, Oarray)){
                    dispatch({
                        type: "SET_O",
                        winner: _.take(items).toString()
                    })
                    dispatch({
                        type: "GAME_END"
                    })
                }
            })
            dispatch({
                type: "UPDATE_SOCKET"
            })
            // End Matching Cross
        }
    }
}

export const onPlayAgainClick = () => {
    return dispatch => {
        dispatch({
            type: "PLAY_AGAIN"
        })
        dispatch({
            type: "UPDATE_SOCKET"
        })
    }
}

export const receivedFromSocket = tictac => {
    return dispatch => {
        dispatch({
            type: "RECEIVED_FROM_SOCKET",
            tictac
        })
    }
}