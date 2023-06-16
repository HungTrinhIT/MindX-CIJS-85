import logo from "./logo.svg";
import "./App.css";
import SearchInput from "./components/SearchInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <SearchInput />
      <TodoList />
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
