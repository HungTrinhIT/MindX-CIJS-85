import React, { useEffect, useState } from "react";

/*
    Side effects
    useEffect(callbackFunction, [deps])

    1. useEffect KHÔNG có deps
        - useEffect sẽ run sau mỗi lần component render
    2. useEffect CÓ deps
        - khi các thành phần trong array dependencies thay đổi => effect runs
        - Ghi nhớ: nên đưa deps mà trong useEffect dùng để giảm thiểu số lần component
        re-render không cần thiết
        - useEffect với deps rỗng => chạy sau lần Render ĐẦU TIÊN

    3. useEffect với cleanup function
        

*/

const Articles = () => {
  const [count, setCount] = useState(0);
  const [studentName, setStudentName] = useState("Alex");
  const [type, setType] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("1. Effect runs");
    document.title = `${count}`;
  }, [count]);

  //   Fetch dữ liệu từ phía server
  // Mỗi lần loại resource thay đổi => state change => component re-render
  // useEffect run một lần nữa
  useEffect(() => {
    console.log("2. useEffect call API runs");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        setData(data);
      });
  }, [type]);

  // useEffect với array dependencies rỗng
  // Chỉ run sau lần render ĐẦU TIÊN
  useEffect(() => {
    console.log("3. Effect with EMPTY deps runs");
  }, []);

  const onHandleAddCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onHandleAddCount}>Click me!</button>
      <p>Count: {count}</p>
      <input
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <p>Student name: {studentName}</p>
      {console.log("RENDER runs")}

      <h4>Current resource type: {type}</h4>
      <div className="button-group">
        <button onClick={() => setType("posts")}>Get posts</button>
        <button onClick={() => setType("comments")}>Get comments</button>
        <button onClick={() => setType("todos")}>Get todos</button>
      </div>
      <div>
        <h3>List data</h3>
        <ul>
          {data.length === 0
            ? "No data"
            : data.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Articles;
