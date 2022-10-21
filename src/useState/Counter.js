import { useState } from 'react';

export function Counter(props) {
  const [counter, setCounter] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function handleClick() {
    setCounter(counter + incrementBy);
    props.onCounterChanged(counter + incrementBy);
  }

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