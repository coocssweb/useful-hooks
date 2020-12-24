/*
 * @Author: wangjiaxin
 * @Date: 2020-12-22 16:51:07
 * @Description: xxxxxxxxxxxxxxxx
 *
 */
import * as React from 'react';
import useUserStore from '../../partStores/useUserStore.js';

const { useEffect, useCallback } = React;

const Store = () => {
  const { fetchAllUser, destroyUser, loaded: userLoaded, error: userLoadError, list: userList } = useUserStore();

  useEffect(() => {
    if (!userLoaded) {
      fetchAllUser();
    }
  }, [fetchAllUser, userLoaded]);

  const handleDestroy = useCallback(() => {
    destroyUser();
  }, [destroyUser]);

  if (userLoadError) {
    return (
      <>
        <div>Error</div>
        <button type="button" onClick={handleDestroy}>
          销毁数据
        </button>
      </>
    );
  }

  if (userLoaded) {
    return (
      <>
        {userList.map((userItem) => {
          return <div key={userItem.id}>{JSON.stringify(userItem)}</div>;
        })}
        <button type="button" onClick={handleDestroy}>
          销毁数据
        </button>
      </>
    );
  }

  return <div>Loading</div>;
};

export default Store;
