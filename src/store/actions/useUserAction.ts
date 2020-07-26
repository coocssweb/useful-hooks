import * as React from 'react';
import { useDispatch } from 'redux-react-hook';
import { userApi } from '@api/index';
import { SIGN_IN_SUCCESS } from '../actionTypes';

const { useCallback, useMemo } = React;

const useUserAction = () => {
  const dispatch = useDispatch();
  /**
   * 方法：用户注册
   */
  const signUp = useCallback(() => {}, []);

  /**
   * 方法：用户登录
   */
  const signIn = useCallback(
    async ({ username, password }) => {
      const response = await userApi.login({
        username,
        password,
      });
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: response,
      });
    },
    [dispatch],
  );

  /**
   * 方法：用户登出
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
