'use strict';

//we can elements by query selector and getElementById
//when using getElementById we dont need to add # we can give the id name directly
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//select the players with classnames to change the class names of the two players by using toggle
//so we are storing the element of both players here

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//to change the content of the currentScore of the active player
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

//the variables are inside the function so they need to declared outside but initialized inside the init
let currentScore, playing, activePlayer;

//the total scores of both the players are stored in an array
const scores = [0, 0];
//create a initialization function to call to reset the game for newgame button click

const init = function () {
  //add the starting conditions to init

  //set the score to [0,0]
  scores[0] = 0;
  scores[1] = 0;

  //the current scores of both the players need to become zero at new game
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  //have a separate variable for storing the current score rolled by the dice
  currentScore = 0;

  //have a variable to account whether the game is playing or not
  playing = true; //since we are playing at the start

  //starting point
  //at the starting point change the total scores of both players to 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  //change the dice visibility by adding the hidden class
  diceEl.classList.add('hidden');

  //have a separate variable to store the current player
  //set to zero because the first player is player1
  activePlayer = 0;

  //add the required code for the new game button to init
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

//call init function to start the game
init();
//function to switch player
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //as we switch the player the current score must be set to zero
  currentScore = 0;
  //if active player is 0 it will switch to 1 and vice versa
  activePlayer = activePlayer === 0 ? 1 : 0;

  //use the toggle feature in classlist to change the class names
  //toggle removes the className if it is present and adds it if it is not present
  //player-active has the css property to change the background color of the active player so we are using it to toggle
  //we use toggle on both players so that its always present in only one player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//when button is clicked to roll the dice add a eventlistener
btnRoll.addEventListener('click', function () {
  if (playing) {
    //changing the dice visibility back to normal by removing hidden class
    diceEl.classList.remove('hidden');
    //create the dice number randomly
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    //change the dice image by using ${} notation according to the dice number
    document.querySelector('.dice').src = `dice-${dice}.png`;
    //if the dice is not 1 then add the currentScore var with the dice value
    if (dice !== 1) {
      currentScore += dice;
      //change the current score of the active player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //change the textContent of the current score of the active player
      //this is only for the player0
      // currentScore0El.textContent = currentScore;
    } else {
      //since we need to repeat this code we can write it in separate function
      switchPlayer();
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // //as we switch the player the current score must be set to zero
      // currentScore = 0;
      // //if active player is 0 it will switch to 1 and vice versa
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // //use the toggle feature in classlist to change the class names
      // //toggle removes the className if it is present and adds it if it is not present
      // //player-active has the css property to change the background color of the active player so we are using it to toggle
      // //we use toggle on both players so that its always present in only one player
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // // TODO:add current score to the players total score
    //the current scores are added to total scores according to the active player
    //since scores has the player1 total score at [0] and player 2 total score in [1]
    scores[activePlayer] += currentScore;

    //the total score will be set according to the active player
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // // TODO:check if the total score is >=100
    if (scores[activePlayer] >= 20) {
      //set playing =false since after winning the game should stop
      playing = false;

      //add the hidden class back to the dice to remove it
      diceEl.classList.add('hidden');
      //we are selecting the player and adding a player--winner class to show the player in different color
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //we are removing the player from being the current player
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    //  // TODO:if it is then finish the game

    // // TODO:if not switch the player
    //we are calling the function switchPlayer to switch the players
    switchPlayer();
  }
});
btnNew.addEventListener('click', function () {
  //as the new game is clicked the function is called
  init();
});
