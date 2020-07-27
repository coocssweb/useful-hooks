/*
 * @Author: wangjiaxin
 * @Date: 2020-07-24 15:35:10
 * @Description: user reducer
 */
import { Action } from '@constants/index';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_REQUEST,
} from '../actionTypes';
import tokenPersitst from '../persitst/tokenPersist';

const initialState = {
  fetching: false,
  authenticated: false,
  error: null,
};

export default (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    // 登录请求
    case SIGN_IN_REQUEST:
      return { ...state, fetching: true, error: null };

    // 登录成功
    case SIGN_IN_SUCCESS:
      tokenPersitst.set((payload as any).token);
      return { ...state, fetching: false, authenticated: true };

    // 登录失败
    case SIGN_IN_FAILURE: {
      return { ...state, fetching: false, error: true };
    }

    // 登出请求
    case SIGN_OUT_REQUEST: {
      return { ...state, fetching: true, error: null };
    }

    // 登出成功
    case SIGN_OUT_SUCCESS:
      tokenPersitst.remove();
      return { ...state, fetching: false, authenticated: false };

    // 清除成功
    case SIGN_OUT_FAILURE:
      return { ...state, fetching: false, error: true };

    default:
      return state;
  }
};
