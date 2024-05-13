const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const hiddenEl = document.querySelector(".hidden");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

let current, scores, activePlayer, playing;

const init = function () {
  current = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player1El.classList.remove("player--winner");
  player0El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();
// removing the images of the dice
hiddenEl.classList.add("hidden");
const changeInterface = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  current = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    // Generating a random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    //adding back the images of the dice
    hiddenEl.classList.remove("hidden");
    hiddenEl.src = `./img/dice-${dice}.png`;
    if (dice !== 1) {
      current += dice;
      document.getElementById(`current--${activePlayer}`).textContent = current;
    } else {
      changeInterface();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
      hiddenEl.classList.add("hidden");
    } else {
      changeInterface();
    }
  }
});

btnNew.addEventListener("click", init);
