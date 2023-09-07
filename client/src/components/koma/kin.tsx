export function calculateKinCandidateSquares(
  rowIndex: number,
  colIndex: number,
  boardData: (string | null)[],
  isSente: boolean
) {
  const candidateSquares = [];

  // Calculate candidate squares based on player's side
  const directions = isSente
    ? [
        { row: -1, col: -1 }, // Up-left
        { row: -1, col: 0 }, // Up
        { row: -1, col: 1 }, // Up-right
        { row: 0, col: -1 }, // Left
        { row: 0, col: 1 }, // Right
        { row: 1, col: 0 }, // Down
      ]
    : [
        { row: 1, col: -1 }, // Down-left
        { row: 1, col: 0 }, // Down
        { row: 1, col: 1 }, // Down-right
        { row: 0, col: -1 }, // Left
        { row: 0, col: 1 }, // Right
        { row: -1, col: 0 }, // Up
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