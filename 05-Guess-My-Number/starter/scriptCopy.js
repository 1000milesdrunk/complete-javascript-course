//Creating a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//display the secret number for now
// document.querySelector('.number').textContent = secretNumber;

//create variables for all the necessary selectors
const checkBtn = document.querySelector('.check');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
highscoreEl.textContent = '0';
console.log(guess);
let guessValue;
let message = function (args) {
  document.querySelector('.message').textContent = args;
};
let scoreEl = document.querySelector('.score');
//have a starting score of 20
let score = 20;
//create a click event for
checkBtn.addEventListener('click', function () {
  //get the input value

  guessValue = Number(guess.value);
  //since all the input will be in string
  //   console.log(guessValue, typeof guessValue);
  //if its empty change the message to No Number Entered
  //use message variable to change the value when needed
  if (guessValue === 0) {
    message('No Number Entered');
  } else if (guessValue == secretNumber) {
    //if guess is correct
    //display the secret number
    number.textContent = secretNumber;
    //change message
    message('Correct Value');
    //change color
    document.querySelector('body').classList.add('winner');
    //change width
    number.style.width = '30rem';
    //if score>highscore change the highscore
    const highscore = Number(highscoreEl.textContent);
    console.log(highscore);
    if (score > highscore) {
      highscoreEl.textContent = score;
    }
  } else if (guessValue !== secretNumber) {
    //if not equal change the message
    message(guessValue < secretNumber ? 'Too Low' : 'Too High');
    //reduce the score
    score--;
    scoreEl.textContent = score;
    //if score reaches 0 then change the message to You lose and hide the check button
    if (score == 0) {
      message('You Lost');
      checkBtn.classList.add('hidden');
    }
  }
});
//set the onclick on again button
document.querySelector('.again').addEventListener('click', function () {
  //change the message to start guessing
  message('Start Guessing');
  //   set the score back to 20
  score = 20;
  scoreEl.textContent = score;
  //remove the class winner
  document.querySelector('body').classList.remove('winner');
  //change the secret number again
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   console.log(secretNumber);
  //set the number back to ?
  number.textContent = '?';
  //set the value back to blank
  guess.value = '';
});
