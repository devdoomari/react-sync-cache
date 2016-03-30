import * as React from 'react';
import {
  Component
} from 'react';
import * as ReactDOM from 'react-dom';
import {
  Router, Route, IndexRoute,
  hashHistory,
  Link,
} from 'react-router';
import AppView from './app_view';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppView}>
      <IndexRoute component={IndexView}/>
      <Route path="scrollSync" component={ScrollSyncView}/>
    </Route>
  </Router>, document.getElementById('main'));
