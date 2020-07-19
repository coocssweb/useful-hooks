import * as React from 'react';
import { useDispatch } from 'redux-react-hook';
import { SIGN_IN_SUCCESS } from '../actionTypes';

const { useCallback, useMemo } = React;

const useUserAction = () => {
  const dispatch = useDispatch();
  /**
   * 用户注册
   */
  const signUp = useCallback(() => {}, []);

  /**
   * 用户登录
   */
  const signIn = useCallback(() => {
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: {
        name: 'wangjiaxin',
      },
    });
  }, [dispatch]);

  /**
   * 用户登出
   */
  const signOut = useCallback(() => {}, []);

  return useMemo(() => {
    return {
      signUp,
      signIn,
      signOut,
    };
  }, [signIn, signOut, signUp]);
};

export default useUserAction;
