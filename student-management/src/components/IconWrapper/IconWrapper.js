import React from "react";

const IconWrapper = ({ children, bg = "bg-danger" }) => {
  return (
    <div
      className={`${bg} rounded-circle`}
      style={{
        width: "30px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
