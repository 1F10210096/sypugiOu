// Function to calculate candidate squares for the "桂馬" (keima) piece
export function calculateKeimaCandidateSquares(rowIndex:number, colIndex:number, boardData: (string | null)[][]) {
  const candidateSquares = [];

  // Calculate candidate squares for the "桂馬" piece's unique L-shaped move
  const moves = [
    { row: -2, col: -1 }, // Up-Left
    { row: -2, col: 1 },  // Up-Right
  ];

  for (const move of moves) {
    const newRow = rowIndex + move.row;
    const newCol = colIndex + move.col;

    // Check if the new position is within the board boundaries
    if (newRow >= 0 && newRow < 9 && newCol >= 0 && newCol < 9) {
      candidateSquares.push({ row: newRow, col: newCol });
    }
  }

  return candidateSquares;
}