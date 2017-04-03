import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import * as tokenActions from './actions/tokenActions';

import configureStore  from './store/store.config';
import routes from './routes';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const store = configureStore();
store.dispatch(tokenActions.getAccessToken());
store.subscribe(()=>{
  store.dispatch(tokenActions.getTweets());
});


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,

  document.getElementById('app')
);
