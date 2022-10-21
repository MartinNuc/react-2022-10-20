import { useMemo, useCallback } from "react";

export function UseMemoUseCallbackDifference() {

  const resultUseMemo = useMemo(() => {
    return [1, 2, 3];
  }, [])
  // resultUseMemo = [1,2,3]

  const resultUseCallback = useCallback((param) => {
    return [1, 2, 3, param];
  }, [])
  // resultUseCallback = function
  resultUseCallback('ahoj')

  return <button onClick={resultUseCallback}>Click me</button>
}