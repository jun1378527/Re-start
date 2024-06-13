import React, { createContext, useContext, useState, useMemo } from "react";

// CountContext 생성
const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = useMemo(() => ({ count, setCount }), [count]);

  return (
    <CountContext.Provider value={value}>
      <Level1 />
    </CountContext.Provider>
  );
}

function Level1() {
  return (
    <div>
      <h2>Level 1</h2>
      <Level2 />
    </div>
  );
}

function Level2() {
  return (
    <div>
      <h2>Level 2</h2>
      <Level3 />
    </div>
  );
}

function Level3() {
  return (
    <div>
      <h2>Level 3</h2>
      <Level4 />
    </div>
  );
}

function Level4() {
  return (
    <div>
      <h2>Level 4</h2>
      <Level5 />
    </div>
  );
}

function Level5() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <h2>Level 5</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
