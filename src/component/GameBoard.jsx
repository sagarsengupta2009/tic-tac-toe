import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSelectSquare(rowIdx, colIdx) {
    setGameBoard((prevGameBoard) => {
        const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        updatedBoard[rowIdx][colIdx] = 'X'
        return updatedBoard;
    })
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((col, colIdx) => (
              <li key={colIdx}>
                <button onClick={() => handleSelectSquare(rowIdx, colIdx)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
