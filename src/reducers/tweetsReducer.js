import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function tweetsReducer(state = initialState.tweets, action){
  switch (action.type){
    case types.GET_TWEETS_SUCCESS:
      return Object.assign([],action.tweets);
    default:
      return state;
  }
}
