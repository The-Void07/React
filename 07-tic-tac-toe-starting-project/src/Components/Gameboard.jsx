export default function Gameboard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
//Down here is the ways in which we can create the same results.
//Although, the one that is active is more efficient as it uses
//minimum number of states to manage the code.

// const [gameBoard, setGameBoard] = useState(initialGameBoard);
// function handleSelectSquare(rowIndex, colIndex) {
//   setGameBoard((prevGameBoard) => {
//     const updatedBoard = [
//       ...prevGameBoard.map((innerArray) => [...innerArray]),
//     ];
//     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//     return updatedBoard;
//   });
//   onSelectSquare();
// }
