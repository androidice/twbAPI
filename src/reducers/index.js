import { combineReducers } from 'redux';
import accessToken from './tokenReducer';

const rootReducer = combineReducers({
  accessToken
});

export default rootReducer;
