// // Chat GPT solution //
// // Select all needed elements
// const squares = document.querySelectorAll(".board__square");
// const title = document.querySelector(".board__title");
// const restartBtn = document.querySelector(".restart");

// let currentPlayer = "X";
// let board = Array(9).fill(null);
// let gameActive = true;

// // Handle square clicks
// function handleClick(e) {
//   const index = Array.from(squares).indexOf(e.target);

//   // Prevent overriding or playing after game over
//   if (board[index] || !gameActive) return;

//   // Update board and UI
//   board[index] = currentPlayer;
//   e.target.textContent = currentPlayer;

//   // Check for a winner or draw
//   if (checkWin()) {
//     title.textContent = `${currentPlayer} Wins! 🎉`;
//     highlightWinningSquares();
//     gameActive = false;
//     return;
//   }

//   if (board.every(cell => cell !== null)) {
//     title.textContent = "It's a Draw! 🤝";
//     gameActive = false;
//     return;
//   }

//   // Switch player turns
//   currentPlayer = currentPlayer === "X" ? "O" : "X";
//   title.textContent = `${currentPlayer}'s Turn`;
// }

// // Check for a winning combination
// function checkWin() {
//   const winPatterns = [
//     [0, 1, 2], // rows
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6], // columns
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8], // diagonals
//     [2, 4, 6],
//   ];

//   for (const [a, b, c] of winPatterns) {
//     if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//       return [a, b, c]; // Return the winning indexes
//     }
//   }
//   return null;
// }

// // Highlight winning squares
// function highlightWinningSquares() {
//   const winningCombo = checkWin();
//   if (!winningCombo) return;
//   winningCombo.forEach(index => {
//     squares[index].style.backgroundColor = "#90ee90"; // light green
//   });
// }

// // Restart the game
// function restartGame() {
//   board.fill(null);
//   squares.forEach(square => {
//     square.textContent = "";
//     square.style.backgroundColor = "white";
//   });
//   currentPlayer = "X";
//   title.textContent = "X's Turn";
//   gameActive = true;
// }

// // Event listeners
// squares.forEach(square => square.addEventListener("click", handleClick));
// restartBtn.addEventListener("click", restartGame);