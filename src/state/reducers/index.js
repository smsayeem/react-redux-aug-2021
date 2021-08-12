import { combineReducers } from 'redux';
import { accountReducer } from './accountReducer';
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
  account: accountReducer,
  search: searchReducer,
});
