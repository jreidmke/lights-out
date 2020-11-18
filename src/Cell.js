import React from "react";
import "./Cell.css";

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

function Cell({ flipCellsAroundMe, isLit }) {
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`; //<-- potentially need to add class "Cell" to this blank ternary spot :)
  return <td className={classes} onClick={flipCellsAroundMe} />; //cell will be set to class decided above. given onClick event to trigger flipCellsAroundMe. 
}

export default Cell;
