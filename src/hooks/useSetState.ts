/*
 * @Author: wangjiaxin
 * @Date: 2020-12-25 09:30:40
 * @Description: xxxxxxxxxxxxxxxx
 */
import { useCallback, useState } from 'react';
import useLatest from './useLatest';

const useSetState = (value) => {
  const [stateValue, setStateValue] = useState(value);
  const latestStateValue = useLatest(stateValue);

  const handleSetValue = useCallback(
    (newValue) => {
      setStateValue({
        ...latestStateValue.current,
        newValue,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return [stateValue, handleSetValue];
};

export default useSetState;
