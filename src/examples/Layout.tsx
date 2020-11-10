import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import Async from './Async';
import WhyDidYouUpdate from './WhyDidYouUpdate';
import MemoCompare from './MemoCompare';
import Script from './Script';
import Previous from './Previous';
import Login from './Login';
import Iro from './IroDemo';

const Layout = () => {
  return (
    <div className="globalWrapper clearfix">
      <div className="globalMenus">
        <ul>
          <li className="globalMenus-item">
            <Link to="/async" className="globalMenus-link">
              Async
            </Link>
          </li>
          <li className="globalMenus-item">
            <Link to="/why-did-you-update" className="globalMenus-link">
              WhyDidYouUpdate
            </Link>
          </li>
          <li className="globalMenus-item">
            <Link to="/memo-compare" className="globalMenus-link">
              MemoCompare
            </Link>
          </li>
          <li className="globalMenus-item">
            <Link to="/script" className="globalMenus-link">
              Script
            </Link>
          </li>

          <li className="globalMenus-item">
            <Link to="/previous" className="globalMenus-link">
              Previous
            </Link>
          </li>
          <li className="globalMenus-item">
            <Link to="/login" className="globalMenus-link">
              Login
            </Link>
          </li>
          <li className="globalMenus-item">
            <Link to="/iro" className="globalMenus-link">
              Iro
            </Link>
          </li>
        </ul>
      </div>
      <div className="globalContainer">
        <Route path="/async" component={Async} exact />
        <Route path="/why-did-you-update" component={WhyDidYouUpdate} exact />
        <Route path="/memo-compare" component={MemoCompare} exact />
        <Route path="/script" component={Script} exact />
        <Route path="/previous" component={Previous} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/iro" component={Iro} exact />
      </div>
    </div>
  );
};

export default Layout;
