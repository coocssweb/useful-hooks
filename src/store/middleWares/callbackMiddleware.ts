/*
 * @Author: wangjiaxin
 * @Date: 2020-07-24 15:19:35
 * @Description:
 *
 */

const callbackMiddleWare = () => (next: Function) => (action) => {
  const { result, error, callback, ...reset } = action;
  next({ result, ...reset });
  if (typeof callback === 'function') {
    callback(result || error);
  }
};

export default callbackMiddleWare;
