//UI

const TILE_STATUSES = {
  HIDDEN: "hidden",
  MARKED: "marked",
  NUMBER: "number",
  MINE: "mine",
};
export const createBoard = (boardSize, numberOfMines) => {
  const board = [];
  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      const element = document.createElement("div");
      element.dataset.status = TILE_STATUSES.HIDDEN;
      const tile = { element, i, j };
      row.push(tile);
    }
    board.push(row);
  }
  return board;
};
