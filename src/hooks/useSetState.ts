/*
 * @Author: wangjiaxin
 * @Date: 2020-12-25 09:30:40
 * @Description: xxxxxxxxxxxxxxxx
 */
import { useCallback, useState } from 'react';

const useSetState = (initialState) => {
  const [state, set] = useState(initialState);

  /**
   * `patch` 允许类型Function、Object
   * set((prevState) => ...), 依赖于prevState，这样setState不依赖于 `state`值
   */
  const setState = useCallback((patch) => {
    set((prevState) => {
      const patchValue = patch instanceof Function ? patch(prevState) : patch;
      return {
        ...prevState,
        ...patchValue,
      };
    });
  }, []);

  return [state, setState];
};

export default useSetState;
