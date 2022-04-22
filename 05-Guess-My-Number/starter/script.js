'use strict';

//generate a random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//   console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;

//selecting the check button for a click event and writing a function for that event
document.querySelector('.check').addEventListener('click', function () {
  //getting the input from user[its String] and converting it to number then storing it in n
  const n = Number(document.querySelector('.guess').value);
  //   console.log(n, typeof n);

  //check the condition of secretNumber and n
  if (secretNumber === n) {
    document.querySelector('.message').textContent = 'Correct Answer';
  } else if (n < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low';
  } else if (n > secretNumber) {
    document.querySelector('.message').textContent = 'Too High';
  }
});
