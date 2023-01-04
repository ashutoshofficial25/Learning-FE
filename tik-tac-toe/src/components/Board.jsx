import React from "react";
class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board-wrapper">
        <div className="board">
          <h2 className="board-heading"> x turn </h2>

          <div className="board-row"></div>
        </div>
      </div>
    );
  }
}

export default Board;
