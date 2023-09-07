type Piece = string | null;

export function hasPlayerWon(boardData: Piece[][], targetKing: string): boolean {
  // 2D boardDataを走査して、targetKingが存在しないかを確認
  for (let i = 0; i < boardData.length; i++) {
    for (let j = 0; j < boardData[i].length; j++) {
      // eslint-disable-next-line max-depth
      if (boardData[i][j] === targetKing) {
        // ターゲットとなる王将がまだボード上に存在する場合、勝利していない
        return false;
      }
    }
  }

  // ターゲットとなる王将がボード上に存在しない場合、勝利している
  return true;
}
