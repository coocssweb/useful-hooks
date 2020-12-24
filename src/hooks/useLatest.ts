/*
 * @Author: wangjiaxin
 * @Date: 2020-12-22 16:35:08
 * @Description: xxxxxxxxxxxxxxxx
 *
 */
import * as React from 'react';

const { useRef } = React;

const useLatest = (value: any) => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export default useLatest;
