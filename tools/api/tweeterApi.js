import settings from './settings';
import request from 'request';

function getAccessToken(app) {
  debugger;
  app.get('/getAccessToken', (req, res)=>{
    let OAuth2 = require('OAuth').OAuth2;
    var oauth2 = new OAuth2(settings.CONSUMER_KEY, settings.SECRET_KEY, 'https://api.twitter.com/', null, 'oauth2/token', null);
    oauth2.getOAuthAccessToken('', {
      'grant_type': 'client_credentials'
    }, function (e, access_token) {
      if(!e){
        res.type('application/json');
        res.status(200).send({access_token: access_token});
        res.end();
      }else{
        throw JSON.stringify(JSON.parse(e.data));
      }
    });
  });
}

export default function exposeTweeterApi(app) {
  getAccessToken(app);
}
