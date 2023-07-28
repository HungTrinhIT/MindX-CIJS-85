import React from "react";

const TodoList = React.memo(({ todos, onAddTodo }) => {
  console.log("TodoList component re-render");
  return (
    <div>
      <ul>
        {todos.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
      <button onClick={onAddTodo}>Add new todos</button>
    </div>
  );
});

export default TodoList;

// shouldComponentUpdate()

// previous props
// current props
