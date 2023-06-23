import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const { data = [] } = props;

  const listTodoElements = data && data.map((todo) => <TodoItem {...todo} />);
  return <div>{listTodoElements}</div>;
};
export default TodoList;
