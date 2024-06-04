import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="todo-editor">
      <h3>새로운 Todo 작성하기 ✏️</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="새로운 Todo..."
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default TodoEditor;
