import React, { useState } from 'react'


type UseCounterProps = [number, () => void, () => void]

function useCounter(initialValue: number): UseCounterProps {
  const [count, setCount] = useState<number>(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter