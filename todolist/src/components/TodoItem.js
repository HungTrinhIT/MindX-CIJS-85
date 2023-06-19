const TodoItem = (props) => {
  console.log("Props in TodoItem:", props);

  // JSX
  return <h1 className="todo">{props.title}</h1>;
};
export default TodoItem;
