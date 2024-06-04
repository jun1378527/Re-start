import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, toggleComplete, removeTodo, updateTodo }) => {
  return (
    <div className="todo-list-container">
      <h3>Todo List 🌱</h3>
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
