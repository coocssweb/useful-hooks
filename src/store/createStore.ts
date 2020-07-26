import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

// 初始数据
const INITIAL_STATE = {};

export default () => {
  const finalCreateStore = applyMiddleware()(createStore);
  return finalCreateStore(reducers, INITIAL_STATE);
};
