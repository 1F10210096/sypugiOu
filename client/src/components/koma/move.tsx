
export function movePiece(
  fromRow: number,
  fromCol: number,
  toRow: number,
  toCol: number,
  boardData: (string | null)[][]
): (string | null)[][] {
  // 新しいボードデータのコピーを作成
  const newBoardData = boardData.map(row => row.slice());

  // 移動元の駒を取得
  const pieceToMove = newBoardData[fromRow][fromCol];

  // 移動先に駒を配置
  newBoardData[toRow][toCol] = pieceToMove;

  // 移動元の位置を空にする
  newBoardData[fromRow][fromCol] = null;

  return newBoardData;
}