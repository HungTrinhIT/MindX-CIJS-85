import "./App.css";
import ClassComponent from "./ClassComponent";
import Counter from "./components/Counter/Counter";

import StudentManagement from "./components/StudentManagement/StudentManagement";
import UserComponent from "./components/UserComponent/UserComponent";

// Class Component
// Functional Component (*)
// babel
function App() {
  return (
    <div>
      {/* <ClassComponent /> */}
      {/* <StudentManagement /> */}
      <Counter />
      <UserComponent />
    </div>
  );
}

export default App;
