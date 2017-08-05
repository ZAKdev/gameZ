// Stylus
import './index.styl'

// For borwser compatibility
import 'babel-polyfill'

import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import ReduxStore from './ReduxStore'
import App from './App/App.jsx'
import TicTac from './TicTac/TicTac.jsx'

const reduxStore = ReduxStore()

ReactDOM.render(
	<Provider store={reduxStore}>
		<Router history={hashHistory}>
			<Route component={App}>
				<Route path="/" component={TicTac}/>
			</Route>
		</Router>
	</Provider>
	, document.getElementById("mount-node")
)

window.reduxStore = reduxStore