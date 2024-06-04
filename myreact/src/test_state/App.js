import React, { useState } from "react";
import "./App.css";

function App() {
  const [myState, setMyState] = useState(0);

  let myNum = 0;

  const incrementState = () => {
    setMyState(myState + 1);
  };

  const incrementNum = () => {
    myNum += 1;
    console.log("myNum:", myNum);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>리액트 상태 vs 변수</h1>
      </header>
      <div className="App-body">
        <div>
          <h2>상태</h2>
          <p>myState: {myState}</p>
          <button onClick={incrementState}>Increment State</button>
        </div>
        <div>
          <h2>변수</h2>
          <p>myNum: {myNum}</p>
          <button onClick={incrementNum}>Increment Num</button>
        </div>
      </div>
    </div>
  );
}

export default App;
