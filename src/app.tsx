/* eslint-disable global-require */
import '@scss/index.scss';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreContext } from 'redux-react-hook';
import createStore from './store/createStore';
import Layout from './examples/Layout';

if (process.env.MOCK) {
  require('./api/mocks');
}

const store = createStore();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router>
      <Route link="/" component={Layout} />
    </Router>
  </StoreContext.Provider>,
  document.getElementById('app'),
);
