import React, { useMemo, useState, useCallback } from "react";
import TodoList from "./TodoList";

const expensiveCalculateFunction = (count) => {
  for (let i = 0; i < 1000000; i++) {
    count += 1;
  }
  return count;
};

const DemoUseMemo = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const onAddTodo = useCallback(() => {
    setTodos((todos) => [...todos, "New todos"]);
  }, [todos]);

  const onIncreaseCount = () => {
    console.log("Increase count function runs");
    setCount((count) => count + 1);
  };

  const expensiveValue = useMemo(
    () => expensiveCalculateFunction(count),
    [count]
  );

  return (
    <div>
      <h2>Todos</h2>
      <TodoList todos={todos} onAddTodo={onAddTodo} />
      <hr />
      <h2>Counter</h2>
      <p>Count {count}</p>
      <button onClick={onIncreaseCount}>+ Count</button>
      <p>VALUEEEE: {expensiveValue}</p>
    </div>
  );
};

export default DemoUseMemo;

// (?) Có nên lạm dụng các hooks: useMemo, useCallback và React.memo() hay không?
// setState React hooks (FC): replacing
// setState Class Component (CC): merging
