/*
 * @Author: wangjiaxin
 * @Date: 2020-07-24 15:35:10
 * @Description: user reducer
 */
import { Action } from '@constants/index';
import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
} from '../actionTypes';

const initialState = {
  fetching: false,
  error: null,
  profile: null,
};

export default (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    // 获取请求
    case FETCH_PROFILE_REQUEST:
      return { ...state, fetching: true, error: null, profile: null };

    // 获取成功
    case FETCH_PROFILE_SUCCESS:
      return { ...state, fetching: false, profile: payload };

    // 获取失败
    case FETCH_PROFILE_FAILURE: {
      return { ...state, fetching: false, error: true };
    }

    // 编辑请求
    case EDIT_PROFILE_REQUEST: {
      return { ...state, fetching: true };
    }

    // 编辑成功
    case EDIT_PROFILE_SUCCESS:
      return { ...state, fetching: false, profile: payload };

    // 编辑失败
    case EDIT_PROFILE_FAILURE:
      return { ...state, fetching: false, error: true };

    default:
      return state;
  }
};
