import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import App from '../App/AppReducer';
import TicTac from '../TicTac/TicTacReducer';

export default () => createStore(combineReducers({
	App,
	TicTac
}), applyMiddleware(thunk))