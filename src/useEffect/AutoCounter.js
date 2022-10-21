import { useEffect, useState } from 'react';

export const AutoCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalReference = setInterval(() => {
      setCounter(currentCounter => currentCounter + 1);
    }, 1000);

    return () => clearInterval(intervalReference);
  }, []);

  return <div>Auto-Counter: {counter}</div>;
};
