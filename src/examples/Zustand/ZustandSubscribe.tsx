/*
 * @Author: wangjiaxin
 * @Date: 2020-12-22 16:51:07
 * @Description: xxxxxxxxxxxxxxxx
 *
 */
import * as React from 'react';
import useUserStore from '../../partStores/useUserStore.js';

const { useEffect, useRef } = React;

const Store = () => {
  const userListRef = useRef(useUserStore.getState().list);

  useEffect(() => {
    const unsubscrive = useUserStore.subscribe(
      (list, prevList) => {
        console.log(list, prevList);
        userListRef.current = list;
      },
      (state) => state.list,
    );
    return () => {
      unsubscrive();
    };
  }, []);

  return <div />;
};

export default Store;
