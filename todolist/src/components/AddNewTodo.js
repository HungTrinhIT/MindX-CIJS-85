import { useState } from "react";

const AddNewTodo = (props) => {
  const [todoTitle, setTodoTitle] = useState("");

  const onChangeHandler = (e) => {
    setTodoTitle(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Chuẩn bị newTodo data
    const newTodo = {
      title: todoTitle,
      isCompleted: false,
    };

    props.onAddTodo(newTodo);
    setTodoTitle("");
  };

  return (
    <form className="add-todo" onSubmit={onSubmitHandler}>
      <input type="text" value={todoTitle} onChange={onChangeHandler} />
      <button type="submit">Add new todo</button>
    </form>
  );
};
export default AddNewTodo;
