let btn = document.getElementById("guessBtn");
let ansBox = document.getElementById("ansBox");
let numGuess = document.getElementById("numGuesses");

let randNum = 0;
let noGuess = 0;

btn.addEventListener("click", matchNum);

resetGame();

function genRandom() {
  randNum = Math.random();
  randNum = Math.round(randNum * 100);
}

function matchNum() {
  let inputNum = document.getElementById("inputGuess");
  if (inputNum.value == randNum) {
    ansBox.innerHTML = `<p class="text-lg text-green-600 font-bold">You guessed it right! ${randNum}</p>`;
    btn.disabled=true;
    setTimeout(() => {
      resetGame();
    }, 5000);
  } else if (inputNum.value < randNum) {
    ansBox.innerHTML = `<p class="text-lg text-red-600 font-bold">You guessed too low</p>`;
    updateCount()
  } else {
    ansBox.innerHTML = `<p class="text-lg text-red-600 font-bold">You guessed too high</p>`;
    updateCount();
  }
  inputNum.value="";
}

function updateCount() {
  noGuess++;
  numGuess.textContent = `Number of Guesses : ${noGuess}`;
}

function resetGame(){
  noGuess = 0;
  btn.disabled=false;
  genRandom();
  numGuess.textContent = `Number of Guesses : ${noGuess}`;
  ansBox.textContent='Enter a number between 1 to 100';
}