import * as types from './actionTypes';
import * as tokenApi from '../api/tokenApi';
export function getTokenSuccess(token){
  return {type: types.GET_TOKEN, token };
}

export function getToken(){
  return function(dispatch){
    tokenApi.getAccessToken();
  };
}
