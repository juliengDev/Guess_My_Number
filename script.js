'use strict';
const checkBtn = document.querySelector('.check');
const resultMsg = document.querySelector('.message');
const score = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const guessInput = document.querySelector('.guess');
const displayNumber = document.querySelector('.number');
let scoreNumber = 20;
let numberToGuess = Math.floor(Math.random() * scoreNumber + 1);
const gameHandler = scoreHandler => {
  if (scoreHandler >= 1) {
    score.textContent = scoreHandler;
  }
  if (scoreHandler === 0) {
    resultMsg.textContent = `🥲 Sorry you lost the game!`;
    againBtn.addEventListener('click', playAgain);
  }
};
const displayMsg = msg => {
  resultMsg.textContent = msg;
};
const displayHighScore = score => {
  let highScore = Number(document.querySelector('.highscore').textContent);

  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = score;
  }
};
const playGame = () => {
  checkBtn.addEventListener('click', () => {
    const playerNumber = Number(document.querySelector('.guess').value);
    const wrongAwnserLarge = `⛔️ Too large. Try again`;
    const wrongAwnserSmall = `⛔️ Too small. Try again`;
    const goodAwnser = `🏆 Congratulations, you find the correct number. You win!`;
    if (!playerNumber || isNaN(playerNumber)) {
      const message = `⚠️ Please select a number to guess and click on Check! ⚠️`;
      displayMsg(message);
    } else if (playerNumber > numberToGuess) {
      displayMsg(wrongAwnserLarge);
      scoreNumber--;
      gameHandler(scoreNumber);
      score.textContent = scoreNumber;
    } else if (playerNumber < numberToGuess) {
      displayMsg(wrongAwnserSmall);
      scoreNumber--;
      gameHandler(scoreNumber);
      score.textContent = scoreNumber;
    } else if (playerNumber === numberToGuess) {
      displayMsg(goodAwnser);
      displayNumber.textContent = playerNumber;
      displayNumber.style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#2f9e44';
      displayHighScore(scoreNumber);
      againBtn.addEventListener('click', playAgain);
    }
  });
};
const playAgain = () => {
  numberToGuess = Math.floor(Math.random() * scoreNumber + 1);
  scoreNumber = 20;
  score.textContent = '20';
  resultMsg.textContent = `Start guessing...`;
  guessInput.value = '';
  displayNumber.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  displayNumber.style.width = '15rem';
};
playGame();
