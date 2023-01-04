import React from "react";

const Box = ({ value, handleBoxClick }) => {
  return (
    <button className="board-box" onClick={handleBoxClick}>
      {value}
    </button>
  );
};

export default Box;
