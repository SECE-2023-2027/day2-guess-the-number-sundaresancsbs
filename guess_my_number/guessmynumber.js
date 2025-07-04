'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Helper function to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check button event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('⛔️ No number!');
  }
  // Out of range
  else if (guess < 1 || guess > 20) {
    displayMessage('🚫 Enter number 1-20!');
  }
  // Correct guess
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscoreValue').textContent = highscore;
    }
  }
  // Wrong guess
  else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.scoreValue').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.scoreValue').textContent = 0;
      document.body.style.backgroundColor = '#b34747';
    }
  }
});

// Again button event
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.scoreValue').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';