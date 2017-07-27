import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import AppRoute from '../App/AppReducer';

export default () => createStore(combineReducers({
	AppRoute,
}), applyMiddleware(thunk))