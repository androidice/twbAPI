import settings from '../settings';
import 'es6-promise';
import fetch from 'isomorphic-fetch';

export function getAccessToken(){
  return new Promise((resolve, reject)=>{
    fetch(settings.host +'/getAccessToken',{
      method:'GET'
    }).then((accessToken)=>{
        console.log(accessToken);
        resolve(accessToken);
    }, (error)=>{
        reject(error);
    });
  });
}
