import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values

    for(let i = 0; i < nrows; i++) {
      let colArr = [];
      for(let j = 0; j < ncols; j++) {
        colArr.push(Math.random() > chanceLightStartsOn ? true : false);
      }
      initialBoard.push(colArr);
    }
    console.log(initialBoard);
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    return (board.flat().filter(x => x == true)).length === 0;
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      let newBoard = [...board];
      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, newBoard);
      flipCell(y, x - 1, newBoard);
      flipCell(y - 1, x, newBoard);
      flipCell(y + 1, x, newBoard);
      flipCell(y, x + 1, newBoard);
      // TODO: return the copy
      return newBoard;
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  const winningMsg = 'Congratulations. You have won the game!';
  if(hasWon()) {
    return <div><h1>{winningMsg}</h1></div>
  }
  // TODO

  // make table board
  let htmlBoard = [];

  for(let i = 0; i < nrows; i++) {
    let colArr = [];
    for(let j = 0; j < ncols; j++) {
      colArr.push(
        <Cell
        isLit={board[i][j]}
        flipCellsAroundMe={() => flipCellsAround(`${i}-${j}`)}
        />
      )
    }
    htmlBoard.push(<tr>{colArr}</tr>);
  }

  // TODO

  return(
    <table className="Board">
      <tbody>{htmlBoard}</tbody>
    </table>
  )
}

Board.defaultProps = {
  nrows: 30,
  ncols: 30,
  chanceLightStartsOn: .2
};

export default Board;
