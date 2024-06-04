import { useState } from "react";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      date: new Date().toLocaleDateString("ko-KR"),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="app">
      <Header />
      <TodoEditor addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
