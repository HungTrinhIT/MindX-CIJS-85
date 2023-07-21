import React, { useMemo, useState } from "react";

const expensiveCalculateFunction = (count) => {
  console.log("Calculating....");
  for (let i = 0; i < 10000000000; i++) {
    count += 1;
  }
  return count;
};

const DemoUseMemo = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const onAddTodo = () => {
    setTodos((todos) => [...todos, "New todos"]);
  };

  const onIncreaseCount = () => {
    setCount((count) => count + 1);
  };

  const expensiveValue = useMemo(
    () => expensiveCalculateFunction(count),
    [count]
  );

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
      <button onClick={onAddTodo}>Add new todos</button>
      <hr />
      <h2>Counter</h2>
      <p>Count {count}</p>
      <button onClick={onIncreaseCount}>+ Count</button>
      <p>VALUEEEE: {expensiveValue}</p>
    </div>
  );
};

export default DemoUseMemo;
