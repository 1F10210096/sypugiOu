export function calculateGinCandidateSquares(
  rowIndex: number,
  colIndex: number,
  boardData: (string | null)[][]
) {
  const candidateSquares = [];

  // 銀将の動きを表す方向
  const directions = [
    { row: -1, col: 0 }, // Up
    { row: -1, col: -1 }, // Left Up (対角)
    { row: -1, col: 1 }, // Right Up (対角)
    { row: 1, col: -1 }, // Left Down (対角)
    { row: 1, col: 1 }, // Right Down (対角)
  ];

  for (const direction of directions) {
    const newRow = rowIndex + direction.row;
    const newCol = colIndex + direction.col;

    // 新しい位置がボードの境界内にあるかどうかを確認
    if (newRow >= 0 && newRow < boardData.length && newCol >= 0 && newCol < boardData[0].length) {
      candidateSquares.push({ row: newRow, col: newCol });
    }
  }

  return candidateSquares;
}

export function calculateEnemyGinCandidateSquares(
  rowIndex: number,
  colIndex: number,
  boardData: (string | null)[][]
) {
  const candidateSquares = [];

  // 敵の銀将の動きを表す方向
  const directions = [
    { row: 1, col: 0 }, // Down
    { row: 1, col: -1 }, // Left Down (対角)
    { row: 1, col: 1 }, // Right Down (対角)
    { row: -1, col: -1 }, // Left Up (対角)
    { row: -1, col: 1 }, // Right Up (対角)
  ];

  for (const direction of directions) {
    const newRow = rowIndex + direction.row;
    const newCol = colIndex + direction.col;

    // 新しい位置がボードの境界内にあるかどうかを確認
    if (newRow >= 0 && newRow < boardData.length && newCol >= 0 && newCol < boardData[0].length) {
      candidateSquares.push({ row: newRow, col: newCol });
    }
  }

  return candidateSquares;
}