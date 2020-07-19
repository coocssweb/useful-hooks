import * as React from 'react';
import useMemoCompare from '../hooks/useMemoCompare';

const { useState, useEffect, useCallback } = React;

// Usage
function MemoCompare() {
  const [obj, setObj] = useState({ id: 123, name: 'wjx' });

  // We want the previous obj if obj.id is the same as the new obj.id
  // We pass a custom equality function as the second arg to our hook.
  const theObj = useMemoCompare(obj, (prev: any, value: any) => {
    return prev && prev.id === value.id;
  });

  // Here we want to fire off an effect if theObj changes.
  // If we had used obj directly without the above hook and obj was technically a
  // new object on every render then the effect would fire on every render.
  // Worse yet, if our effect triggered a state change it could cause an endless loop.
  // (effect runs -> state change causes rerender -> effect runs -> etc ...)
  useEffect(() => {
    // Call a method on the object and set results to state
    console.log('[memo obj]', theObj);
  }, [theObj]);

  // So why not just pass [obj.id] as dependecy array?
  useEffect(() => {
    // Well, then eslint-plugin-hooks would rightfully complain that obj is not in the
    // dependency array. By using our hook above we are more explicit about our custom
    // equality checking and can separate that concern from that of our effect logic.

    console.log('[obj]', obj);
  }, [obj]);

  const handleChangeIdClick = useCallback(() => {
    setObj({
      id: Math.random() * 10,
      name: 'wangjiaxin',
    });
  }, []);

  const handleChangeNameClick = useCallback(() => {
    setObj({
      id: obj.id,
      name: `wangjiaxin-${Math.random() * 10}`,
    });
  }, [obj.id]);

  return (
    <div>
      <button type="button" onClick={handleChangeIdClick}>
        Change Id
      </button>
      <div />
      <button type="button" onClick={handleChangeNameClick}>
        Change Name
      </button>
    </div>
  );
}

export default MemoCompare;
