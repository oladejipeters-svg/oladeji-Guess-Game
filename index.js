const input = document.querySelector("#userInput");
const playBtn = document.querySelector("#playBtn");
const userSquare = document.querySelector("#userSquare");
const randomSquare = document.querySelector("#randomSquare");
const form = document.querySelector("form");
const message = document.querySelector("#message");
const scores = document.querySelector("#scores");
const resetBtn = document.querySelector("#resetBtn")

let wins = 0;
let losses = 0;

function clearInput() {
  input.value = "";
}

function updateScores() {
  scores.innerHTML = `
    <p class="wins"><b>Wins:</b> ${wins}</p>
    <p class="losses"><b>Losses:</b> ${losses}</p>
  `;
}

function resetScores() {
  wins = 0;
  losses = 0;
  updateScores();
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevents reloading
  const userValue = Number(input.value);
  message.textContent = "";

  if (isNaN(userValue) || userValue < 1 || userValue > 100) {
    message.textContent = "Enter a number between 1 and 100.";
    return; // stop here if invalid
  }

  userSquare.textContent = userValue;
  userSquare.classList.add("flash");
  setTimeout(() => userSquare.classList.remove("flash"), 300);

  const randomNumber = Math.floor(Math.random() * 100) + 1; // 1–100
  randomSquare.textContent = randomNumber;
  randomSquare.classList.add("random-flash");
  setTimeout(() => randomSquare.classList.remove("random-flash"), 300);

  if (userValue === randomNumber) {
    message.textContent = "🎉 You Won!";
    message.style.color = "black";
    wins++;
  } else {
    message.textContent = "❌ Try Again!";
    message.style.color = "purple";
    losses++;
  }

  updateScores();
  clearInput(); // <-- still used here
});

resetBtn.addEventListener("click", resetScores);
