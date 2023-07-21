import React, { useEffect, useRef, useState } from "react";

/*
    - Truy cập được đến DOM Elements
    - Không làm component re-render (so với state)
    - Tracking được cái state qua mỗi lần re-render
*/
const DemoUseRef = (props) => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  const count = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    const newRenderCount = count.current + 1;
    count.current = newRenderCount;
    //   setCount(newRenderCount);
  });

  const onClickHandler = () => {
    // Cách 1
    // const inputDom = document.getElementById("test");
    // inputDom.focus();

    // Cách 2
    inputRef.current.focus();
    console.log(inputRef.current);
  };

  const onHandleChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log("newRenderCount:", count.current);
  console.log({
    previousInputValue: previousInputValue.current,
    currentInputValue: inputValue,
  });
  return (
    <div>
      <input
        id="test"
        name="inputValue"
        ref={inputRef}
        value={inputValue}
        onChange={onHandleChange}
      />
      <div>
        <button onClick={onClickHandler}>Click me to focus the input</button>
      </div>
      <p>Số lần render: {count.current}</p>
    </div>
  );
};

export default DemoUseRef;

// a -> b -> c
// (previous state & current state)
