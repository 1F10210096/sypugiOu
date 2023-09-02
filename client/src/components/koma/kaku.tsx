// eslint-disable-next-line complexity
export function calculateKakuCandidateSquares(rowIndex:number, colIndex:number, boardData: (string | null)[][]) {
  const candidateSquares = [];

  // Calculate candidate squares diagonally
  for (let i = rowIndex - 1, j = colIndex - 1; i >= 0 && j >= 0; i--, j--) {
    if (boardData[i][j] === null) {
      candidateSquares.push({ row: i, col: j });
    } else {
      break;
    }
  }
  for (let i = rowIndex - 1, j = colIndex + 1; i >= 0 && j < 9; i--, j++) {
    if (boardData[i][j] === null) {
      candidateSquares.push({ row: i, col: j });
    } else {
      break;
    }
  }
  for (let i = rowIndex + 1, j = colIndex - 1; i < 9 && j >= 0; i++, j--) {
    if (boardData[i][j] === null) {
      candidateSquares.push({ row: i, col: j });
    } else {
      break;
    }
  }
  for (let i = rowIndex + 1, j = colIndex + 1; i < 9 && j < 9; i++, j++) {
    if (boardData[i][j] === null) {
      candidateSquares.push({ row: i, col: j });
    } else {
      break;
    }
  }

  return candidateSquares;
}