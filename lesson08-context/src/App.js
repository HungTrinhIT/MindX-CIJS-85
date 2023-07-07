import Black from "./components/Black";
import "./App.css";
import MyStore from "./contexts/MyStore/MyStoreContext";
import ThemeContext from "./contexts/Theme/ThemeContext";
import { useState } from "react";
import SwitchTheme from "./components/SwitchTheme";
import DisplayTheme from "./components/DisplayTheme";

function App() {
  const [theme, setTheme] = useState("light");
  const messageValue = "Tôi moiws trúng 100 tỷ";

  return (
    <MyStore.Provider
      value={{
        message: messageValue,
        messageTwo: "Hello Mindx",
      }}
    >
      <ThemeContext.Provider
        value={{
          theme: theme,
          setTheme,
        }}
      >
        <div className="App">
          <h1>Learning context</h1>
          <SwitchTheme />
          <Black />
          {/* <DisplayTheme /> */}
        </div>
      </ThemeContext.Provider>
     
    </MyStore.Provider>
  );
}

export default App;
