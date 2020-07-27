const formattingResponseMiddleware = () => (next: Function) => (action) => {
  const { types, promise, ...rest } = action;
  const [REQUEST, SUCCESS, FAILURE] = types;

  if (!types || !promise) {
    next({ ...rest });
  } else {
    next({ type: REQUEST });

    promise.then((httpResponse) => {
      const { meta, response } = httpResponse;
      if (meta && meta.code === 200) {
        next({ type: SUCCESS, payload: response, ...rest });
      } else {
        next({ type: FAILURE, payload: meta, ...rest });
      }
    });
  }
};

export default formattingResponseMiddleware;
