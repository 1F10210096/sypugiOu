export function calculateGinCandidateSquares(rowIndex:number, colIndex:number, boardData: (string | null)[][]) {
  const candidateSquares = [];

  // Calculate candidate squares in all directions (excluding diagonals)
  const directions = [
    { row: -1, col: 0 }, // Up
    { row: 0, col: -1 }, // Left
    { row: 0, col: 1 },  // Right
    { row: 1, col: 0 },  // Down
  ];

  for (const direction of directions) {
    const newRow = rowIndex + direction.row;
    const newCol = colIndex + direction.col;

    // Check if the new position is within the board boundaries
    if (newRow >= 0 && newRow < 9 && newCol >= 0 && newCol < 9) {
      candidateSquares.push({ row: newRow, col: newCol });
    }
  }

  return candidateSquares;
}