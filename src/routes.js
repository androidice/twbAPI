import React from 'react';
import { Route, IndexRoute} from 'react-router';
import Main from './modules/Main';
import Home from './modules/Home';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
  </Route>
);

