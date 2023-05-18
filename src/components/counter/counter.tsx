import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((count: number) => count + 1);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <input type="number" name="number" id="number" />
      <button type="button">Set</button>
    </>
  );
}
