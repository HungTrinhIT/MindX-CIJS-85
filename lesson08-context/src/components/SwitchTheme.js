import React, { useContext } from "react";
import ThemeContext from "../contexts/Theme/ThemeContext";

const SwitchTheme = () => {
  const { setTheme } = useContext(ThemeContext);
  const onHandleThemeChange = (e) => {
    const value = e.target.value;
    setTheme(value);
  };
  return (
    <div>
      <select onChange={onHandleThemeChange}>
        <option value={"light"}>Light mode</option>
        <option value={"dark"}>Dark mode</option>
      </select>
    </div>
  );
};

export default SwitchTheme;
