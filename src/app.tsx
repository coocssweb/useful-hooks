/* eslint-disable react/no-children-prop */
/* eslint-disable global-require */
import '@scss/index.scss';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import TransitionView from './TransitionView';
import Layout from './examples/Layout';
import Async from './examples/Async';
import WhyDidYouUpdate from './examples/WhyDidYouUpdate';
import MemoCompare from './examples/MemoCompare';
import Script from './examples/Script';
import Previous from './examples/Previous';
import Latest from './examples/Latest';
import Login from './examples/Login';
import Zustand from './examples/Zustand/Zustand';
import Gallery from './examples/Gallery/Gallery';

if (process.env.MOCK) {
  require('./api/mocks');
}

const Routes = () => {
  const location = useLocation();

  return (
    <>
      <TransitionView>
        <Switch location={location}>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/zustand">
            <Zustand />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/latest">
            <Latest />
          </Route>
          <Route path="/previous">
            <Previous />
          </Route>
          <Route path="/script">
            <Script />
          </Route>
          <Route path="/memo-compare">
            <MemoCompare />
          </Route>
          <Route path="/why-did-you-update">
            <WhyDidYouUpdate />
          </Route>
          <Route path="/async">
            <Async />
          </Route>
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
      </TransitionView>
    </>
  );
};

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('app'),
);
