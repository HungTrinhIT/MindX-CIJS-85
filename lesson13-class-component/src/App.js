import { useState, useEffect } from "react";
import DemoClassComponent from "./components/DemoClassComponent";
import "./App.css";

function App() {
  const [showDemoClassComponent, setShowDemoClassComponent] = useState(true);
  const onToggle = () => {
    setShowDemoClassComponent((previousState) => !previousState);
  };

  return (
    <div className="App">
      <button onClick={onToggle}>Toggle Component Demo Class</button>
      {showDemoClassComponent && <DemoClassComponent message="Hello Mindx" />}
    </div>
  );
}

export default App;

/*
   - Class component - Statefull component (state)
   - Functional component - Stateless component
  useState, useEffect, useEffect  => React Hooks
  >= 16.8+ 
*/

/*
  1. ReactJS là gì?
    - UI library
    - Single page application (duy nhất 1 file HTML)
    - Component-based
  
  2. Main concept
    - Component
      + Functional component (*)
      + Class component 
    - props
    - data => one way data-binding
    - conditional rendering
    - rendering list (unique key)
    - state (**)
    - form (onChange, onSubmit)
    - sideEffect => useEffect
    - Routing: react-router-dom
    - context
    - Organize folder structure
    - clean code in ReactJS (coding convention, avoid MAGIC number)  
    - Form library (Formik, Yup) 
    - Deployement (vercel, netlify)

    <PrivateRoute  />
    <Route />
*/
