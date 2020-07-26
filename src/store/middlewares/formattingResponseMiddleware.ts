const formattingResponseMiddleware = () => (next) => (action) => {
  const { types, payload, ...rest } = action;
  const [SUCCESS, FAILURE] = types;
  const { meta, response } = payload;

  if (!types) {
    next({
      payload,
      ...rest,
    });
  }

  if (meta && meta.code === 200) {
    next({ type: SUCCESS, payload: response, ...rest });
  } else {
    next({ type: FAILURE, payload: meta, ...rest });
  }
};

export default formattingResponseMiddleware;
