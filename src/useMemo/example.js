import { useMemo, useState } from "react";

export function UseMemoExample() {

  const [counter, setCounter] = useState(0);

  // const object = {
  //   a: 1,
  //   b: 2
  // };

  // const pole = [1, 2, 3];
  const pole = useMemo(() => [1, 2, 3], []);

  const object = useMemo(() => ({
    a: 1,
    b: counter
  }), [counter]);

  return <ExpensiveComponent pole={pole} data={object} />
}