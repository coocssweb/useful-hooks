import * as React from 'react';
import { usePrevious } from '../hooks';

const { useState, useCallback } = React;

const Previous = () => {
  const [value, setValue] = useState(0);
  const previousValue = usePrevious(value);
  const handleClick = useCallback(() => {
    setValue((c) => c + 1);
  }, []);

  return (
    <div>
      <div>
        previous:
        {previousValue}
        , current:
        {value}
      </div>
      <button type="button" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default Previous;
