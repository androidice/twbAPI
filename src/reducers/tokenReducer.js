import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function twbReducer(state = initialState.access_token, action){
  switch (action.type){
    case types.GET_ACCESS_TOKEN:
      return action.accessToken;
    default:
      return state;
  }
}
