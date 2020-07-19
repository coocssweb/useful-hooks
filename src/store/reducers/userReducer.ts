import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../actionTypes';

const initialState = {
  loading: true,
  error: false,
  profile: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN_REQUEST:
      return { ...state, loading: true, profile: null };
    case SIGN_IN_SUCCESS:
      return { ...state, loading: false, error: false, profile: payload };
    case SIGN_IN_ERROR: {
      return { ...state, loading: false, error: true, profile: null };
    }
    default:
      return state;
  }
};
