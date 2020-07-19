import * as React from 'react';
import { useWhyDidYouUpdate } from '../hooks/index';

const { useState, useMemo } = React;

const Counter = React.memo((props: { style: Object; count: Number }) => {
  useWhyDidYouUpdate('Counter', props);
  return <div style={props.style}>{props.count}</div>;
});

const WhyDidYouUpdate = () => {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);

  // Our console output tells use that the style prop for <Counter> ...
  // ... changes on every render, even when we only change userId state by ...
  // ... clicking the "switch user" button. Oh of course! That's because the
  // ... counterStyle object is being re-created on every render.
  // Thanks to our hook we figured this out and realized we should probably ...
  // ... move this object outside of the component body.
  const counterStyle = useMemo(
    () => ({
      fontSize: '3rem',
      color: 'red',
    }),
    [],
  );

  return (
    <div>
      <div className="counter">
        <Counter count={count} style={counterStyle} />
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <div className="user">
        <img alt="" src={`http://i.pravatar.cc/80?img=${userId}`} />
        <button type="button" onClick={() => setUserId(userId + 1)}>
          Switch User
        </button>
      </div>
    </div>
  );
};

export default WhyDidYouUpdate;
