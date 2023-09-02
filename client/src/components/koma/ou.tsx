export function calculateOuCandidateSquares(rowIndex: number, colIndex: number) {
  const candidateSquares = [];

  // Calculate candidate squares in all directions (including diagonals)
  const directions = [
    { row: -1, col: -1 },
    { row: -1, col: 0 },
    { row: -1, col: 1 },
    { row: 0, col: -1 },
    { row: 0, col: 1 },
    { row: 1, col: -1 },
    { row: 1, col: 0 },
    { row: 1, col: 1 },
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
