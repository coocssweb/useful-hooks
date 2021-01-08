/*
 * @Author: wangjiaxin
 * @Date: 2020-12-30 14:01:47
 * @Description: xxxxxxxxxxxxxxxx
 *
 */
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { SubRoute, SubRouteLink } from '../../components';
import PHOTO_LIST from './constants';
import GalleryRelation from './GalleyRelation';

const GalleryFeedback = () => {
  const { id } = useParams();
  const photo: any = PHOTO_LIST[parseInt(id, 10)] || {};

  return (
    <div>
      <h1>
        {photo.name}
        FeedBack
      </h1>
      <SubRouteLink to={`/gallery/${photo.id}/feedback/relation`}>relation</SubRouteLink>

      <SubRoute path="/gallery/:id/feedback/relation">
        <GalleryRelation />
      </SubRoute>
    </div>
  );
};

export default GalleryFeedback;
