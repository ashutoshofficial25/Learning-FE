import React from "react";
import Box from "./Board-Box";
import * as utils from "../utils/functions";

class Board extends React.Component {
  constructor(props) {
    super(props);

    //initialize the component state

    this.state = {
      boxes: Array(9).fill(null),
      history: [],
      xIsNext: true,
    };
  }
  handleBoxClick(index) {
    const boxes = this.state.boxes.slice();

    //stop the board when winning combinaion

    if (boxes[index] !== null) {
      return;
    }

    //get current history
    let history = this.state.history;

    if (utils.findwinner(boxes)) {
      return;
    }

    //stop the game if all boxes are clicked or filled

    if (utils.areAllBoxesClicked(boxes) === true) {
      return;
    }

    //mark the box with either x or o

    boxes[index] = this.state.xIsNext ? "x" : "o";

    //add the moves to the history

    history.push(this.state.xIsNext ? "x" : "o");

    //check for double click

    //update the state
    this.setState({
      boxes: boxes,
      history: history,
      xIsNext: !this.state.xIsNext,
    });

    //winner
    utils.findwinner(boxes);
    //hande game restart
  }

  handleBoardRestart() {
    this.setState({
      boxes: Array(9).fill(null),
      history: [],
      xIsNext: true,
    });
  }

  render() {
    //get the winer if any
    const winner = utils.findwinner(this.state.boxes);

    //if all boxes are filled or not

    const isFilled = utils.areAllBoxesClicked(this.state.boxes);

    let status;

    if (winner) {
      status = `the winner is ${winner}`;
    } else if (!!winner && isFilled) {
      status = "game drawn";
    } else {
      status = `its ${this.state.xIsNext ? "x" : "o"} turn`;
    }

    return (
      <div className="board-wrapper">
        <div className="board">
          <h2 className="board-heading"> x turn </h2>

          <div className="board-row">
            <Box
              handleBoxClick={() => this.handleBoxClick(0)}
              value={this.state.boxes[0]}
            />
            <Box
              handleBoxClick={() => this.handleBoxClick(1)}
              value={this.state.boxes[1]}
            />
            <Box
              handleBoxClick={() => this.handleBoxClick(2)}
              value={this.state.boxes[2]}
            />
          </div>
          <div className="board-row">
            <Box
              handleBoxClick={() => this.handleBoxClick(3)}
              value={this.state.boxes[3]}
            />
            <Box
              handleBoxClick={() => this.handleBoxClick(4)}
              value={this.state.boxes[4]}
            />
            <Box
              handleBoxClick={() => this.handleBoxClick(5)}
              value={this.state.boxes[5]}
            />
          </div>
          <div className="board-row">
            <Box
              handleBoxClick={() => this.handleBoxClick(6)}
              value={this.state.boxes[6]}
            />
            <Box
              handleBoxClick={() => this.handleBoxClick(7)}
              value={this.state.boxes[7]}
            />
            <Box
              handleBoxClick={() => this.handleBoxClick(8)}
              value={this.state.boxes[8]}
            />
          </div>
        </div>

        {/* history of moves */}

        <ul className="board-history-list">
          {this.state.history.length === 0 && <span>No moves to show</span>}

          {this.state.history.length !== 0 &&
            this.state.history.map((move, i) => {
              return (
                <li>
                  Move {i + 1} : <strong></strong>
                </li>
              );
            })}
        </ul>

        {/* button for restart */}
        {winner && (
          <button className="btn" onClick={this.handleBoardRestart}>
            Start New Game
          </button>
        )}
      </div>
    );
  }
}

export default Board;
