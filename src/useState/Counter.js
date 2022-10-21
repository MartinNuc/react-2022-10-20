import { useCallback, useEffect, useState } from 'react';

export function Counter({ onCounterChanged }) {
  const [counter, setCounter] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  const handleClick = useCallback(() => {
    setCounter(counter => counter + incrementBy);
  }, [incrementBy]);

  useEffect(() => {
    onCounterChanged(counter);
  }, [counter, onCounterChanged]);

  return <>
    <div>{counter}</div>
    <div>
      Increment by:
      <input type="number"
        value={incrementBy}
        onChange={(event) => setIncrementBy(+event.target.value)} />
    </div>
    <button onClick={() => handleClick()}>Increment</button>
  </>;
}