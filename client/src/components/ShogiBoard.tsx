import { useState } from 'react';
import styles from './index.module.css';

const boardData = [
  ['香', '桂', '銀', '金', '王', '金', '銀', '桂', '香'],
  [null, '飛', null, null, null, null, null, '角', null],
  ['歩', '歩', '歩', '歩', '歩', '歩', '歩', '歩', '歩'],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  ['歩', '歩', '歩', '歩', '歩', '歩', '歩', '歩', '歩'],
  [null, '角', null, null, null, null, null, '飛', null],
  ['香', '桂', '銀', '金', '王', '金', '銀', '桂', '香'],
];

const ShogiBoard = () => {
  const [selectedPiece, setSelectedPiece] = useState<string | null>(null);
  const [candidateSquare, setCandidateSquare] = useState<{ row: number; col: number } | null>(null);

  const handleSquareClick = (piece: string | null, rowIndex: number, colIndex: number) => {
    setSelectedPiece(piece);

    // 歩の駒をクリックした場合、候補地を計算して表示
    if (piece === '歩' && rowIndex > 0) {
      setCandidateSquare({ row: rowIndex - 1, col: colIndex });
    } else {
      setCandidateSquare(null); // それ以外の場合は候補地をクリア
    }
  };

  return (
    <div className={styles.board}>
      {boardData.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((piece, colIndex) => (
            <div key={colIndex} className={styles.square}>
              {piece !== null ? (
                <div
                  className={styles.piece}
                  onClick={() => handleSquareClick(piece, rowIndex, colIndex)}
                >
                  {piece}
                </div>
              ) : null}
              {candidateSquare !== null &&
                candidateSquare.row === rowIndex &&
                candidateSquare.col === colIndex && <div className={styles.candidate} />}
            </div>
          ))}
        </div>
      ))}
      {/* 選択された駒の表示 */}
      {selectedPiece !== null && <div>選択された駒: {selectedPiece}</div>}
    </div>
  );
};

export default ShogiBoard;
