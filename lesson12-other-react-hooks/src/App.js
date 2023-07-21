import "./App.css";
import DemoUseMemo from "./components/DemoUseMemo";
import DemoUseRef from "./components/DemoUseRef";

const App = () => {
  return (
    <div>
      <h1>Other react hooks</h1>
      <hr />
      {/* <DemoUseRef /> */}
      <DemoUseMemo />
    </div>
  );
};

export default App;
