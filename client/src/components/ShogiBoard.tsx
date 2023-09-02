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

const clickBoardData = Array(9).fill(Array(9).fill(0));

const ShogiBoard = () => {
  const [boardData, setBoardData] = useState(initialBoardData);
  const [selectedPiece, setSelectedPiece] = useState<string | null>(null);
  const [candidateSquare, setCandidateSquare] = useState<{ row: number; col: number }[]>([]);

  // eslint-disable-next-line complexity
  const handleSquareClick = (piece: string | null, rowIndex: number, colIndex: number) => {
    // 歩の駒をクリックした場合、候補地を計算して移動
    console.log(piece);
    console.log(candidateSquare);

    console.log(rowIndex);
    console.log(colIndex);

    console.log('b');
    setSelectedPiece(piece);
    // 歩の場合、候補地を計算して表示
    if (piece === '歩' && rowIndex > 0) {
      setCandidateSquare([{ row: rowIndex - 1, col: colIndex }]); // 配列として候補地を設定
    } else {
      setCandidateSquare([]); // それ以外の場合は空の配列を設定
    }
    
     // 飛車の場合、候補地を計算して表示
  if (piece === '飛') {
    const candidateSquares: { row: number; col: number }[] = [];
    
    // 縦方向の候補地を計算
    for (let i = rowIndex - 1; i >= 0; i--) {
      // eslint-disable-next-line max-depth
      if (boardData[i][colIndex] === null) {
        candidateSquares.push({ row: i, col: colIndex });
      } else {
        break;
      }
    }
    for (let i = rowIndex + 1; i < 9; i++) {
      // eslint-disable-next-line max-depth
      if (boardData[i][colIndex] === null) {
        candidateSquares.push({ row: i, col: colIndex });
      } else {
        break;
      }
    }
    
    // 横方向の候補地を計算
    for (let i = colIndex - 1; i >= 0; i--) {
      // eslint-disable-next-line max-depth
      if (boardData[rowIndex][i] === null) {
        candidateSquares.push({ row: rowIndex, col: i });
      } else {
        break;
      }
    }
    for (let i = colIndex + 1; i < 9; i++) {
      // eslint-disable-next-line max-depth
      if (boardData[rowIndex][i] === null) {
        candidateSquares.push({ row: rowIndex, col: i });
      } else {
        break;
      }
    }
    
    // 計算された候補地を設定
    setCandidateSquare(candidateSquares);
  } else {
    // それ以外の場合は候補地をクリア
    setCandidateSquare([]);
  }
  };

  // const handleCandidateClick = (rowIndex: number, colIndex: number) => {
  //   console.log('a');

  //   if (selectedPiece === '歩' && candidateSquare !== null) {
  //     // 歩を移動する
  //     const updatedBoardData = [...boardData];
  //     updatedBoardData[candidateSquare.row][candidateSquare.col] = '歩';
  //     updatedBoardData[candidateSquare.row + 1][candidateSquare.col] = null;
  //     setBoardData(updatedBoardData);
  //     setSelectedPiece(null);
  //     setCandidateSquare(null);
  //   }
  // };


  return (
    <div className={styles.board}>
      {boardData.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((piece, colIndex) => (
            <div key={colIndex} className={styles.square}>
              {piece !== null ? (
                <div
                  className={styles.nk_koma}
                  onClick={() => handleSquareClick(piece, rowIndex, colIndex)}
                >
                  {piece}
                </div>
              ) : null}
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
