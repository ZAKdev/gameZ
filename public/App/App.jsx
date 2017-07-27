import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AppActions from './AppActions'

class App extends React.Component {
	
	constructor(props) {
		super(props)
	}

	render() {
		return <div className="AppRoute">{this.props.app.content}</div>
	}

	componentDidMount() {
		this.props.actions.AppLoaded("App Route Loaded")
	}
}

const mapStateToProps = state => ({
    app: state.AppRoute
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AppActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);