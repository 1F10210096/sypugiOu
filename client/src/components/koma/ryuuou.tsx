export function calculateRyuouCandidateSquares(rowIndex:number, colIndex:number, boardData: (string | null)[][]) {
  const candidateSquares = [];

  // Calculate candidate squares for the "竜王" piece's movement
  const directions = [
    { row: -1, col: -1 }, // Up-Left
    { row: -1, col: 0 },  // Up
    { row: -1, col: 1 },  // Up-Right
    { row: 0, col: -1 },  // Left
    { row: 0, col: 1 },   // Right
    { row: 1, col: 0 },   // Down
  ];

  for (const direction of directions) {
    let newRow = rowIndex + direction.row;
    let newCol = colIndex + direction.col;

    // Continue in the direction until the edge of the board or a piece is encountered
    while (newRow >= 0 && newRow < 9 && newCol >= 0 && newCol < 9) {
      const squareContent = boardData[newRow][newCol];

      // eslint-disable-next-line max-depth
      if (squareContent === null) {
        candidateSquares.push({ row: newRow, col: newCol });
      } else {
        break;
      }

      newRow += direction.row;
      newCol += direction.col;
    }
  }

  return candidateSquares;
}