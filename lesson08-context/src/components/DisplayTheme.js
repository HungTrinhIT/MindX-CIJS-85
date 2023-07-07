import React, { useContext } from "react";
import ThemeContext from "../contexts/Theme/ThemeContext";

const DisplayTheme = () => {
  // KHÔNG TẠO ĐƯỢC KẾT NỐI ĐẾN THẰNG CON
  const themeCtx = useContext(ThemeContext);
  return <div>{themeCtx.theme}</div>;
};

export default DisplayTheme;
