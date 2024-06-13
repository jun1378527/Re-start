import React, { useState, useCallback } from "react";
import Todos from "./Todos"; // Todos 컴포넌트를 가져옵니다.

const CountUpUseCallBack = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(c => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos(t => [...t, "New todo"]);
  }, [setTodos]);

  return (
    <div>
      <p>useCallback 사용</p>
      <Todos todos={todos} addTodo={addTodo} />
      <div>
        <div>Count : {count}</div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default CountUpUseCallBack;
