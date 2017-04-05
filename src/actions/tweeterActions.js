import * as types from './actionTypes';
import * as tweeterApi from '../api/tweeterApi';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

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
     if(searchText.trim() === '') return;
     dispatch(showLoading());
     return tweeterApi.getTweets(accessToken, searchText).then((result)=>{
       dispatch(hideLoading());
       dispatch(getTweetsSuccess(result.tweets));
     },(error)=>{
       dispatch(hideLoading());
       throw(error);
     });
   }
 };
}

export function getAccessToken(){
  return function(dispatch){
    dispatch(showLoading());
    return tweeterApi.getAccessToken().then((result)=>{
      dispatch(hideLoading());
      dispatch(getTokenSuccess(result.access_token));
    },(error)=>{
      dispatch(hideLoading());
      throw(error);
    });
  };
}
