'use strict';

// Selcting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');



const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');




// Starting Game conditions
let scores, currentScore, activePlayer, playing;

const init = function ()  {
    scores = [0, 0];
    diceEl.classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
}

init()

const switchPlayer = function () {
    // reset current player score
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    // reset current  score
    currentScore = 0;
    //Switch next player 
    activePlayer = activePlayer === 0 ? 1 : 0;
    //Switch active background
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}

//Game functionallity


//1. generating a random dice roll
btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.floor(Math.random() * 6) + 1
        //2.display dice
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`
        //3. check for rolled 1
        if (dice !== 1) {
            // if not > add current score
            currentScore += dice;
            //add the current score dynamically
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
            // before currentScore0El.textContent = currentScore;
        } else {
            switchPlayer()
        }
    }

})

//2. Holding the game
btnHold.addEventListener('click', function () {
    if (playing) {
        //1.add urrent score to the global score
        //it's like: scores[1] = scores[1] + currentScore
        scores[activePlayer] += currentScore;
        //show current score to the global score
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
        //2. check if player's score is >=100
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            document.querySelector(`#current--${activePlayer}`).textContent = `You are the Winner`;
        } else {
            switchPlayer()
        }
    }

})

//3. restarting the game
btnNew.addEventListener('click', init)