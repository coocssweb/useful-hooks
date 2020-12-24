import * as React from 'react';
import { usePrevious, useLatest } from '../hooks';

const { useEffect } = React;

const { useState, useCallback } = React;

const Previous = () => {
  const [value, setValue] = useState(0);
  const previousValue = usePrevious(value);
  const valueRef = useLatest(value);

  const handleClick = useCallback(() => {
    setValue((c) => c + 1);
  }, []);

  useEffect(() => {
    console.log('===================================', valueRef.current);
    return () => {
      console.log('++++++++++++++++++++++++++++++++++++++++++++++=', valueRef.current);
    };
  }, [valueRef]);

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
