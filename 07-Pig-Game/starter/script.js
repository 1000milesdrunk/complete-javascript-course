'use strict';

//we can elements by query selector and getElementById
//when using getElementById we dont need to add # we can give the id name directly
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('btn--hold');

//starting point
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  diceEl.classList.remove('hidden');
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRoll);
  document.querySelector('.dice').src = `dice-${diceRoll}.png`;
});
