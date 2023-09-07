// eslint-disable-next-line complexity
export function calculateKakuCandidateSquares(
  rowIndex: number,
  colIndex: number,
  boardData: (string | null)[][]
) {
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

export function calculateHishaCandidateSquares(
  rowIndex: number,
  colIndex: number,
  boardData: (string | null)[][]
) {
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
