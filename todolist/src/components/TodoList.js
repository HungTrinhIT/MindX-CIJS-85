import TodoItem from "./TodoItem";
const TodoList = () => {
  return (
    <div>
      <TodoItem title="Learn React" isCompleted={true} />
      <TodoItem title="Đi ăn cơm" />
      <TodoItem title="Đi về" />
    </div>
  );
};
export default TodoList;
