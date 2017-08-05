import React from 'react'
import GridItem from './GridItem.jsx'

export default class Board extends React.Component {

    constructor(props) {
        super(props)
    }

    getDefaultProps(){
        return {
            grid: []
        }
    }

    render(){
        const self = this;
        return (
            <ul className="Board">
                {this.props.grid.map((item, index) => {
                    return <GridItem
                        key = {index}
                        mark = {item}
                        onClick = {() => {
                            self.props.onGridItemClick(item, index)
                        }}
                    />
                })}
            </ul>
        )
    }
}