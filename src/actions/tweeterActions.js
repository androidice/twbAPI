import * as types from './actionTypes';
import * as tweeterApi from '../api/tweeterApi';


export function getTokenSuccess(accessToken){
  return {type: types.GET_ACCESS_TOKEN, accessToken };
}

export function getTweetsSuccess(tweets) {
  return {type: types.GET_TWEETS_SUCCESS, tweets};
}

export function getTweets(searchText = '@twitterapi') {
 return function(dispatch, getState){
   let _currentState = getState();
   if(_currentState){
     let accessToken = _currentState.accessToken;
     return tweeterApi.getTweets(accessToken, searchText).then((result)=>{
       dispatch(getTweetsSuccess(result.tweets));
     },(error)=>{
       throw(error);
     });
   }
 };
}

export function getAccessToken(){
  return function(dispatch){
    return tweeterApi.getAccessToken().then((result)=>{
      dispatch(getTokenSuccess(result.access_token));
    },(error)=>{
      throw(error);
    });
  };
}
