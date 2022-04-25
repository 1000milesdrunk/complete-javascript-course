'use strict';

//set score to 20 at the start
let score = 20;
let highscore = 0;
//generate a random number
/*Math.random generates a number btwn 0 and 1 so multiply it by 20
and trunc it to get only integer value then add one since it will be btwn 0 amd 19 */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//   console.log(secretNumber);
//set the number to the place
//document.querySelector('.number').textContent = secretNumber;

//selecting the check button for a click event and writing a function for that event
document.querySelector('.check').addEventListener('click', function () {
  //getting the input from user[its String] and converting it to number then storing it in n
  const n = Number(document.querySelector('.guess').value);
  // console.log(n, typeof n);
  //check if any value is entered if not return
  if (n == 0) {
    document.querySelector('.message').textContent = 'No Number Entered';
    return;
  }

  if (n > 20 || n < 0) {
    document.querySelector('.message').textContent = 'Out of Range';
    return;
  }
  //check the condition of secretNumber and n

  //if secret number is selected
  if (secretNumber === n) {
    document.querySelector('.message').textContent = 'Correct Answer';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'limegreen';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //to make the code dry
  else if (secretNumber !== n) {
    document.querySelector('.message').textContent =
      n > secretNumber ? 'Too High' : 'Too Low';
    //if the n is less then reduce the score until zero
    if (score >= 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = score;
    }
  }

  // //if i/p is too low
  // else if (n < secretNumber) {
  //   document.querySelector('.message').textContent = 'Too Low';
  //   //if the n is less then reduce the score until zero
  //   if (score >= 1) {
  //     document.querySelector('.score').textContent = --score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost';
  //     document.querySelector('.score').textContent = score--;
  //   }
  //   //if i/p is too high
  // } else if (n > secretNumber) {
  //   document.querySelector('.message').textContent = 'Too High';
  //   //if the n is less then reduce the score until zero
  //   if (score >= 1) {
  //     document.querySelector('.score').textContent = --score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost';
  //     document.querySelector('.score').textContent = score--;
  //   }
  // }
});
//on clicking again the game should reset
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'black';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document;
});
