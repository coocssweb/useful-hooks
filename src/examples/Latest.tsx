import * as React from 'react';
import { useLatest } from '../hooks/index';

const { useState, useCallback } = React;

const Latest = () => {
  const [value, setValue] = useState(0);
  const latestValue = useLatest(value);

  const handleClick = useCallback(() => {
    setValue((c) => c + 1);
  }, []);

  return (
    <div>
      <div>{`latestValue:${latestValue.current}, value:${value}`}</div>
      <button type="button" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default Latest;
