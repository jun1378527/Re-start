import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("Todos가 렌더링 되고 있다.");
  if (process.env.NODE_ENV === "development") {
    console.log("개발 모드");
  } else if (process.env.NODE_ENV === "production") {
    console.log("프로덕션 모드");
  }

  return (
    <div>
      <h2>My Todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
};
export default memo(Todos);
