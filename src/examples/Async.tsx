import * as React from 'react';
import { useAsync } from '../hooks/index';

const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      if (rnd <= 5) {
        resolve('Submitted successfully 🙌');
      } else {
        reject('Oh no there was an error 😞');
      }
    }, 2000);
  });
};

const Async = () => {
  const { execute, pending, value, error } = useAsync(myFunction, false);
  return (
    <div>
      {value && <div>{value}</div>}
      {error && <div>{error}</div>}
      <button type="button" onClick={execute} disabled={pending}>
        {!pending ? 'Click me' : 'Loading...'}
      </button>
    </div>
  );
};

export default Async;
