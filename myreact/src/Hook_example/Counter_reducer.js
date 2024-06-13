import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;

// import { useReducer } from "react";

// 핵심 차이점
// 단일 상태 vs. 복잡한 상태:

// useState는 단일 상태 변수를 간단하게 관리할 때 적합합니다.
// useReducer는 복잡한 상태 관리 로직이나 여러 상태 변수를 관리할 때 적합합니다.

// 상태 업데이트 방식:

// useState는 직접 상태 업데이트 함수를 호출하여 상태를 변경합니다.
// useReducer는 액션 객체를 dispatch 함수로 전달하여 상태를 변경하며, reducer 함수가 상태 업데이트 로직을 처리합니다.
