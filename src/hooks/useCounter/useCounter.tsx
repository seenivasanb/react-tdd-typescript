import { useState } from "react";

type UseCounterProps = {
  initialCount?: number;
};

export const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  return { count, increment, decrement };
};
