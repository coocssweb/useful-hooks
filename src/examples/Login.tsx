import * as React from 'react';
import { useAuth, userAuthAction } from '../store/actions/index';

const { useCallback } = React;

const Login = () => {
  const { fetching, authenticated, error } = useAuth();

  const { signIn, signOut } = userAuthAction();

  const handleSignIn = useCallback(() => {
    signIn({
      username: 'wangjiaxin',
      password: '1234123',
    });
  }, [signIn]);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  console.log(fetching, authenticated, error);

  return (
    <div>
      <button type="button" onClick={handleSignIn}>
        Sign In
      </button>

      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Login;
