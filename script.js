"use strict";

// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(".message").textContent = "🍕 Correct Number!";
// document.querySelector(".random_no").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 20;

//Will generate random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = `⛔ No number!`;
    displayMessage("⛔ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🍕 Correct Number!";
    displayMessage("🍕 Correct Number!");
    document.querySelector(".random_no").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".random_no").style.width = "7rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = `💥 You lost the game!`;
      displayMessage(`💥 You lost the game!`);
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#830007";
    }
  }
});

// When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too high!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = `💥 You lost the game!`;
//     }
// When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 Too low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = `💥 You lost the game!`;
//     }
//   }
// });

// Reset the Game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".random_no").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#253f48";
  document.querySelector(".random_no").style.width = "5rem";
  // document.querySelector(".message").textContent = "🤔 Start guessing...";
  displayMessage("🤔 Start guessing...");
  document.querySelector(".guess").value = null;
});
