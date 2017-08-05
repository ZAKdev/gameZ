import React from 'react'

export default class GridItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <li className={'GridItem ' + this.props.mark} onClick={this.props.onClick}></li>
        )
    }
}