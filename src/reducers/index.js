import { combineReducers } from 'redux';
import accessToken from './tokenReducer';
import tweets from './tweetsReducer';
import { loadingBarReducer } from 'react-redux-loading-bar'
const rootReducer = combineReducers({
  accessToken,
  tweets,
  loadingBar: loadingBarReducer
});

export default rootReducer;
