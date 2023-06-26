import { useState } from "react";
const Counter = () => {
  // useState return về một mảng một chiều
  // Mảng một chiều này có 2 giá trị
  const [count, setCount] = useState(0);

  // let count = 0;

  // const onIncreaseHandler = () => {
  //   const newValue = count + +1;
  //   setCount(newValue);
  // };

  // const onDecreaseHandler = () => {
  //   const newValue = count - 1;
  //   setCount(newValue);
  // };

  // Cách 1
  const onCounterHandler = (value) => () => {
    console.log("onCounterHandler runs:", value);
    const newValue = count + value;
    setCount(newValue);
  };

  // Cách 2
  // const onCounterHandler = (value) => () => {
  //   console.log("onCounterHandler runs:", value);
  //   const newValue = count + value;
  //   setCount(newValue);
  // };

  const counterStyling = {
    padding: "0 16px",
  };

  return (
    <div>
      <h1>Counter example</h1>
      <button onClick={() => onCounterHandler(-1)}>Decrease (-)</button>
      <span style={counterStyling}>{count}</span>
      <button onClick={() => onCounterHandler(1)}>Increase (+)</button>

      
    </div>
  );
};

export default Counter;

// State change (setState) => component re-render
