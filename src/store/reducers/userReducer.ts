/*
 * @Author: wangjiaxin
 * @Date: 2020-07-24 15:35:10
 * @Description: user reducer
 */
import { Action } from '@constants/index';
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_SUCCESS } from '../actionTypes';

const initialState = {
  loading: false,
  error: false,
  profile: null,
};

export default (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN_REQUEST:
      return { ...state, loading: true, profile: null };
    case SIGN_IN_SUCCESS:
      return { ...state, loading: false, error: false, profile: payload };
    case SIGN_IN_FAILURE: {
      return { ...state, loading: false, error: true, profile: null };
    }

    case SIGN_OUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};
