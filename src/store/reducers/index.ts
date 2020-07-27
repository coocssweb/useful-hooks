import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';

export default combineReducers({
  user: userReducer,
  auth: authReducer,
});
