import { useState } from "react";
import Todos from "./Todos";
const CountUp = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(c => c + 1);
  };
  const addTodo = () => {
    setTodos(t => [...t, "New todo"]);
  };
  return (
    <div>
      <p>useCallback 없이</p>
      <Todos todos={todos} addTodo={addTodo} />
      <div>
        <div>Count : {count}</div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default CountUp;
