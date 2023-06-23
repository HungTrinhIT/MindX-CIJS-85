const TodoItem = (props) => {
  const { isCompleted, title } = props;
  // JSX
  return (
    <div
      style={{
        padding: "10px",
        background: "rgb(213, 213, 213)",
        marginBottom: "8px",
        display: "flex",
        borderRadius: "8px",
        alignItems: "center",
      }}
    >
      <input type="checkbox" checked={isCompleted} />
      <p>{title}</p>
    </div>
  );
};
export default TodoItem;
