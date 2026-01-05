import React, { useState } from "react";

export default function CounterDemo({ initial = 0, min = -Infinity, max = Infinity }) {
  const [count, setCount] = useState(initial);
  const inc = () => setCount((c) => Math.min(max, c + 1));
  const dec = () => setCount((c) => Math.max(min, c - 1));
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-2xl font-medium">{count}</div>
      <div className="flex gap-2">
        <button aria-label="decrement" className="px-3 py-1 rounded bg-gray-200" onClick={dec}>-</button>
        <button aria-label="increment" className="px-3 py-1 rounded bg-gray-200" onClick={inc}>+</button>
      </div>
    </div>
  );
}
