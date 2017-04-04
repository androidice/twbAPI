import settings from '../settings';
import request from 'superagent';

export function getAccessToken(){
  return new Promise((resolve, reject)=>{
    request
      .get(settings.host +'/getAccessToken')
      .end((err, res)=>{
        if(!err){
          resolve(JSON.parse(res.text));
        }else{
          reject(err);
        }
      });
  });
}

export function getTweets(accessToken, searchText){
  return new Promise((resolve, reject)=>{
    request
      .post(settings.host +'/getTweets')
      .send({accessToken, searchText})
      .end((err, res)=>{
        if(!err){
          resolve(JSON.parse(res.text));
        }else{
          reject(err);
        }
      });
  });
}
