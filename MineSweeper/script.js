import { createBoard } from "./minesweeper.js";

const BOARD_SIZE = 4;
const NUMBER_OF_MINES = 2;

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
[
  [	
    { element: div, i: 0, j: 0 },
    { element: div, i: 0, j: 1 },
  ],
  [
    { element: div, i: 1, j: 0 },
    { element: div, i: 1, j: 1 },
  ],
];

board.forEach(row => {
	row.forEach(tile => {
		
	})
})
