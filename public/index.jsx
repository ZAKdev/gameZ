// For borwser compatibility
import 'babel-polyfill'

import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import ReduxStore from './ReduxStore'
import App from './App/App.jsx'

ReactDOM.render(
	<Provider store={ReduxStore()}>
		<Router history={hashHistory}>
			<Route component={App}>
				<Route path="/" component={App}/>
			</Route>
		</Router>
	</Provider>
	, document.getElementById("mount-node")
)

window.reduxStore = ReduxStore()