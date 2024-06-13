import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

// Slice 생성
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
  },
});

const { actions, reducer } = counterSlice;
const { increment, decrement } = actions;

// 스토어 생성 m
const store = configureStore({
  reducer: {
    counter: reducer,
  },
});

// Level5 컴포넌트
const Level5 = () => {
  const value = useSelector(state => state.counter.count);
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Level 5</h1>
      <div>Value: {value}</div>
    </div>
  );
};

// Level4 컴포넌트
const Level4 = () => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Level 4</h1>
      <Level5 />
    </div>
  );
};

// Level3 컴포넌트
const Level3 = () => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Level 3</h1>
      <Level4 />
    </div>
  );
};

// Level2 컴포넌트
const Level2 = () => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Level 2</h1>
      <Level3 />
    </div>
  );
};

// Level1 컴포넌트
const Level1 = () => {
  const value = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Level 1</h1>
      <div>Value: {value}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <Level2 />
    </div>
  );
};

// App 컴포넌트
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Props Drilling - Redux Toolkit</h1>
        <Level1 />
      </div>
    </Provider>
  );
};

export default App;
