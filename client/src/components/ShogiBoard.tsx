import { useState } from 'react';
import styles from './index.module.css';

const initialBoardData = [
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
  const [boardData, setBoardData] = useState(initialBoardData);
  const [selectedPiece, setSelectedPiece] = useState<string | null>(null);
  const [candidateSquare, setCandidateSquare] = useState<{ row: number; col: number } | null>(null);

  const handleSquareClick = (piece: string | null, rowIndex: number, colIndex: number) => {
    // 歩の駒をクリックした場合、候補地を計算して移動
    if (
      piece === '歩' &&
      candidateSquare !== null && // candidateSquareがnullでないことを確認
      candidateSquare.row === rowIndex && // 候補地の行とクリックした場所の行が一致
      candidateSquare.col === colIndex // 候補地の列とクリックした場所の列が一致
    ) {
      // 歩を移動する
      console.log('a')
      const updatedBoardData = [...boardData];
      updatedBoardData[candidateSquare.row][candidateSquare.col] = null; // 候補地をクリア
      updatedBoardData[rowIndex][colIndex] = '歩'; // クリックした場所に歩を移動
      setBoardData(updatedBoardData);
      setSelectedPiece(null); // selectedPieceをクリア
      setCandidateSquare(null); // candidateSquareをクリア
    } else {
      console.log('b')
      setSelectedPiece(piece);
      // 歩の場合、候補地を計算して表示
      if (piece === '歩' && rowIndex > 0) {
        setCandidateSquare({ row: rowIndex - 1, col: colIndex });
      } else {
        setCandidateSquare(null); // それ以外の場合は候補地をクリア
      }
    }
  };

  const handleCandidateClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('a');

    if (selectedPiece === '歩' && candidateSquare !== null) {
      // 歩を移動する
      const updatedBoardData = [...boardData];
      updatedBoardData[candidateSquare.row][candidateSquare.col] = '歩';
      updatedBoardData[candidateSquare.row + 1][candidateSquare.col] = null;
      setBoardData(updatedBoardData);
      setSelectedPiece(null);
      setCandidateSquare(null);
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
                candidateSquare.col === colIndex && (
                  <div className={styles.candidate} onClick={handleCandidateClick} />
                )}
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
