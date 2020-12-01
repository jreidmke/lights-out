import React from "react";
import "./Cell.css";
import { uuid } from 'uuidv4';


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
  const classes = `Cell ${isLit ? "Cell-lit" : "Cell"}`;
  return <td className={classes} onClick={flipCellsAroundMe} data-testid={1} key={uuid()}/>; //cell will be set to class decided above. given onClick event to trigger flipCellsAroundMe.
}

export default Cell;
