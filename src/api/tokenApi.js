import settings from '../settings';
import fetch from 'isomorphic-fetch';

export function encodeCredentials(){
  return btoa(settings.CONSUMER_KEY+ ':'+ settings.SECRET_KEY);
}

export function getToken() {
  let credentails = encodeCredentials();
  return new Promise((resolve, reject)=>{
    debugger;
    setTimeout(()=>{
      fetch('https://api.twitter.com/oauth2/token',{
        method:'POST',
        headers: {
          'Authorization': 'Basic '+ credentails,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        data: JSON.stringify({
            'grant_type': 'client_credentials'
          }
        )
      }).then((authToken)=>{
        debugger;
        resolve(credentails);
      },(error)=>{
        debugger;
        reject (error);
      });
    },0);
  });
}
