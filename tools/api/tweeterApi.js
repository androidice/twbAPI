import settings from './settings';
import request from 'request';
import urlencode from 'urlencode';

function getAccessToken(app) {
  app.get('/getAccessToken', (req, res)=>{
    let OAuth2 = require('OAuth').OAuth2;
    let oauth2 = new OAuth2(settings.CONSUMER_KEY, settings.SECRET_KEY, 'https://api.twitter.com/', null, 'oauth2/token', null);
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

function getTweets(app){
  app.post('/getTweets',(req, res)=>{
    let accessToken = req.body.accessToken || '';
    let searchText = req.body.searchText || '';
    let url = 'https://api.twitter.com/1.1/search/tweets.json?q={searchKey}&result_type=recent&lang=en'.replace('{searchKey}',urlencode(searchText));

    request({
      method: 'GET',
      url,
      headers:{
        'Authorization': 'Bearer '+ accessToken
      }
    },(error, response, body)=>{
      let result = JSON.parse(body);
      if(!result.errors){
        res.type('application/json');
        res.status(200).send({tweets: result.statuses || []});
        res.end();
      }else {
        throw JSON.stringify(result.errors);
      }
    });
  });
}

export default function exposeTweeterApi(app) {
  getAccessToken(app);
  getTweets(app);
}
