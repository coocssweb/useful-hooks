/* eslint-disable no-param-reassign */
/*
 * @Author: wangjiaxin
 * @Date: 2020-04-29 16:12:42
 * @Description: makes it easy to see which prop changes are causing a component to re-render.
 */
import { useEffect, useRef } from 'react';

const useWhyDidYouUpdate = (name: string, props: object) => {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = useRef<any>();

  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys: Array<string> = Object.keys({ ...previousProps.current, ...props });
      // Use this object to keep track of changed props
      const changesObj = allKeys.reduce((changes: object, key: string) => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changes[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }

        return changes;
      }, {});
      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj);
      }
    }

    // Finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
};

export default useWhyDidYouUpdate;
