/*
 * @Author: wangjiaxin
 * @Date: 2020-05-08 21:44:39
 * @Description: Return previous value
 */
import { useRef, useEffect } from 'react';

const usePrevious = (value: any) => {
  const previousRef = useRef(value);

  useEffect(() => {
    previousRef.current = value;
  }, [value]);

  // Return previous value (happens before update in useEffect above)
  return previousRef.current;
};

export default usePrevious;
