/* eslint-disable react/prop-types */
/*
 * @Author: wangjiaxin
 * @Date: 2020-12-30 14:01:47
 * @Description: xxxxxxxxxxxxxxxx
 *
 */
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SubRouteLink = ({ children, to }) => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const finalLinkTo =
    typeof (to || '') === 'string'
      ? {
          pathname: to,
          state: { background: background || location },
        }
      : {
          ...to,
          state: { background: background || location },
        };

  return <Link to={finalLinkTo}>{children}</Link>;
};

export default SubRouteLink;
