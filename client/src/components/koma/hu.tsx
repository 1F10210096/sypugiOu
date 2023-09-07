export function calculateFuCandidateSquares(
  rowIndex: number, 
  colIndex: number, 
  isSente: boolean
) {
  const candidateSquares = [];

  if (isSente) {
    // 先手の場合、上に進む
    if (rowIndex > 0) {
      candidateSquares.push({ row: rowIndex - 1, col: colIndex });
    }
  } else {
    // 後手の場合、下に進む
    if (rowIndex < 8) {
      candidateSquares.push({ row: rowIndex + 1, col: colIndex });
    }
  }

  return candidateSquares;
}
