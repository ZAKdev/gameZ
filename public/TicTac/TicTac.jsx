import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TicTacActions from './TicTacActions'

import Board from './components/Board.jsx'

class TicTac extends React.Component {

    constructor(props) {
        super(props)
        this.ClickHandler = this.ClickHandler.bind(this)
        this.PlayHandler = this.PlayHandler.bind(this)
    }

    ClickHandler(gridItem, gridIndex){
        if(this.props.tictac.start)
            return this.props.actions.onGridItemClick(this.props.tictac.grid, gridItem, gridIndex, this.props.tictac.turn)
    }

    PlayHandler(){
        return this.props.actions.onPlayAgainClick()
    }

    render() {
        return (
            <div className="TicTac">
                {(() => {
                    if(this.props.tictac.turn)
                        return <h2>Now turn of {this.props.tictac.turn}</h2>
                    else if(this.props.tictac.winner)
                        return <h2>Winner is {this.props.tictac.winner}!</h2>
                    else
                        return <h2>Game draw :(</h2>
                })()}
                <Board grid={this.props.tictac.grid} onGridItemClick={this.ClickHandler}/>
                {(() => {
                    if(!this.props.tictac.start)
                        return <button className="btn-primary" onClick={this.PlayHandler}>Play Again</button>
                })()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tictac: state.TicTac
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TicTacActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TicTac)