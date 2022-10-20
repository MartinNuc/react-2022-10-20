import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  return <>
    <div>{counter}</div>
    <button onClick={() => setCounter(counter + 1)}>Increment</button>
  </>;
}