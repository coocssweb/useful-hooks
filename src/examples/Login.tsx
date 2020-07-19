import * as React from 'react';
import { useUserAction, useUser } from '../store/actions/index';

const { useCallback } = React;

const Login = () => {
  const { profile, loading, error } = useUser();

  const { signIn } = useUserAction();

  const handleSignIn = useCallback(() => {
    signIn();
  }, [signIn]);

  console.log(profile, loading, error);

  return (
    <div>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Login;
