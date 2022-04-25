'use strict';

//we can elements by query selector and getElementById
//when using getElementById we dont need to add # we can give the id name directly
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('btn--hold');

//to change the content of the currentScore of the active player
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
//have a separate variable for storing the current score rolled by the dice
let currentScore = 0;

//starting point
//at the starting point change the total scores of both players to 0
score0El.textContent = 0;
score1El.textContent = 0;
//change the dice visibility by adding the hidden class
diceEl.classList.add('hidden');

//have a separate variable to store the current player
//set to zero because the first player is player1
let activePlayer = 0;
//when button is clicked to roll the dice add a eventlistener
btnRoll.addEventListener('click', function () {
  //changing the dice visibility back to normal by removing hidden class
  diceEl.classList.remove('hidden');
  //create the dice number randomly
  const dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);

  //change the dice image by using ${} notation according to the dice number
  document.querySelector('.dice').src = `dice-${dice}.png`;
  //if the dice is not 1 then add the currentScore var with the dice value
  if (dice !== 1) {
    //todo:Need to change according to the current player
    currentScore += dice;
    //change the textContent of the current score of the active player
    currentScore0El.textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
