export function calculateKyoshaCandidateSquares(rowIndex:number, colIndex:number, boardData: (string | null)[][]) {
  const candidateSquares = [];

  // Calculate candidate squares in the vertical direction (upward only)
  for (let i = rowIndex - 1; i >= 0; i--) {
    if (boardData[i][colIndex] === null) {
      candidateSquares.push({ row: i, col: colIndex });
    } else {
      break;
    }
  }

  return candidateSquares;
}