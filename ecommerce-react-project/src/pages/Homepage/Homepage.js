import React from "react";
import mockupDatas from "../../utils/mockData";

const Homepage = () => {
  return (
    <div>
      {mockupDatas.map((data) => (
        <div>
          <img src={data.thumbnailMain} />
          <img src={data.thumbnailExtra} />
        </div>
      ))}
    </div>
  );
};

export default Homepage;
