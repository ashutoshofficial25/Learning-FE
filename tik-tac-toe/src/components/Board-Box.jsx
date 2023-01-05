import React from "react";

const Box = ({ value, handleBoxClick }) => {
  console.log("log:", value);
  return (
    <button className="board-box" onClick={handleBoxClick}>
      {value}
    </button>
  );
};

export default Box;
