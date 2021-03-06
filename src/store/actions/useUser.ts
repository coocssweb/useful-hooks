import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

const { useCallback } = React;

const useUser = () => {
  const mapState = useCallback(
    (state) => ({
      ...state.user,
    }),
    [],
  );
  return useMappedState(mapState);
};

export default useUser;
