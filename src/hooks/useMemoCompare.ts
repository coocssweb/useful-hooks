/*
 * @Author: wangjiaxin
 * @Date: 2020-04-29 16:12:38
 * @Description: gives us the memoized value of an object, but instead of passing an array of dependencies (like with useMemo) we pass a custom compare function that gets both the previous and new value.
 */
import * as React from 'react';
import { NOOP } from '@constants/index';

const { useRef, useEffect } = React;

const useMemoCompare = (value: any, compare: Function = NOOP.FUNCTION) => {
  // Ref for storing previous value
  const previousRef = useRef();
  const previous = previousRef.current;

  // Pass previous and new value to compare function
  const isEqual: boolean = compare(previous, value);

  // If not equal update previous to new value (for next render)
  // and then return new new value below.
  useEffect(() => {
    if (!isEqual) {
      previousRef.current = value;
    }
  });

  return isEqual ? previous : value;
};

export default useMemoCompare;
