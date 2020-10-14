import {combineReducers} from 'redux';

import {humansReducer as humans} from '../bus/humans/reducer';

export const rootReducer = combineReducers({humans});