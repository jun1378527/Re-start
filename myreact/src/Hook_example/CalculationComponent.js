import { useState, useMemo } from "react";

function ExpensiveCalculation(a, b) {
  console.log("Calculating a + b...");
  let sum = 0;
  for (let i = 1; i <= 1000000000; i++) {
    sum += i;
  }
  return a + b;
}

function CalculationComponent() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [valueC, setValueC] = useState(0);

  const memoizedAB = useMemo(() => {
    return ExpensiveCalculation(valueA, valueB);
  }, [valueA, valueB]);

  const result = memoizedAB + valueC;

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
        <input
          type="number"
          value={valueC}
          onChange={e => setValueC(parseInt(e.target.value, 10))}
        />
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default CalculationComponent;
