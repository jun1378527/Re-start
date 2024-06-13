import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import reducer, { increment } from "./reducer";

// Redux 스토어 생성
const store = createStore(reducer);

const Level5 = ({ value }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Level 5</h1>
      <div>Value: {value}</div>
    </div>
  );
};

const Level4 = () => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Level 4</h1>
      <ConnectedLevel5 />
    </div>
  );
};

const Level3 = () => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Level 3</h1>
      <Level4 />
    </div>
  );
};

const Level2 = () => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Level 2</h1>
      <Level3 />
    </div>
  );
};

const Level1 = ({ value, increment }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Level 1</h1>
      <div>Value: {value}</div>
      <button onClick={increment}>+</button>
      <Level2 />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.count,
});

const mapDispatchToProps = {
  increment,
};

const ConnectedLevel1 = connect(mapStateToProps, mapDispatchToProps)(Level1);
const ConnectedLevel5 = connect(mapStateToProps)(Level5);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Props drilling - redux</h1>
        <ConnectedLevel1 />
      </div>
    </Provider>
  );
};

export default App;
