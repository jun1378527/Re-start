import { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, toggleComplete, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewText(todo.text);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={e => setNewText(e.target.value)}
          />
          <button className="save-btn" onClick={handleUpdate}>
            저장
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            취소
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span className="todo-text">{todo.text}</span>
          <span className="todo-date">{todo.date}</span>
          <button className="edit-btn" onClick={handleEdit}>
            수정
          </button>
          <button className="delete-btn" onClick={() => removeTodo(todo.id)}>
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
