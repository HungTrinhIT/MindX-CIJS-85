import { useState } from "react";
import "./App.css";
import AddNewTodo from "./components/AddNewTodo";
import TodoList from "./components/TodoList";

const todoListData = [
  {
    isCompleted: true,
    title: "Learn ReactJS",
  },
  {
    isCompleted: false,
    title: "Learn Math",
  },
  {
    isCompleted: false,
    title: "Learn Angular",
  },
];

function App() {
  const [todoList, setTodoList] = useState(todoListData);

  const onAddNewTodoHandler = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="root">
      <AddNewTodo onAddTodo={onAddNewTodoHandler} />
      <TodoList data={todoList} />
    </div>
  );
}

export default App;
/*
  App
    SearchInput
    TodoList
      TodoItem
      TodoItem
      TodoItem
*/
