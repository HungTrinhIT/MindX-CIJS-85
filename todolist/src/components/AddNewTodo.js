const AddNewTodo = (props) => {
  const onAddTodoHandler = () => {
    const newTodo = {
      isCompleted: false,
      title: "Test todo",
    };

    props.onAddTodo(newTodo);
  };
  return (
    <div>
      <input type="text" />
      <button onClick={onAddTodoHandler}>Add new todo</button>
    </div>
  );
};
export default AddNewTodo;
