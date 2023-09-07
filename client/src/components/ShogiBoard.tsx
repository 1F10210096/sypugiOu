import { useState } from 'react';
import styles from './index.module.css';
import { calculateGinCandidateSquares } from './koma/gin';
import { calculateHishaCandidateSquares } from './koma/hisya';
import { calculateFuCandidateSquares } from './koma/hu';
import { calculateKakuCandidateSquares } from './koma/kaku';
import { calculateKeimaCandidateSquares } from './koma/keima';
import { calculateKinCandidateSquares } from './koma/kin';
import { calculateKyoshaCandidateSquares } from './koma/kyosya';
import { calculateOuCandidateSquares } from './koma/ou';
import { calculateRyuouCandidateSquares } from './koma/ryuuou';
import { calculateToCandidateSquares } from './koma/to';
import { calculateRyumaCandidateSquares } from './koma/uma';

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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNav = () => {
      setIsExpanded(!isExpanded);
  };


  
  // eslint-disable-next-line complexity
  const handleSquareClick = (piece: string | null, rowIndex: number, colIndex: number) => {
    // 歩の駒をクリックした場合、候補地を計算して移動
    console.log(piece);
    console.log(candidateSquare);

    console.log(rowIndex);
    console.log(colIndex);

    console.log('b');
    setSelectedPiece(piece);
    if (piece === '歩') {
      const candidateSquares = calculateFuCandidateSquares(rowIndex, colIndex);
      setCandidateSquare(candidateSquares);
    } else if (piece === '飛') {
      const candidateSquares = calculateHishaCandidateSquares(rowIndex, colIndex, boardData);
      setCandidateSquare(candidateSquares);
    } else if (piece === '角') {
      const candidateSquares = calculateKakuCandidateSquares(rowIndex, colIndex, boardData);
      setCandidateSquare(candidateSquares);
    } else if (piece === '香車') {
      const candidateSquares = calculateKyoshaCandidateSquares(rowIndex, colIndex, boardData);
      setCandidateSquare(candidateSquares);
    } else if (piece === '銀') {
      const candidateSquares = calculateGinCandidateSquares(rowIndex, colIndex, boardData);
      setCandidateSquare(candidateSquares);
    } else if (piece === '王') {
      const candidateSquares = calculateOuCandidateSquares(rowIndex, colIndex);
      setCandidateSquare(candidateSquares);
    } else if (piece === '金') {
      const candidateSquares = calculateKinCandidateSquares(rowIndex, colIndex, boardData);
      setCandidateSquare(candidateSquares);
    } else if (piece === '桂馬') {
      const candidateSquares = calculateKeimaCandidateSquares(rowIndex, colIndex, boardData);
      setCandidateSquare(candidateSquares);
    } else if (piece === 'と') {
      const candidateSquares = calculateToCandidateSquares(rowIndex, colIndex, boardData);
      setCandidateSquare(candidateSquares);
    } else if (piece === '竜王') {
      const candidateSquares = calculateRyuouCandidateSquares(rowIndex, colIndex, boardData);
      setCandidateSquare(candidateSquares);
    } else if (piece === '竜馬') {
      const candidateSquares = calculateRyumaCandidateSquares(rowIndex, colIndex, boardData);
      setCandidateSquare(candidateSquares);
    } else {
      setCandidateSquare([]);
    }
  };


  return (
    <><header className="site-header">
      <div className="wrapper site-header__wrapper">
        <a href="#" className="brand">Brand</a>
        <nav className="nav">
          <button className="nav__toggle" aria-expanded={isExpanded} onClick={toggleNav} type="button">
            menu
          </button>
          {isExpanded && (
            <ul className="nav__wrapper">
              <li className="nav__item"><a href="#">Home</a></li>
              <li className="nav__item"><a href="#">About</a></li>
              <li className="nav__item"><a href="#">Services</a></li>
              <li className="nav__item"><a href="#">Hire us</a></li>
              <li className="nav__item"><a href="#">Contact</a></li>
            </ul>
          )}
        </nav>
      </div>
    </header><div className={styles.board}>
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
      </div></>
  );
};

export default ShogiBoard;
