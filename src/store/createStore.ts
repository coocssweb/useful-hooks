import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import formattingResponseMiddleware from './middlewares/formattingResponseMiddleware';

// 初始数据
const INITIAL_STATE = {};

export default () => {
  const finalCreateStore = applyMiddleware(formattingResponseMiddleware)(createStore);
  return finalCreateStore(reducers, INITIAL_STATE);
};
