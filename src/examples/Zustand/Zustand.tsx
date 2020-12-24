/*
 * @Author: wangjiaxin
 * @Date: 2020-12-22 16:51:07
 * @Description: xxxxxxxxxxxxxxxx
 *
 */
import * as React from 'react';
import ZustandStore from './ZustandStore';
import ZustandSubscribe from './ZustandSubscribe';

const Zustand = () => {
  return (
    <div>
      <h1>Zustand Store</h1>
      <ZustandStore />
      <h1>Zustand Subscrive</h1>
      <ZustandSubscribe />
    </div>
  );
};

export default Zustand;
