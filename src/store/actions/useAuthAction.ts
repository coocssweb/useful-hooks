import * as React from 'react';
import { useDispatch } from 'redux-react-hook';
import { authApi } from '@api/index';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
} from '../actionTypes';

const { useCallback, useMemo } = React;

const useAuthAction = () => {
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
      dispatch({
        types: [SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE],
        promise: authApi.login({
          username,
          password,
        }),
      });
    },
    [dispatch],
  );

  /**
   * 方法：用户登出
   */
  const signOut = useCallback(async () => {
    dispatch({
      types: [SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE],
      promise: authApi.logout(),
    });
  }, [dispatch]);

  return useMemo(() => {
    return {
      signUp,
      signIn,
      signOut,
    };
  }, [signIn, signOut, signUp]);
};

export default useAuthAction;
