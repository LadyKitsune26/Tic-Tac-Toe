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



// David's solution

// Horizontal wins
// 0, 1, 2
// 3, 4, 5
// 6, 7, 8
// Veritcal wins
// 0, 3, 6
// 2, 4, 7
// 2, 5, 8
// Diagonal wins
// 0, 4, 8 
// 2, 4, 6, 



const allSquares = document.querySelectorAll(".board__square");
const title = document.querySelector(".board__title");

let currentPlayer = "X";
let gameOver = false;
let board = new Array(9); // is using array.every this line is: let board = new Array(9).fill(undefined)    array.every cannot loop through an empty array. 

allSquares.forEach((square, i) => {
  square.addEventListener("click", () => {
    if (square.innerHTML || gameOver) {
        return
    }

    square.innerHTML = currentPlayer;
    board[i] = currentPlayer

    if (checkWin()) {
        console.log('this ran')
        title.innerHTML = `${currentPlayer} Wins!`
        gameOver = true;
        return;
    }

    if (checkDraw()) {
        title.innerHTML = 'Draw!'
        gameOver = true;
        return;
    }

    title.innerHTML = `${currentPlayer}'s Turn`;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});


function restartGame() {
    gameOver = false
    title.innerHTML = `${currentPlayer}'s Turn`
    allSquares.forEach(square => {
        square.innerHTML = ''
    })
    board = new Array(9)
}

function checkDraw() {
    // return board.every(symbole => {
    //  if (symbol) {
    //      return true;
    //  }
    //}
    // return true

  console.log(board);
  for (let i = 0; i < board.length; ++i) {
    if (!board[i]) {
      return false;
    }
  }
  return true;
}

function checkWin() {
  const winningIndicies = [
    // Horizontal wins
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
      // Vertical wins
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
      // Diagonal wins
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningIndicies.length; ++i) {
    const matchingIndicies = winningIndicies[i];
    console.log(matchingIndicies[i]);
    let symbol1 = board[matchingIndicies[0]]
    let symbol2 = board[matchingIndicies[1]]
    let symbol3 = board[matchingIndicies[2]]

    if (!symbol1 || !symbol2 || !symbol3) {
        continue;
    }

    if (symbol1 === symbol2 && symbol2 === symbol3){
        return true;
    }
  }
}
