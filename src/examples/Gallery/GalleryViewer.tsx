/*
 * @Author: wangjiaxin
 * @Date: 2020-12-30 14:01:47
 * @Description: xxxxxxxxxxxxxxxx
 *
 */
import * as React from 'react';
import { useParams } from 'react-router-dom';
import PHOTO_LIST from './constants';
import { SubRoute, SubRouteLink } from '../../components';
import GalleryFeedback from './GalleryFeedback';

const { useState } = React;

const GalleryViewer = () => {
  const { id } = useParams();
  const photo: any = PHOTO_LIST[parseInt(id, 10)];

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>{photo.name}</h1>
        <div>
          <img src={photo.src} alt={photo.name} width="100%" />
        </div>
        <div>
          Count:
          {count}
          <button
            type="button"
            onClick={() => {
              setCount(val => val + 1);
            }}
          >
            Add
          </button>
        </div>
        <SubRouteLink to={`/gallery/${photo.id}/feedback`}>feed</SubRouteLink>
      </div>
      <SubRoute path="/gallery/:id/feedback">
        <GalleryFeedback />
      </SubRoute>
    </>
  );
};

export default GalleryViewer;
