import { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./ClassComponent";
import StudentManagement from "./components/StudentManagement/StudentManagement";

// Class Component
// Functional Component (*)
// babel
function App() {
  // const name = "MindX Technology School";
  // JSX: Javascript XML
  // const elements = [
  //   <h1>Hello world</h1>,
  //   <p>Hello 123 123 123 123</p>,
  //   <ul>
  //     <li>Home</li>
  //     <li>About</li>
  //   </ul>,
  // ];
  // return elements;
  // return (
  //   <Fragment>
  //     <header className="header-wrapper"></header>
  //     <div className="App">
  //       <ClassComponent />
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Hello {name.toUpperCase()}
  //         </a>
  //         <p
  //           style={{
  //             lineHeight: "24px",
  //             fontSize: "16px",
  //             color: "red",
  //           }}
  //         >
  //           {1 + 1}
  //         </p>
  //       </header>
  //     </div>
  //     <footer></footer>
  //   </Fragment>
  // );

  return (
    <>
      <StudentManagement />
    </>
  );
}

export default App;

// categoryItem => CategoryItem
