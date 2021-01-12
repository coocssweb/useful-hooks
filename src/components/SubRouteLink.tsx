/* eslint-disable react/prop-types */
/*
 * @Author: wangjiaxin
 * @Date: 2020-12-30 14:01:47
 * @Description: xxxxxxxxxxxxxxxx
 *
 */
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

const { useMemo } = React;

const SubRouteLink = ({ children, to }) => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const state = location.state || {};
  const finalLinkTo = useMemo(() => {
    if (typeof to === 'string') {
      return {
        pathname: to,
        state: { background: background || location },
      };
    }

    const oldState = to.state || {};
    return {
      ...to,

      state: { ...oldState, ...state, background: background || location },
    };
  }, [background, location, state, to]);

  return <Link to={finalLinkTo}>{children}</Link>;
};

export default SubRouteLink;
