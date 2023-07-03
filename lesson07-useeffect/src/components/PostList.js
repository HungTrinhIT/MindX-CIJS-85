import React, { useEffect } from "react";

const PostList = (props) => {
  const { data } = props;
  const handleScroll = () => {
    console.log("Scroll:", window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      // Xử lý việc cleanup sideeffect trước khi
      // gỡ bỏ component ra khỏi cây DOM
      console.log("Cleanup PostList runs");
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul>
      {data.length === 0
        ? "No data"
        : data.map((item) => <li key={item.id}>{item.title}</li>)}
    </ul>
  );
};

export default PostList;
