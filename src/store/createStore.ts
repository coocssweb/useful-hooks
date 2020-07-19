import { createStore, applyMiddleware } from 'redux';
import callbackMiddleWare from './middleWares/callbackMiddleware';
import reducers from './reducers';

export default (data) => {
  const finalCreateStore = applyMiddleware(callbackMiddleWare)(createStore);
  return finalCreateStore(reducers, data);
};
