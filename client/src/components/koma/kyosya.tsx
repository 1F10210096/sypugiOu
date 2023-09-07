export function calculateKyoshaCandidateSquares(
  rowIndex: number,
  colIndex: number,
  boardData: (string | null)[][],
  isSente: boolean
) {
  const candidateSquares = [];

  if (isSente) {
    for (let i = rowIndex - 1; i >= 0; i--) {
      // eslint-disable-next-line max-depth
      if (boardData[i] && boardData[i][colIndex] === null) {
        candidateSquares.push({ row: i, col: colIndex });
      } else {
        break;
      }
    }
  } else {
    for (let i = rowIndex + 1; i < 9; i++) {
      // eslint-disable-next-line max-depth
      if (boardData[i] && boardData[i][colIndex] === null) {
        candidateSquares.push({ row: i, col: colIndex });
      } else {
        break;
      }
    }
  }

  return candidateSquares;
}