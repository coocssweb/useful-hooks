import * as React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="globalWrapper clearfix">
      <div className="globalMenus">
        <ul>
          <li className="globalMenus-item">
            <Link to="/gallery" className="globalMenus-link">
              Gallery
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
            <Link to="/latest" className="globalMenus-link">
              Latest
            </Link>
          </li>
          <li className="globalMenus-item">
            <Link to="/zustand" className="globalMenus-link">
              Zustand
            </Link>
          </li>

          <li className="globalMenus-item">
            <Link to="/login" className="globalMenus-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
