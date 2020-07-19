import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

const { useCallback } = React;

const useUser = () => {
  const mapState = useCallback(
    (state) => ({
      profile: state.user.profile,
      loading: state.user.loading,
      error: state.user.error,
    }),
    [],
  );
  return useMappedState(mapState);
};

export default useUser;
