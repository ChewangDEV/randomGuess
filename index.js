const start = document.querySelector(".start");
const computerGuess = document.querySelector(".computerGuess");
const submit = document.querySelector(".submit");
const input = document.querySelector("input");
const play = document.querySelector(".play");
const result = document.querySelector(".result");
const tried = document.querySelector(".attempt");
const live = document.querySelector(".live");

let ranNumber = 0;
let attempt = 0;
let life = 7;

submit.style.display = "none";
play.style.display = "none";
input.style.display = 'none';

live.innerHTML = life;

start.addEventListener("click", () => {
  ranNumber = Math.floor(Math.random() * 100) + 1;
  computerGuess.innerHTML = "Computer guessed a number.";
  start.style.display = "none";
  submit.style.display = "inline-block";
  play.style.display = "inline-block";
  input.style.display = 'block';
});

submit.addEventListener("click", () => {
  const guess = parseInt(input.value);

  if (Number.isNaN(guess)) {
    computerGuess.innerHTML = "Enter a valid number";
    return;
  }

  attempt++;

  if (guess === ranNumber) {
    result.innerHTML = ranNumber;
    computerGuess.innerHTML = "You guessed the correct number!";
    tried.innerHTML = `You guessed the number in ${attempt} attempts`;
    submit.disabled = true;
    return;
  }

  life--;
  live.innerHTML = life;

  if (life === 0) {
    computerGuess.innerHTML = "Game Over";
    result.innerHTML = `Answer was ${ranNumber}`;
    submit.style.display = 'none';
    return;
  }

  if (guess < ranNumber) {
    computerGuess.innerHTML = "Too Low";
  } else {
    computerGuess.innerHTML = "Too High";
  }
});

play.addEventListener("click", () => {
  

  start.style.display = "block";
  submit.style.display = "none";
  play.style.display = "none";
  input.style.display = 'none';

  computerGuess.innerHTML = "";
  result.innerHTML = "";
  tried.innerHTML = "";

  input.value = "";

  ranNumber = 0;
  attempt = 0;
  life = 7;

  live.innerHTML = life;
});
