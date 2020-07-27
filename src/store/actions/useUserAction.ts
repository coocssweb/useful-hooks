import * as React from 'react';
import { useDispatch } from 'redux-react-hook';
import { userApi } from '@api/index';
import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
} from '../actionTypes';

const { useCallback, useMemo } = React;

const useUserAction = () => {
  const dispatch = useDispatch();

  /**
   * 获取用户信息
   */
  const fetchProfile = useCallback(async () => {
    dispatch({
      types: [FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE],
      promise: userApi.findOne(),
    });
  }, [dispatch]);

  /**
   * 修改用户信息
   */
  const editPrifle = useCallback(
    async (profile) => {
      dispatch({
        types: [EDIT_PROFILE_REQUEST, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE],
        promise: userApi.edit(profile),
      });
    },
    [dispatch],
  );

  return useMemo(() => {
    return {
      fetchProfile,
      editPrifle,
    };
  }, [editPrifle, fetchProfile]);
};

export default useUserAction;
