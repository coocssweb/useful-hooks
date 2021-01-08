/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Route, Switch, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const MODES_BY_ACTION = {
  PUSH: 'subRoute-appear',
  REPLACE: 'subRoute-appear',
  POP: 'subRoute-leave',
};

const SubRoute = ({ path, children, ...restParams }) => {
  const history = useHistory();
  const { action } = history;
  const mode = MODES_BY_ACTION[action];
  const location = useLocation();
  const isMatch = useRouteMatch({
    path,
    strict: true,
  });
  const transitionKey = isMatch ? `${path}-enter` : path;

  // 3. 渲染
  return (
    <TransitionGroup className={`page-transition slide ${mode}`}>
      <CSSTransition key={transitionKey} timeout={400}>
        <Switch location={location}>
          <Route path={path} {...restParams}>
            <div className="subRoutePage">{children}</div>
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default SubRoute;
