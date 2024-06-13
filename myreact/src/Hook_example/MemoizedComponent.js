import React, { useState, useMemo } from "react";

function ExpensiveCalculation(a, b) {
  console.log("Calculating...");
  return a + b;
}

function MemoizedComponent() {
  const [count, setCount] = useState(0);
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  const memoizedResult = useMemo(() => {
    return ExpensiveCalculation(valueA, valueB);
  }, [valueA, valueB]);

  return (
    <div>
      <div>
        <input
          type="number"
          value={valueA}
          onChange={e => setValueA(parseInt(e.target.value, 10))}
        />
        <input
          type="number"
          value={valueB}
          onChange={e => setValueB(parseInt(e.target.value, 10))}
        />
      </div>
      <p>Result: {memoizedResult}</p>
      <div>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default MemoizedComponent;
