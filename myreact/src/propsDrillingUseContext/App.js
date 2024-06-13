import React, { createContext, useContext, useState } from "react";

// CountContext 생성
const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);

  return (
    <CountContext.Provider value={{ count, increment }}>
      <Level1>
        <Level2>
          <Level3>
            <Level4>
              <Level5 />
            </Level4>
          </Level3>
        </Level2>
      </Level1>
    </CountContext.Provider>
  );
}

function Level1({ children }) {
  return (
    <div>
      <h2>Level 1</h2>
      {children}
    </div>
  );
}

function Level2({ children }) {
  return (
    <div>
      <h2>Level 2</h2>
      {children}
    </div>
  );
}

function Level3({ children }) {
  return (
    <div>
      <h2>Level 3</h2>
      {children}
    </div>
  );
}

function Level4({ children }) {
  return (
    <div>
      <h2>Level 4</h2>
      {children}
    </div>
  );
}

function Level5() {
  const { count, increment } = useContext(CountContext);
  return (
    <div>
      <h2>Level 5</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
