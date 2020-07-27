import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

const { useCallback } = React;

const useAuth = () => {
  const mapState = useCallback(
    (state) => ({
      fetching: state.auth.fetching,
      authenticated: state.auth.authenticated,
      error: state.auth.error,
    }),
    [],
  );
  return useMappedState(mapState);
};

export default useAuth;
