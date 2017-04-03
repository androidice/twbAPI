import { combineReducers } from 'redux';
import accessToken from './tokenReducer';
import tweets from './tweetsReducer';

const rootReducer = combineReducers({
  accessToken,
  tweets
});

export default rootReducer;
