import "./App.css";
import Category from "./Category";
import Header from "./Header";

const App = () => {
  return (
    // JSX: Javascript XML
    <div>
      {/* <Header></Header> */}
      <Header />
      <div className="main">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default App;

// Component App
// Functional Component
