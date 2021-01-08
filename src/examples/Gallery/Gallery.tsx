/* eslint-disable react/no-children-prop */
/*
 * @Author: wangjiaxin
 * @Date: 2020-12-30 14:01:47
 * @Description: xxxxxxxxxxxxxxxx
 *
 */
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PHOTO_LIST from './constants';
import GalleryViewer from './GalleryViewer';
import { SubRoute, SubRouteLink } from '../../components';

const { useState } = React;

const Gallery = () => {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        {PHOTO_LIST.map((photo) => {
          return (
            <SubRouteLink key={photo.id} to={{ pathname: `/gallery/${photo.id}` }}>
              <img src={photo.src} key={photo.id} alt={photo.name} width={100} />
            </SubRouteLink>
          );
        })}
        <div>
          Count:
          {count}
          <button
            type="button"
            onClick={() => {
              setCount((val) => val + 1);
            }}
          >
            Add
          </button>
        </div>
      </div>

      <SubRoute path="/gallery/:id">
        <GalleryViewer />
      </SubRoute>
    </Router>
  );
};

export default Gallery;
