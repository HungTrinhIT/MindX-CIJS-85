import { useContext } from "react";
import MyStore from "../contexts/MyStore/MyStoreContext";
import ThemeContext from "../contexts/Theme/ThemeContext";

const Red = () => {
  // Tạo connect đến store
  const myStore = useContext(MyStore);
  const { theme } = useContext(ThemeContext);

  // Conditional rendering
  const classes = theme === "light" ? "box" : "boxDark";

  return (
    <div className={classes}>
      <p>{myStore.message}</p>
      <p>{myStore.messageTwo}</p>
    </div>
  );
};

export default Red;
