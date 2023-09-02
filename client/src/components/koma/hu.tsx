export function calculateFuCandidateSquares(rowIndex:number, colIndex:number) {
  const candidateSquares = [];

  if (rowIndex > 0) {
    candidateSquares.push({ row: rowIndex - 1, col: colIndex });
  }

  return candidateSquares;
}