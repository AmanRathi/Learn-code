//global variables and selectors
const newGameTrigger = document.querySelector(".btn--new");
let diceRoll = document.querySelector(".dice");
let diceRollTrigger = document.querySelector(".btn--roll");
let hold = document.querySelector(".btn--hold");

//Player1 data
const player1 = {
  currentScore: document.querySelector("#current--0"),
  actualScore: document.querySelector("#score--0"),
  turn: true,
};

//Player2 data
const player2 = {
  currentScore: document.querySelector("#current--1"),
  actualScore: document.querySelector("#score--1"),
  turn: false,
};

//new game, reset everything
newGameTrigger.addEventListener("click", function (event) {
  player1.currentScore.textContent = 0;
  player1.actualScore.textContent = 0;
  player2.currentScore.textContent = 0;
  player2.actualScore.textContent = 0;
  diceRoll.textContent = 0;
  diceRollTrigger.disabled = false;
  hold.disabled = false;
  diceRollTrigger.classList.remove("is-blocked");
  hold.classList.remove("is-blocked");
  document.querySelector(".player--0").classList.remove("winner");
});

//Rolling a dice -> Updating current score and dice value
diceRollTrigger.addEventListener("click", function () {
  const currentRoll = Math.floor(Math.random() * 7);
  if (currentRoll == 0) {
    diceRoll.textContent = currentRoll;
    player1.currentScore.textContent = 0;
    player2.currentScore.textContent = 0;
    turnChange();
    [player1.turn, player2.turn] = [player2.turn, player1.turn];
    //need to update css class here
  }

  if (player1.turn) {
    player1.currentScore.textContent =
      Number(player1.currentScore.textContent) + currentRoll;
    diceRoll.textContent = currentRoll;
  } else {
    player2.currentScore.textContent =
      Number(player2.currentScore.textContent) + currentRoll;
    diceRoll.textContent = currentRoll;
  }
});

//Holing the value
hold.addEventListener("click", function () {
  if (player1.turn) {
    player1.actualScore.textContent =
      Number(player1.actualScore.textContent) +
      Number(player1.currentScore.textContent);
  } else {
    player2.actualScore.textContent =
      Number(player2.actualScore.textContent) +
      Number(player2.currentScore.textContent);
  }
  //checking winner
  if (Number(player1.actualScore.textContent) >= 100) {
    diceRollTrigger.disabled = true;
    hold.disabled = true;
    diceRollTrigger.classList.add("is-blocked");
    hold.classList.add("is-blocked");
    document.querySelector(".player--0").classList.add("winner");
  } else if (Number(player2.actualScore.textContent) >= 100) {
    diceRollTrigger.disabled = true;
    hold.disabled = true;
    diceRollTrigger.classList.add("is-blocked");
    hold.classList.add("is-blocked");
    document.querySelector(".player--1").classList.add("winner");
  }
  turnChange();
  player1.currentScore.textContent = 0;
  player2.currentScore.textContent = 0;
  diceRoll.textContent = 0;
  [player1.turn, player2.turn] = [player2.turn, player1.turn];
});

//Turn change - for now just adding the class
function turnChange() {
  if (player1.turn) {
    document.querySelector(".player--0").classList.remove("player--active");
    document.querySelector(".player--1").classList.add("player--active");
  } else {
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
  }
}
