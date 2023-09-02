export function calculateHishaCandidateSquares(rowIndex:number, colIndex:number, boardData: (string | null)[][]) {
  const candidateSquares = [];

  // Calculate candidate squares in the vertical direction
  for (let i = rowIndex - 1; i >= 0; i--) {
    if (boardData[i][colIndex] === null) {
      candidateSquares.push({ row: i, col: colIndex });
    } else {
      break;
    }
  }
  for (let i = rowIndex + 1; i < 9; i++) {
    if (boardData[i][colIndex] === null) {
      candidateSquares.push({ row: i, col: colIndex });
    } else {
      break;
    }
  }

  // Calculate candidate squares in the horizontal direction
  for (let i = colIndex - 1; i >= 0; i--) {
    if (boardData[rowIndex][i] === null) {
      candidateSquares.push({ row: rowIndex, col: i });
    } else {
      break;
    }
  }
  for (let i = colIndex + 1; i < 9; i++) {
    if (boardData[rowIndex][i] === null) {
      candidateSquares.push({ row: rowIndex, col: i });
    } else {
      break;
    }
  }

  return candidateSquares;
}