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

  const handleSquareClick = (piece: string | null) => {
    setSelectedPiece(piece);
    console.log(piece);
  };
  return (
    <div className={styles.board}>
      {boardData.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((piece, colIndex) => (
            <div
              key={colIndex}
              className={styles.square}
              onClick={() => handleSquareClick(piece)} // クリック時のハンドラを追加
            >
              {piece !== null ? <div className={styles.piece}>{piece}</div> : null}
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
