const callbackMiddleWare = () => (next: Function) => (action) => {
  const { result, error, callback, ...reset } = action;
  next({ result, ...reset });
  callback && callback(result || error);
};

export default callbackMiddleWare;
