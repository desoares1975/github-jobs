import { clickReducer } from './click-reducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  clickState: clickReducer
});
