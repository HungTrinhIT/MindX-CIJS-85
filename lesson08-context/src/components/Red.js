import { useContext } from "react";
import MyStore from "../contexts/MyStore/MyStoreContext";
import ThemeContext from "../contexts/Theme/ThemeContext";

const Red = () => {
  // Tạo connect đến store
  const myStore = useContext(MyStore);
  const themeCtx = useContext(ThemeContext);

  // Conditional rendering
  const classes = themeCtx.theme === "light" ? "box" : "boxDark";

  return (
    <div className={classes}>
      <p>{myStore.message}</p>
      <p>{myStore.messageTwo}</p>
    </div>
  );
};

export default Red;
