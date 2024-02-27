window.onload = init;

let score = 0;
let isPlaying;

const wordInput = null;
const currentWord = null;
const scoreDisplay = null;
const timeDisplay = null;
const message = null;
const seconds = null;
const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "charming",
  "thirsty",
  "worried",
  "nervous",
];
const levels = {
  easy: 10,
  medium: 5,
  hard: 3,
};

const currentLevel = levels.easy;
let time = currentLevel;

function showword(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  const currentWord = document.querySelector("#current-word");
  currentWord.innerHTML = words[randIndex];
}
function init() {
  const wordInput = document.querySelector("#word-input");
  const scoreDisplay = document.querySelector("#score");

  document.querySelector("#seconds").innerHTML = currentLevel;

  showword(words);
  wordInput.addEventListener("input", startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showword(words);
    document.querySelector("#word-input").value = "";
    score++;
  }
  if (score === -1) {
    document.querySelector("#score").innerHTML = 0;
  } else {
    document.querySelector("#score").innerHTML = score;
  }
}
function matchWords() {
  if (
    document.querySelector("#word-input").value ===
    document.querySelector("#current-word").innerHTML
  ) {
    const message = document.querySelector("#message");
    message.innerHTML = "Correct !!!";
    return true;
  } else {
    document.querySelector("#message").innerHTML = "";
    return false;
  }
}
function showword(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  const currentWord = document.querySelector("#current-word");
  currentWord.innerHTML = words[randIndex];
}
function checkStatus() {
  if (!isPlaying && time === 0) {
    document.querySelector("#message").innerHTML =
      ' <img src="hello.png" style="width: 400px;" >  Thua gòi nha !';
    score = -1;
  }
}
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  const timeDisplay = document.querySelector("#time");
  timeDisplay.innerHTML = time;
}
